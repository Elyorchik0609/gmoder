const bot = require('../core/bot');
const moment = require('moment');
const replyIsAdmin = require('../middlewares/replyIsAdmin');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('mute', chatIsGroup, botIsAdmin, memberIsAdmin, replyIsAdmin, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });
  const sabab = ctx.message.text.slice('/ban'.length + 1, ctx.message.text.length) || 'Qoida buzarlik!';
  const user_id = ctx.message.reply_to_message.from.id;
  const firstname = ctx.message.reply_to_message.from.first_name;
  const lastname = ctx.message.reply_to_message.from.last_name || '';
  const muddat = moment.unix(ctx.message.date).add(3, 'hour').unix();
  const msg = `Foydalanuvchi <b><a href="tg://user?id=${user_id}">${firstname + ' ' + lastname}</a></b> 3soatga o'qish rejimiga tushirildi!\nSabab: ${sabab}`;
  ctx.deleteMessage(ctx.message.message_id);
  ctx.restrictChatMember(user_id, { permissions: { can_send_messages: false }, until_date: muddat });
  ctx.replyWithHTML(msg);
})