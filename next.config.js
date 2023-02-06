const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    incluidePaths: [path.join(__dirname, 'styles')]
  }
}
module.exports = nextConfig
