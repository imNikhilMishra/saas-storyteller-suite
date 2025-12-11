module.exports = {
  apps: [{
    name: 'analytics-generator',
    script: './generate-analytics-data.js',

    // Single instance (not cluster mode)
    instances: 1,
    exec_mode: 'fork',

    // Auto-restart configuration
    autorestart: true,
    watch: false,
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 5000,

    // Memory management (restart if exceeds 1GB)
    max_memory_restart: '1G',

    // Environment variables
    env: {
      NODE_ENV: 'production',
      LOG_LEVEL: 'info'
    },

    // Logging - disable PM2 logs, use winston only
    // This sends PM2 logs to /dev/null while winston handles all application logging
    out_file: '/dev/null',
    error_file: '/dev/null',
    combine_logs: true,
    merge_logs: true,

    // Graceful shutdown
    kill_timeout: 5000,
    wait_ready: false,
    listen_timeout: 3000,

    // Time configuration
    time: true,

    // Process management
    vizion: false,
    post_update: ['npm install'],
  }]
};
