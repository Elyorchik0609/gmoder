function memberIsAddedAdmin(ctx, next) {
  if (!ctx.message.reply_to_message) return next();
  ctx.telegram.getChatMember(ctx.chat.id, ctx.message.reply_to_message.from.id)
    .then(d => {
      if (d.status === 'creator' || d.status === 'administrator') return ctx.reply('Foydalanuvchi guruh admini bo\'lib bo\'lgan!', { reply_to_message_id: ctx.message.message_id });
      return next();
    })
}

module.exports = memberIsAddedAdmin;