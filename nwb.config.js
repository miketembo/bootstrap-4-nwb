module.exports = {
  type: 'react-app',
  babel: {
    plugins: ['react-html-attrs']
  },
  webpack: {
    extra: {
      output: {
        publicPath: ''
      }
    }
  }
}
