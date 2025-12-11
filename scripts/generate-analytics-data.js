import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import logger from './logger.js';

// Add stealth plugin to bypass bot detection
chromium.use(StealthPlugin());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '.env') });

// Configuration
const CONFIG = {
  siteUrl: process.env.SITE_URL || 'http://localhost:5173',
  minIntervalMinutes: parseInt(process.env.MIN_INTERVAL_MINUTES) || 5,
  maxIntervalMinutes: parseInt(process.env.MAX_INTERVAL_MINUTES) || 45,
  minParallelUsers: parseInt(process.env.MIN_PARALLEL_USERS) || 3,
  maxParallelUsers: parseInt(process.env.MAX_PARALLEL_USERS) || 15,
  targetSessionsPerDay: parseInt(process.env.TARGET_SESSIONS_PER_DAY) || 250,
};

// All available pages
const PAGES = {
  high: ['/', '/features', '/pricing', '/blog'],
  medium: ['/about', '/contact', '/case-studies', '/integrations'],
  low: [
    '/documentation',
    '/security',
    '/careers',
    '/partners',
    '/terms',
    '/privacy',
    '/product-tour',
  ],
};

// User agents for different browsers
const USER_AGENTS = [
  // Chrome (50%)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  // Safari (25%)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
  // Firefox (15%)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:120.0) Gecko/20100101 Firefox/120.0',
  // Edge (10%)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
];

// Viewports for different devices
const VIEWPORTS = [
  // Desktop (40%)
  { width: 1920, height: 1080 },
  { width: 1920, height: 1080 },
  { width: 1920, height: 1080 },
  { width: 1920, height: 1080 },
  // Desktop (30%)
  { width: 1366, height: 768 },
  { width: 1366, height: 768 },
  { width: 1366, height: 768 },
  // Laptop (20%)
  { width: 1440, height: 900 },
  { width: 1440, height: 900 },
  // Tablet (10%)
  { width: 768, height: 1024 },
];

// Helper functions
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[random(0, array.length - 1)];
}

function getRandomInterval() {
  const minutes = random(CONFIG.minIntervalMinutes, CONFIG.maxIntervalMinutes);
  return minutes * 60 * 1000; // Convert to milliseconds
}

function getRandomUserCount() {
  return random(CONFIG.minParallelUsers, CONFIG.maxParallelUsers);
}

function getRandomPages() {
  const sessionType = Math.random();

  if (sessionType < 0.3) {
    // Quick bounce - 1 page
    return [getWeightedPage()];
  } else if (sessionType < 0.8) {
    // Medium session - 2-4 pages
    const count = random(2, 4);
    const pages = [];
    for (let i = 0; i < count; i++) {
      pages.push(getWeightedPage());
    }
    return pages;
  } else {
    // Deep exploration - 5-8 pages
    const count = random(5, 8);
    const pages = [];
    for (let i = 0; i < count; i++) {
      pages.push(getWeightedPage());
    }
    return pages;
  }
}

function getWeightedPage() {
  const rand = Math.random();

  if (rand < 0.6) {
    // 60% - High traffic pages
    return randomChoice(PAGES.high);
  } else if (rand < 0.9) {
    // 30% - Medium traffic pages
    return randomChoice(PAGES.medium);
  } else {
    // 10% - Low traffic pages
    return randomChoice(PAGES.low);
  }
}

async function simulateUserSession(browser, userId) {
  const sessionStartTime = Date.now();
  const userAgent = randomChoice(USER_AGENTS);
  const viewport = randomChoice(VIEWPORTS);

  logger.info('Starting user session', {
    userId,
    userAgent: userAgent.substring(0, 50) + '...',
    viewport
  });

  const context = await browser.newContext({
    userAgent,
    viewport,
    locale: randomChoice(['en-US', 'en-GB', 'en-CA']),
    timezoneId: randomChoice(['America/New_York', 'America/Los_Angeles', 'America/Chicago']),
    hasTouch: false,
    javaScriptEnabled: true,
    bypassCSP: false,
    // Add realistic browser features to avoid bot detection
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
      'sec-ch-ua': '"Google Chrome";v="120", "Not_A Brand";v="99", "Chromium";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
    }
  });

  const page = await context.newPage();

  // Monitor PostHog EVENT requests (the important ones)
  let posthogEventCount = 0;
  page.on('request', request => {
    const url = request.url();
    // Only log actual event tracking requests
    if (url.includes('posthog.com') && url.includes('/e/')) {
      posthogEventCount++;
      logger.debug('PostHog event request', {
        userId,
        eventNumber: posthogEventCount,
        method: request.method(),
        url: url.substring(0, 80) + '...'
      });
    }
  });

  page.on('response', response => {
    const url = response.url();
    if (url.includes('posthog.com') && url.includes('/e/')) {
      logger.debug('PostHog event response', {
        userId,
        status: response.status()
      });
    }
  });

  const pages = getRandomPages();

  logger.info('Session plan', { userId, pageCount: pages.length, pages });

  try {
    for (const pagePath of pages) {
      const url = `${CONFIG.siteUrl}${pagePath}`;
      logger.info('Visiting page', { userId, pagePath });

      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for PostHog to initialize and send pageview
      await page.waitForTimeout(3000);

      // Random scroll behavior
      const scrolls = random(1, 3);
      for (let i = 0; i < scrolls; i++) {
        const scrollAmount = random(300, 800);
        await page.evaluate((amount) => window.scrollBy(0, amount), scrollAmount);
        await page.waitForTimeout(random(500, 1500));
      }

      // Random dwell time (10 seconds to 5 minutes)
      const dwellTime = random(10000, 300000);
      await page.waitForTimeout(dwellTime);

      // Random think time before next page (3-15 seconds)
      if (pages.indexOf(pagePath) < pages.length - 1) {
        await page.waitForTimeout(random(3000, 15000));
      }
    }

    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000);
    logger.info('Session completed successfully', {
      userId,
      pagesVisited: pages.length,
      posthogEvents: posthogEventCount,
      durationSeconds: sessionDuration
    });
    return { success: true, userId, pagesVisited: pages.length, posthogEvents: posthogEventCount };
  } catch (error) {
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000);
    logger.error('Session failed', {
      userId,
      error: error.message,
      stack: error.stack,
      durationSeconds: sessionDuration
    });
    return { success: false, userId, error: error.message };
  } finally {
    await context.close();
  }
}

