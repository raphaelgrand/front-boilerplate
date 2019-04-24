module.exports = ctx => ({
  map: ctx.env === 'production' ? false : { inline: true },
  plugins: {
    autoprefixer: {
      browsers: [
        'last 2 version',
        'ie >= 10',
        'iOS > 7',
      ],
    },
    cssnano: ctx.env === 'production' ? {} : false,
  },
});
