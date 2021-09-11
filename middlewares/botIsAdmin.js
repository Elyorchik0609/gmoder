function botIsAdmin(ctx, next) {
  ctx.telegram.getChatMember(ctx.chat.id, process.env.BOT_TOKEN)
    .then(d => {
      if (d.status === 'administrator') {
        if (d.can_manage_chat && d.can_change_info && d.can_delete_messages && d.can_invite_users && d.can_restrict_members && d.can_pin_messages && d.can_promote_members && d.can_manage_voice_chats) return next();
        return ctx.reply('Bot guruhda to\'laqonli admin emas!', { reply_to_message_id: ctx.message.message_id });
      }
      return ctx.reply('Bot guruhda admin emas!', { reply_to_message_id: ctx.message.message_id });
    })
}

module.exports = botIsAdmin;