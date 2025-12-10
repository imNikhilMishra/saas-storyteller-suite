# Analytics Data Generator

Automated Playwright script that generates realistic dummy analytics data for GA4 and PostHog by simulating real user sessions with randomized behavior patterns.

## Quick Start

### 1. Install Dependencies

```bash
npm install
npx playwright install chromium
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your actual values
```

Required environment variables:
- `SITE_URL` - Your deployed website URL
- `GA4_MEASUREMENT_ID` - Your Google Analytics 4 Measurement ID
- `POSTHOG_API_KEY` - Your PostHog API key
- `POSTHOG_HOST` - Your PostHog host (usually https://app.posthog.com)

### 3. Run the Script

```bash
npm start
# Or: node generate-analytics-data.js
```

The script will run continuously, generating ~250 sessions per day with randomized timing.

Press `Ctrl+C` to stop.

## What It Does

- **Simulates real users** with varied browsers, devices, and screen sizes
- **Randomized behavior**: Bounces, medium sessions, and deep exploration
- **Natural timing**: Random intervals (5-45 min) between executions
- **Parallel sessions**: 3-15 concurrent users per run
- **Realistic interactions**: Page scrolling, varied dwell times, natural navigation

## Expected Output

### Daily Traffic
- ~250 sessions/day
- ~4,500-5,000 pageviews/week
- Average 2.5-3 pages per session
- ~30% bounce rate

### User Diversity
- 4 browser types (Chrome, Safari, Firefox, Edge)
- 3 device types (Desktop, Laptop, Tablet)
- Unique user context per session

## Files

- `generate-analytics-data.js` - Main script
- `PLAN.md` - Detailed implementation plan
- `EC2-SETUP.md` - Guide for deploying to AWS EC2
- `.env.example` - Environment variable template
- `.env` - Your configuration (gitignored)

## Deployment

For production deployment on EC2, see [EC2-SETUP.md](./EC2-SETUP.md).

## Configuration

Adjust these in your `.env` file:

```bash
TARGET_SESSIONS_PER_DAY=250      # Daily session target
MIN_INTERVAL_MINUTES=5           # Min time between runs
MAX_INTERVAL_MINUTES=45          # Max time between runs
MIN_PARALLEL_USERS=3             # Min concurrent sessions
MAX_PARALLEL_USERS=15            # Max concurrent sessions
```

## Troubleshooting

**No data appearing in analytics?**
- Verify GA4 and PostHog tracking codes are installed on your site
- Check your SITE_URL is correct and accessible
- GA4 data can take 24-48 hours to appear in reports
- PostHog shows real-time data in the Events tab

**Script crashes or errors?**
- Ensure Playwright browsers are installed: `npx playwright install chromium`
- Check your .env file exists and has correct values
- Verify your site is accessible: `curl -I https://your-site.com`

**Want to test without waiting?**
- Temporarily set `MIN_INTERVAL_MINUTES=0` and `MAX_INTERVAL_MINUTES=1` in .env
- Run the script to generate sessions quickly
- Remember to restore original values for realistic timing

## Cost

### Local (Free)
- Run on your computer, no cost

### AWS EC2 (Recommended for week-long runs)
- t3.small instance: ~$3.50/week
- See [EC2-SETUP.md](./EC2-SETUP.md) for details

## License

MIT
