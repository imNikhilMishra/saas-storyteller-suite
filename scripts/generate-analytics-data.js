import { chromium } from 'playwright';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

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
  const context = await browser.newContext({
    userAgent: randomChoice(USER_AGENTS),
    viewport: randomChoice(VIEWPORTS),
  });

  const page = await context.newPage();
  const pages = getRandomPages();

  console.log(`  [User ${userId}] Starting session with ${pages.length} page(s)`);

  try {
    for (const pagePath of pages) {
      const url = `${CONFIG.siteUrl}${pagePath}`;
      console.log(`  [User ${userId}] Visiting: ${pagePath}`);

      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

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

    console.log(`  [User ${userId}] Session completed`);
  } catch (error) {
    console.error(`  [User ${userId}] Error: ${error.message}`);
  } finally {
    await context.close();
  }
}

async function runExecution() {
  const userCount = getRandomUserCount();
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Starting execution at ${new Date().toISOString()}`);
  console.log(`Spawning ${userCount} parallel user sessions`);
  console.log(`${'='.repeat(60)}\n`);

  const browser = await chromium.launch({ headless: true });

  // Run all user sessions in parallel
  const sessions = [];
  for (let i = 1; i <= userCount; i++) {
    sessions.push(simulateUserSession(browser, i));
  }

  await Promise.all(sessions);
  await browser.close();

  return userCount;
}

async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('Analytics Data Generator');
  console.log('='.repeat(60));
  console.log(`Site URL: ${CONFIG.siteUrl}`);
  console.log(`Target sessions/day: ${CONFIG.targetSessionsPerDay}`);
  console.log(`Interval range: ${CONFIG.minIntervalMinutes}-${CONFIG.maxIntervalMinutes} minutes`);
  console.log(`Parallel users: ${CONFIG.minParallelUsers}-${CONFIG.maxParallelUsers}`);
  console.log('='.repeat(60) + '\n');

  let totalSessions = 0;
  let dailySessions = 0;
  let lastResetDate = new Date().toDateString();

  while (true) {
    try {
      const sessionsGenerated = await runExecution();
      totalSessions += sessionsGenerated;
      dailySessions += sessionsGenerated;

      // Reset daily counter at midnight
      const currentDate = new Date().toDateString();
      if (currentDate !== lastResetDate) {
        console.log(`\n[Daily Report] ${lastResetDate}: ${dailySessions} sessions generated`);
        dailySessions = 0;
        lastResetDate = currentDate;
      }

      const intervalMs = getRandomInterval();
      const intervalMin = Math.round(intervalMs / 60000);
      const nextRunTime = new Date(Date.now() + intervalMs).toLocaleTimeString();

      console.log(`\n[Stats] Total sessions: ${totalSessions} | Today: ${dailySessions}/${CONFIG.targetSessionsPerDay}`);
      console.log(`[Next Run] In ${intervalMin} minutes (at ${nextRunTime})\n`);

      await new Promise(resolve => setTimeout(resolve, intervalMs));
    } catch (error) {
      console.error(`\n[Error] ${error.message}`);
      console.log('Retrying in 5 minutes...\n');
      await new Promise(resolve => setTimeout(resolve, 5 * 60 * 1000));
    }
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\nShutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n\nShutting down gracefully...');
  process.exit(0);
});

// Start the script
main().catch(console.error);
