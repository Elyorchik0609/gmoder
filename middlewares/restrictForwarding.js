function restrictForwarding(ctx, next) {
  if (ctx.message && ctx.message.forward_from) {
    ctx.getChatMember(ctx.message.from.id)
      .then(d => {
        if (d.status === 'creator' || d.status === 'administrator') return next();
        ctx.deleteMessage(ctx.message.message_id);
        ctx.replyWithHTML(`Hurmatli foydalanuvchi <b><a href="tg://user?id=${ctx.message.from.id}">${ctx.message.from.first_name + ' ' + (ctx.message.from.last_name || '')}</a></b> reklama tarqatmang!`);
      });
  }
  next();
}

module.exports = restrictForwarding;