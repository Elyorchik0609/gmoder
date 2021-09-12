function memberIsAdmin(ctx, next) {
  ctx.getChatMember(ctx.message.from.id)
    .then(d => {
      if (d.status === 'creator' || d.status === 'administrator') return next();
      return ctx.reply('Buyruq adminlar uchun!', { reply_to_message_id: ctx.message.message_id });
    });
}

module.exports = memberIsAdmin;