const bot = require('../core/bot');
const botIsAdmin = require('../middlewares/botIsAdmin');
const userIsMember = require('../middlewares/userIsMember');
const adminIsSuper = require('../middlewares/adminIsSuper');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('rmadmin', chatIsGroup, botIsAdmin, userIsMember, adminIsSuper, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });
  const user_id = ctx.message.reply_to_message.from.id;
  const firstname = ctx.message.reply_to_message.from.first_name;
  const lastname = ctx.message.reply_to_message.from.last_name || '';
  const msg = `Guruh admini <b><a href="tg://user?id=${user_id}">${firstname + ' ' + lastname}</a></b> adminlik lavozimidan olindi!`;
  ctx.deleteMessage(ctx.message.message_id)
  ctx.replyWithHTML(msg);
  ctx.restrictChatMember(user_id, { permissions: { can_send_messages: true, can_send_media_messages: true } });
})