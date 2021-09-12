const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const adminIsSuper = require('../middlewares/adminIsSuper');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.hears('!editname', chatIsGroup, botIsAdmin, memberIsAdmin, adminIsSuper, ctx => {
  const title = ctx.message.text.slice('/editname'.length + 1, ctx.message.text.length);
  const msg = `Guruh nomi ${title}'ga o'zgartirildi`;
  ctx.telegram.setChatTitle(ctx.chat.id, title);
  ctx.deleteMessage(ctx.message.message_id);
  ctx.deleteMessage(ctx.message.message_id + 1);
  ctx.reply(msg);
})