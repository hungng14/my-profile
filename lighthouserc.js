module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000'], // Your app URL
        startServerCommand: 'npm run build && npm run preview', // Command to start your server
      },
      upload: {
        target: 'temporary-public-storage', // You can also configure other upload targets
      },
    },
  };
  