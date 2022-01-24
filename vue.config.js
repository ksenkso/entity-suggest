module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Entity Suggestions',
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/entity-suggest/'
    : '/',
};
