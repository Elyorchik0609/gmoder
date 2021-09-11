function chatIsGroup(ctx, next) {
  if (ctx.chat.type !== 'supergroup') return ctx.reply('Buyruq guruhda ishlaydi!');
  return next();
}

module.exports = chatIsGroup;