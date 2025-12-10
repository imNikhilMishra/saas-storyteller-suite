# EC2 Setup Guide for Analytics Data Generator

This guide walks you through deploying the analytics data generator script on an AWS EC2 instance.

## Prerequisites

- AWS account with EC2 access
- Your site must be deployed and accessible
- GA4 and PostHog tracking codes installed on your site

## Step 1: Launch EC2 Instance

### Recommended Instance Type
- **t3.small** (2 vCPU, 2 GB RAM) - $0.0208/hour (~$15/month)
- **t3.medium** (2 vCPU, 4 GB RAM) - If you need more parallel sessions

### Instance Configuration
1. Go to EC2 Console
2. Click "Launch Instance"
3. **Name**: analytics-data-generator
4. **AMI**: Ubuntu Server 22.04 LTS (Free tier eligible)
5. **Instance type**: t3.small
6. **Key pair**: Create new or use existing
7. **Network settings**:
   - Allow SSH from your IP
   - No need to allow HTTP/HTTPS
8. **Storage**: 8 GB gp3 (default is fine)
9. Click "Launch Instance"

## Step 2: Connect to Your Instance

```bash
# Replace with your key file and instance IP
ssh -i "your-key.pem" ubuntu@your-instance-ip
```

## Step 3: Install Node.js

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

## Step 4: Install Required System Dependencies

Playwright needs some system libraries:

```bash
# Install Playwright system dependencies
sudo apt install -y \
  libnss3 \
  libnspr4 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libdbus-1-3 \
  libxkbcommon0 \
  libatspi2.0-0 \
  libxcomposite1 \
  libxdamage1 \
  libxfixes3 \
  libxrandr2 \
  libgbm1 \
  libpango-1.0-0 \
  libcairo2 \
  libasound2
```

## Step 5: Clone Your Repository

```bash
# If using Git
git clone https://github.com/your-username/your-repo.git
cd your-repo/scripts

# Or upload files directly using SCP
# From your local machine:
# scp -i "your-key.pem" -r scripts/ ubuntu@your-instance-ip:~/
```

## Step 6: Install Dependencies

```bash
cd scripts
npm install

# Install Playwright browsers
npx playwright install chromium
```

## Step 7: Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit the .env file
nano .env
```

Update with your actual values:
```
SITE_URL=https://your-actual-site.com
GA4_MEASUREMENT_ID=G-YOUR-REAL-ID
POSTHOG_API_KEY=phc_your_real_key
POSTHOG_HOST=https://app.posthog.com
```

Save and exit (Ctrl+X, then Y, then Enter)

## Step 8: Test the Script

Run a quick test to make sure everything works:

```bash
node generate-analytics-data.js
```

You should see output like:
```
============================================================
Analytics Data Generator
============================================================
Site URL: https://your-site.com
Target sessions/day: 250
...
```

**Press Ctrl+C to stop the test run.**

## Step 9: Set Up as a System Service

Create a systemd service to run the script automatically:

```bash
# Create service file
sudo nano /etc/systemd/system/analytics-generator.service
```

Paste this content (replace `/home/ubuntu/your-repo/scripts` with your actual path):

```ini
[Unit]
Description=Analytics Data Generator
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/your-repo/scripts
ExecStart=/usr/bin/node generate-analytics-data.js
Restart=always
RestartSec=10
StandardOutput=append:/home/ubuntu/analytics-generator.log
StandardError=append:/home/ubuntu/analytics-generator-error.log

[Install]
WantedBy=multi-user.target
```

Save and exit (Ctrl+X, then Y, then Enter)

## Step 10: Start the Service

```bash
# Reload systemd to recognize new service
sudo systemctl daemon-reload

# Enable service to start on boot
sudo systemctl enable analytics-generator

# Start the service
sudo systemctl start analytics-generator

# Check status
sudo systemctl status analytics-generator
```

You should see "active (running)" in green.

## Step 11: Monitor the Script

### View Live Logs
```bash
# Follow the logs in real-time
tail -f ~/analytics-generator.log

# View error logs if needed
tail -f ~/analytics-generator-error.log
```

### Check Service Status
```bash
sudo systemctl status analytics-generator
```

### Restart Service
```bash
sudo systemctl restart analytics-generator
```

### Stop Service
```bash
sudo systemctl stop analytics-generator
```

## Troubleshooting

### Script Not Starting
```bash
# Check logs for errors
tail -n 50 ~/analytics-generator-error.log

# Verify node is installed
node --version

# Verify npm packages are installed
cd ~/your-repo/scripts && ls node_modules/
```

### No Data in Analytics
1. Verify your site URL is correct in .env
2. Check that GA4 and PostHog codes are on your live site
3. Test your site manually to ensure tracking works
4. Check the logs for any navigation errors

### Out of Memory Errors
```bash
# Reduce parallel users in .env
nano .env
# Set MAX_PARALLEL_USERS=8 (or lower)

# Restart service
sudo systemctl restart analytics-generator
```

### High CPU Usage
- Normal during script execution (browsers use CPU)
- Should be idle between runs
- If constantly high, reduce parallel users

## Cost Estimation

### EC2 Costs (t3.small, 24/7 for 7 days)
- Instance: $0.0208/hour × 168 hours = ~$3.50
- Storage: 8 GB × $0.10/GB-month = ~$0.10
- **Total**: ~$3.60 for one week

### Savings Tips
- Stop instance when not needed: `sudo shutdown -h now`
- Use EC2 Instance Scheduler to run only during certain hours
- Consider using Spot Instances for ~70% discount

## Security Best Practices

1. **Restrict SSH Access**
   ```bash
   # In EC2 Console > Security Groups
   # Allow SSH only from your IP address
   ```

2. **Keep System Updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Use IAM Roles** (if accessing other AWS services)
   - Don't store AWS credentials on the instance
   - Attach IAM role to EC2 instance instead

4. **Monitor Logs**
   - Check logs regularly for errors
   - Set up CloudWatch alarms for instance health

## Stopping and Cleanup

### Temporary Stop
```bash
# Stop the service
sudo systemctl stop analytics-generator

# Or stop the instance (from AWS Console or CLI)
aws ec2 stop-instances --instance-ids i-your-instance-id
```

### Permanent Cleanup
```bash
# Disable service
sudo systemctl disable analytics-generator
sudo systemctl stop analytics-generator

# Delete service file
sudo rm /etc/systemd/system/analytics-generator.service
sudo systemctl daemon-reload
```

Then terminate the EC2 instance from AWS Console.

## Next Steps

- Monitor your GA4 dashboard for incoming data (24-48 hour delay)
- Check PostHog for real-time events
- Adjust CONFIG values in .env if needed
- Set up CloudWatch monitoring for the EC2 instance

## Support

If you encounter issues:
1. Check the logs: `tail -f ~/analytics-generator.log`
2. Verify .env configuration
3. Test site accessibility from EC2: `curl -I https://your-site.com`
4. Ensure Playwright browsers are installed: `npx playwright install chromium`
