function adminIsSuper(ctx, next) {
  // if (!ctx.message.reply_to_message) return next();

  ctx.getChatAdministrators()
    .then(d => {
      d.forEach(admin => {
        if (admin.user.id === ctx.message.from.id) {
          if (admin.status === 'creator' || admin.can_manage_chat && admin.can_change_info && admin.can_delete_messages && admin.can_invite_users && admin.can_restrict_members && admin.can_pin_messages && admin.can_promote_members && admin.can_manage_voice_chats) return next();
          return ctx.reply('Faqat Super admingagina mumkin!', { reply_to_message_id: ctx.message.message_id })
        };
      });
    });
}

module.exports = adminIsSuper;