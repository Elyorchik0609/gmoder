const bot = require('../core/bot');
const replyIsAdmin = require('../middlewares/replyIsAdmin');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const userIsMember = require('../middlewares/userIsMember');
const chatIsGroup = require('../middlewares/chatIsGroup');
const enableBanMember = require('../middlewares/enableBanMember');

bot.command('ban', chatIsGroup, botIsAdmin, userIsMember, memberIsAdmin, enableBanMember, replyIsAdmin, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });
  const sabab = ctx.message.text.slice('/ban'.length + 1, ctx.message.text.length) || 'Qoida buzarlik!';
  const user_id = ctx.message.reply_to_message.from.id;
  const firstname = ctx.message.reply_to_message.from.first_name;
  const lastname = ctx.message.reply_to_message.from.last_name || '';
  const msg = `Foydalanuvchi <b><a href="tg://user?id=${user_id}">${firstname + ' ' + lastname}</a></b> bloklandi!\nSababi: ${sabab}`;

  ctx.kickChatMember(user_id);
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg)
})