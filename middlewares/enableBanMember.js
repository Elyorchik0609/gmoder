function enableBanMember(ctx, next) {
  ctx.getChatAdministrators()
    .then(d => {
      d.forEach(admin => {
        if (admin.user.id === ctx.message.from.id) {
          if (admin.status === 'creator' || admin.can_restrict_members) return next();
          return ctx.reply('Sizni guruh a\'zolarini ban qilish ruxsatnomangiz yo\'q!', { reply_to_message_id: ctx.message.message_id })
        };
      });
    });
}

module.exports = enableBanMember;