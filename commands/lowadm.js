const bot = require('../core/bot');
const botIsAdmin = require('../middlewares/botIsAdmin');
const userIsMember = require('../middlewares/userIsMember');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const adminIsSuper = require('../middlewares/adminIsSuper');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.hears('!lowadm', chatIsGroup, botIsAdmin, userIsMember, memberIsAdmin, memberIsAdmin, adminIsSuper, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });
  const user_id = ctx.message.reply_to_message.from.id;
  const firstname = ctx.message.reply_to_message.from.first_name;
  const lastname = ctx.message.reply_to_message.from.last_name || '';
  const msg = `Guruhga yangi admin tayinlandi!\n<b><a href="tg://user?id=${user_id}">${firstname + ' ' + lastname}</a></b> "sinov muddati" lavozimida\nOmad!`;
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg);
  ctx.promoteChatMember(user_id, { can_invite_users: true });
  setTimeout(() => {
    ctx.setChatAdministratorCustomTitle(user_id, 'testing');
  }, 3000)
})