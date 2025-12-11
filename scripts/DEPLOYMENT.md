# EC2 Deployment Guide - Analytics Data Generator

This guide covers deploying the analytics data generator to an AWS EC2 t3.medium instance with PM2 process management.

## Prerequisites

- AWS EC2 t3.medium instance (Ubuntu 22.04 LTS recommended)
- SSH access to the instance
- Security group allowing outbound HTTPS (443) for accessing your website
- Node.js 18+ installed on EC2

## 1. Initial EC2 Setup

### Connect to EC2
```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-ip
```

### Install Node.js
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version
```

### Install Required System Dependencies
```bash
# Playwright requires these system dependencies
sudo npx playwright install-deps chromium
```

## 2. Deploy Application Files

### Option A: Direct File Transfer (SCP)
```bash
# From your local machine
cd /Users/manu/Documents/code/freelance/shrestha/hackathon/saas-storyteller-suite
scp -i /path/to/your-key.pem -r scripts ubuntu@your-ec2-ip:~/
```

### Option B: Git Clone (Recommended)
```bash
# On EC2 instance
cd ~
git clone <your-repository-url>
cd scripts
```

## 3. Install Dependencies

```bash
cd ~/scripts

# Install all dependencies (including PM2, Playwright, Winston)
npm install

# Install Playwright browsers
npx playwright install chromium
```

## 4. Configure Environment Variables

Create a `.env` file in the scripts directory:

```bash
cd ~/scripts
nano .env
```

Add your configuration:
```env
# Website to track
SITE_URL=https://your-website.com

# Traffic configuration
MIN_INTERVAL_MINUTES=5
MAX_INTERVAL_MINUTES=45
MIN_PARALLEL_USERS=3
MAX_PARALLEL_USERS=15
TARGET_SESSIONS_PER_DAY=250

# Logging level (info, debug, warn, error)
LOG_LEVEL=info
```

Save and exit (Ctrl+X, then Y, then Enter).

## 5. Set Up PM2

### Start the Application
```bash
# Start with PM2 using ecosystem config
npm run pm2:start
```

### Configure PM2 to Start on System Boot
```bash
# Generate startup script
npm run pm2:startup

# This will output a command like:
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

# Copy and run the command it outputs
# Example (your actual command may differ):
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

### Save PM2 Process List
```bash
# Save the current PM2 process list to resurrect after reboot
npm run pm2:save
```

## 6. Verify Deployment

### Check PM2 Status
```bash
npm run pm2:status
```

You should see:
```
┌─────┬────────────────────────┬─────────────┬─────────┬─────────┬──────────┐
│ id  │ name                   │ mode        │ ↺       │ status  │ cpu      │
├─────┼────────────────────────┼─────────────┼─────────┼─────────┼──────────┤
│ 0   │ analytics-generator    │ fork        │ 0       │ online  │ 0%       │
└─────┴────────────────────────┴─────────────┴─────────┴─────────┴──────────┘
```

### Check Application Logs (Winston)
```bash
# View most recent combined log
tail -f ~/scripts/logs/combined-$(date +%Y-%m-%d).log

# View error logs
tail -f ~/scripts/logs/error-$(date +%Y-%m-%d).log
```

### Monitor Resource Usage
```bash
# Real-time PM2 monitoring dashboard
npm run pm2:monit

# Check system resources
htop  # (install with: sudo apt install htop)
```

## 7. PM2 Management Commands

```bash
# Start the application
npm run pm2:start

# Stop the application
npm run pm2:stop

# Restart the application
npm run pm2:restart

# Delete from PM2 (stop and remove)
npm run pm2:delete

# View logs (minimal, winston is primary)
npm run pm2:logs

# View process status
npm run pm2:status

# Interactive monitoring
npm run pm2:monit
```

## 8. Testing the Deployment

### Verify Script is Running
```bash
# Check latest log entries
tail -20 ~/scripts/logs/combined-$(date +%Y-%m-%d).log
```

You should see entries like:
```json
{"level":"info","message":"Analytics Data Generator started","timestamp":"2025-12-11 10:30:00"}
{"level":"info","message":"Starting execution batch","timestamp":"2025-12-11 10:30:05"}
{"level":"info","message":"Session completed successfully","timestamp":"2025-12-11 10:32:15"}
```

### Check Your Analytics Dashboard
- Log into your PostHog/analytics dashboard
- Verify events are being received
- Check that page views appear realistic

## 9. Monitoring & Maintenance

### Log Rotation
Winston handles log rotation automatically:
- Daily rotation at midnight
- Keeps 14 days of logs
- Logs stored in: `~/scripts/logs/`

### Check Logs Periodically
```bash
# Check today's activity
tail -100 ~/scripts/logs/combined-$(date +%Y-%m-%d).log | grep "Status update"

# Check for errors
tail -50 ~/scripts/logs/error-$(date +%Y-%m-%d).log
```

### Monitor PM2 Health
```bash
# Quick status check
pm2 status

# Detailed info
pm2 info analytics-generator
```

### Monitor System Resources
```bash
# CPU, memory, disk usage
htop

# Disk space
df -h

# Memory usage
free -h
```

## 10. Troubleshooting

### Application Not Starting
```bash
# Check PM2 logs (though minimal)
pm2 logs analytics-generator --lines 50

# Check winston logs
tail -50 ~/scripts/logs/error-$(date +%Y-%m-%d).log

# Verify environment variables
cat ~/scripts/.env

# Test direct run (bypass PM2)
cd ~/scripts
node generate-analytics-data.js
```

### High Memory Usage
```bash
# Check current memory usage
pm2 status

# Restart if needed
npm run pm2:restart

# The ecosystem.config.cjs has max_memory_restart: '1G'
# PM2 will auto-restart if memory exceeds 1GB
```

### Playwright Errors
```bash
# Reinstall Playwright browsers
cd ~/scripts
npx playwright install chromium

# Reinstall system dependencies
sudo npx playwright install-deps chromium
```

### Script Crashes Repeatedly
```bash
# Check error logs
tail -100 ~/scripts/logs/error-$(date +%Y-%m-%d).log

# Check PM2 restart count
pm2 status  # Look at '↺' column

# View detailed PM2 info
pm2 info analytics-generator
```

### PM2 Not Starting on Reboot
```bash
# Verify PM2 startup is configured
pm2 startup

# Re-save process list
pm2 save

# Test by rebooting
sudo reboot

# After reboot, check status
pm2 status
```

## 11. Updating the Application

```bash
# Stop PM2
npm run pm2:stop

# Update code (git pull or scp new files)
git pull origin main

# Install any new dependencies
npm install

# Restart PM2
npm run pm2:start
```

## 12. Uninstalling / Cleanup

```bash
# Stop and delete PM2 process
npm run pm2:delete

# Remove from PM2 startup
pm2 unstartup systemd

# Remove files (optional)
cd ~
rm -rf scripts
```

## Security Notes

1. **Environment Variables**: Never commit `.env` to git. Keep credentials secure.
2. **EC2 Security Groups**: Only allow necessary outbound traffic (HTTPS to your website).
3. **SSH Access**: Use key-based authentication, disable password auth.
4. **Regular Updates**: Keep Node.js and system packages updated.

## Cost Optimization

- **Instance Scheduling**: Consider stopping EC2 during non-business hours if 24/7 isn't needed
- **CloudWatch Alarms**: Set up alerts for high CPU/memory usage
- **Log Monitoring**: Ensure logs don't fill disk (winston handles rotation automatically)

## Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Playwright Documentation](https://playwright.dev/)
- [AWS EC2 Best Practices](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html)
