function userIsMember(ctx, next) {
  if (!ctx.message.reply_to_message) return next();
  ctx.telegram.getChatMember(ctx.chat.id, ctx.message.reply_to_message.from.id)
    .then(d => {
      if (d.status === 'left' || d.status === 'kicked') return ctx.reply('Foydalanuvchi guruhda yo\'q', { reply_to_message_id: ctx.message.message_id });
      return next();
    })
}

module.exports = userIsMember;