async function runExecution() {
  const userCount = getRandomUserCount();
  const executionStartTime = Date.now();

  logger.info('Starting execution batch', {
    userCount,
    timestamp: new Date().toISOString()
  });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });

    // Run all user sessions in parallel
    const sessions = [];
    for (let i = 1; i <= userCount; i++) {
      sessions.push(simulateUserSession(browser, i));
    }

    const results = await Promise.all(sessions);
    await browser.close();

    // Calculate statistics
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const totalPages = results.filter(r => r.success).reduce((sum, r) => sum + r.pagesVisited, 0);
    const totalEvents = results.filter(r => r.success).reduce((sum, r) => sum + r.posthogEvents, 0);
    const executionDuration = Math.round((Date.now() - executionStartTime) / 1000);

    logger.info('Execution batch completed', {
      userCount,
      successful,
      failed,
      totalPages,
      totalEvents,
      durationSeconds: executionDuration
    });

    return { userCount, successful, failed, totalPages, totalEvents };
  } catch (error) {
    logger.error('Execution batch failed', {
      error: error.message,
      stack: error.stack,
      userCount
    });
    if (browser) {
      await browser.close();
    }
    throw error;
  }
}

async function main() {
  logger.info('Analytics Data Generator started', {
    siteUrl: CONFIG.siteUrl,
    targetSessionsPerDay: CONFIG.targetSessionsPerDay,
    intervalRange: `${CONFIG.minIntervalMinutes}-${CONFIG.maxIntervalMinutes} minutes`,
    parallelUsers: `${CONFIG.minParallelUsers}-${CONFIG.maxParallelUsers}`,
    nodeVersion: process.version,
    platform: process.platform
  });

  let totalSessions = 0;
  let totalSuccessful = 0;
  let totalFailed = 0;
  let dailySessions = 0;
  let dailySuccessful = 0;
  let dailyFailed = 0;
  let lastResetDate = new Date().toDateString();

  while (true) {
    try {
      const result = await runExecution();

      totalSessions += result.userCount;
      totalSuccessful += result.successful;
      totalFailed += result.failed;
      dailySessions += result.userCount;
      dailySuccessful += result.successful;
      dailyFailed += result.failed;

      // Reset daily counter at midnight
      const currentDate = new Date().toDateString();
      if (currentDate !== lastResetDate) {
        logger.info('Daily report', {
          date: lastResetDate,
          totalSessions: dailySessions,
          successful: dailySuccessful,
          failed: dailyFailed,
          successRate: dailySessions > 0 ? ((dailySuccessful / dailySessions) * 100).toFixed(2) + '%' : 'N/A'
        });
        dailySessions = 0;
        dailySuccessful = 0;
        dailyFailed = 0;
        lastResetDate = currentDate;
      }

      const intervalMs = getRandomInterval();
      const intervalMin = Math.round(intervalMs / 60000);
      const nextRunTime = new Date(Date.now() + intervalMs).toLocaleTimeString();

      logger.info('Status update', {
        totalSessions,
        totalSuccessful,
        totalFailed,
        todaySessions: dailySessions,
        todayTarget: CONFIG.targetSessionsPerDay,
        todayProgress: ((dailySessions / CONFIG.targetSessionsPerDay) * 100).toFixed(1) + '%',
        nextRunInMinutes: intervalMin,
        nextRunTime
      });

      await new Promise(resolve => setTimeout(resolve, intervalMs));
    } catch (error) {
      logger.error('Main loop error', {
        error: error.message,
        stack: error.stack
      });
      logger.warn('Retrying in 5 minutes...');
      await new Promise(resolve => setTimeout(resolve, 5 * 60 * 1000));
    }
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  logger.warn('Received SIGINT signal, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.warn('Received SIGTERM signal, shutting down gracefully...');
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection', {
    reason: reason,
    promise: promise
  });
});

// Start the script
main().catch(console.error);
