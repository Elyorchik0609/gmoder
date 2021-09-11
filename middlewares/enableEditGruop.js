function enableEditGruop(ctx, next) {
  ctx.getChatAdministrators()
    .then(d => {
      d.forEach(admin => {
        if (admin.user.id === ctx.message.from.id) {
          if (admin.status === 'creator' || admin.can_change_info) return next();
          return ctx.reply('Sizni guruh tahrirlash ruxsatnomangiz yo\'q!', { reply_to_message_id: ctx.message.message_id })
        };
      });
    });
}

module.exports = enableEditGruop;