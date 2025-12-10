# Analytics Data Generator - Implementation Plan

## Overview
This script generates realistic dummy analytics data for both **GA4** and **PostHog** using Playwright browser automation. It simulates real user sessions with randomized timing and behavior patterns to populate your analytics dashboards with meaningful data.

## Target Metrics

### Volume
- **Total sessions**: ~1,750 sessions over 7 days
- **Daily sessions**: ~250 sessions/day
- **Execution frequency**: Random intervals (5-45 minutes)
- **Parallel users per run**: 3-15 concurrent sessions

### User Behavior Distribution
- **Quick bounces (30%)**: ~75 sessions/day
  - Visit 1 page only
  - Dwell time: 10-30 seconds

- **Medium sessions (50%)**: ~125 sessions/day
  - Visit 2-4 pages
  - Dwell time: 1-3 minutes per page

- **Deep exploration (20%)**: ~50 sessions/day
  - Visit 5+ pages
  - Dwell time: 2-5 minutes per page

### User Diversity
Each session simulates a unique user with:
- **Random User-Agent**: Chrome (50%), Safari (25%), Firefox (15%), Edge (10%)
- **Random Viewport**:
  - Desktop: 1920x1080 (40%), 1366x768 (30%)
  - Laptop: 1440x900 (20%)
  - Tablet: 768x1024 (10%)
- **Unique Browser Context**: Separate cookies/storage for each session
- **Random Navigation Patterns**: Different users prefer different sections

## Page Visit Patterns

Your site has 16 pages with weighted traffic distribution:

### High Traffic Pages (60% of visits)
- `/` - Home page
- `/features` - Product features
- `/pricing` - Pricing information
- `/blog` - Blog listing

### Medium Traffic Pages (30% of visits)
- `/about` - About us
- `/contact` - Contact form
- `/case-studies` - Customer case studies
- `/integrations` - Integration marketplace

### Low Traffic Pages (10% of visits)
- `/documentation` - Product docs
- `/security` - Security information
- `/careers` - Job listings
- `/partners` - Partner program
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/product-tour` - Interactive tour
- `/blog/:slug` - Individual blog posts

## Timing Characteristics

### Between Script Executions
- Random interval: 5-45 minutes
- Creates natural traffic patterns
- Avoids obvious scheduled spikes

### Within User Sessions
- **Think time between clicks**: 3-15 seconds
- **Page dwell time**: 10 seconds to 5 minutes
- **Scroll behavior**: Random scrolling on each page
- **Session duration**: Varies based on behavior type

## Expected Analytics Output

### Google Analytics 4 (GA4)
- **Users**: ~1,750 unique users (one per session)
- **Sessions**: ~1,750 sessions
- **Pageviews**: ~4,500-5,000 total pageviews
- **Pages per session**: Average 2.5-3 pages
- **Session duration**: Average 2-3 minutes
- **Bounce rate**: ~30%
- **Top pages**: Home > Features > Pricing > Blog
- **Device breakdown**: Desktop (70%), Tablet (20%), Mobile (10%)
- **Browser breakdown**: Chrome (50%), Safari (25%), Firefox (15%), Edge (10%)

### PostHog
- Similar metrics as GA4
- **Events**: pageview events for each page visit
- **User paths**: Visual navigation flows
- **Session recordings**: If enabled, captures user interactions
- **Funnels**: Data for conversion path analysis
- **Retention**: User return patterns (all new users in this case)

## Files Structure

```
scripts/
├── PLAN.md                      # This file - implementation plan
├── README.md                    # Quick start guide
├── package.json                 # Node.js dependencies
├── .env.example                 # Example environment variables
├── .env                         # Your actual config (gitignored)
├── generate-analytics-data.js   # Main Playwright script
├── EC2-SETUP.md                 # EC2 deployment guide
└── logs/                        # Generated logs (gitignored)
```

## Configuration

### Environment Variables

Create a `.env` file in the `scripts/` directory with:

```bash
# Required - Site URL
SITE_URL=https://your-deployed-site.com

# Required - Google Analytics 4
GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Required - PostHog
POSTHOG_API_KEY=phc_xxxxxxxxxxxxx
POSTHOG_HOST=https://app.posthog.com

