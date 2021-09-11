function enablePinMsg(ctx, next) {
  ctx.getChatAdministrators()
    .then(d => {
      d.forEach(admin => {
        if (admin.user.id === ctx.message.from.id) {
          if (admin.status === 'creator' || admin.can_pin_messages) return next();
          return ctx.reply('Sizni xabarlarni qadash ruxsatnomangiz yo\'q!', { reply_to_message_id: ctx.message.message_id })
        };
      });
    });
}

module.exports = enablePinMsg;