function replyIsAdmin(ctx, next) {
  if (!ctx.message.reply_to_message) return next();

  ctx.getChatMember(ctx.message.reply_to_message.from.id)
    .then(d => {
      if (d.status === 'creator' || d.status === 'administrator') return ctx.reply('Adminga mumkin emas!', { reply_to_message_id: ctx.message.message_id });
      return next();
    })
}

module.exports = replyIsAdmin;