# Optional - Script Behavior (defaults shown)
MIN_INTERVAL_MINUTES=5
MAX_INTERVAL_MINUTES=45
MIN_PARALLEL_USERS=3
MAX_PARALLEL_USERS=15
TARGET_SESSIONS_PER_DAY=250
```

### Getting Your Tracking IDs

**For GA4:**
1. Go to Google Analytics Admin
2. Create a new GA4 property
3. Get your Measurement ID (format: G-XXXXXXXXXX)

**For PostHog:**
1. Sign up at posthog.com
2. Create a new project
3. Get your API key from Project Settings (format: phc_xxxxxxxxxxxxx)

## How It Works

### Script Flow

1. **Initialize**
   - Load environment variables
   - Calculate target sessions based on daily goal
   - Set up logging

2. **Execution Loop**
   - Calculate random number of parallel users (3-15)
   - Spawn that many concurrent browser sessions
   - Each session:
     - Creates unique browser context (new user)
     - Picks random user agent and viewport
     - Determines session type (bounce, medium, deep)
     - Navigates through pages based on type
     - Adds random delays and scrolling
     - Closes browser context
   - Wait for all sessions to complete
   - Calculate next random execution time (5-45 min)
   - Log stats and sleep until next run

3. **Continuous Operation**
   - Runs indefinitely until stopped
   - Self-schedules based on random intervals
   - Logs all activities for monitoring

### Randomization Strategy

**Why randomize?**
- Makes traffic patterns look organic
- Avoids detection as automated traffic
- Creates realistic analytics data
- Better represents actual user behavior

**What gets randomized?**
- Time between script runs
- Number of concurrent users
- User agent strings
- Viewport sizes
- Session types (bounce vs. engaged)
- Pages visited
- Time spent on each page
- Scroll depth and patterns
- Think time between clicks

## Running the Script

### Local Testing

```bash
cd scripts
npm install
# Create .env with your config
node generate-analytics-data.js
```

### On EC2

See `EC2-SETUP.md` for detailed instructions on:
- EC2 instance setup
- Installing Node.js and Playwright
- Configuring systemd service for auto-start
- Monitoring and troubleshooting

### Monitoring

The script logs:
- Start time of each execution
- Number of parallel sessions spawned
- Each page visit per session
- Session completion status
- Next scheduled execution time
- Daily session count progress

### Stopping the Script

- Local: Press `Ctrl+C`
- EC2 systemd: `sudo systemctl stop analytics-generator`

## Benefits

1. **Realistic Data**: Actual browser visits trigger real tracking code
2. **Multi-Platform**: Single script populates both GA4 and PostHog
3. **Natural Patterns**: Randomization creates organic-looking traffic
4. **Controllable**: Easy to adjust volume and behavior patterns
5. **Maintainable**: Simple Node.js script, easy to debug
6. **Cost-Effective**: Runs on single small EC2 instance
7. **Flexible**: Can run locally or on server

## Limitations

- Generates only new users (no returning users)
- No conversion events beyond page views
- No form submissions or custom events
- All traffic comes from same IP (unless using proxies)
- Limited to one week of data generation as designed

## Extending the Script

Want to add more realism? Consider:
- Add custom events (button clicks, form submissions)
- Implement returning user sessions
- Use proxy rotation for different IPs
- Add geolocation diversity
- Simulate mobile app events
- Add e-commerce tracking events
- Implement A/B test variation tracking

## Troubleshooting

**Script isn't generating data:**
- Check your SITE_URL is accessible
- Verify GA4 and PostHog tracking codes are on the site
- Check browser console in Playwright for errors
- Verify .env file is in the correct location

**Analytics not showing data:**
- GA4: Can take 24-48 hours to show in reports
- PostHog: Check real-time events tab for immediate feedback
- Verify your measurement IDs are correct

**EC2 running out of memory:**
- Reduce MAX_PARALLEL_USERS
- Use larger instance type (t3.medium)
- Check for browser processes not closing properly

## Cost Estimates

### EC2 (running 24/7 for one week)
- **t3.small**: ~$0.02/hour = $3.36/week
- **t3.medium**: ~$0.04/hour = $6.72/week (if needed)

### Analytics Platforms
- **GA4**: Free (unlimited)
- **PostHog**: Free tier includes 1M events/month (you'll use ~5K)

**Total estimated cost**: $3-7 for one week of data generation

## Support

For issues or questions:
1. Check the logs in `scripts/logs/`
2. Review EC2-SETUP.md for deployment issues
3. Verify environment variables in `.env`
4. Test locally before deploying to EC2
