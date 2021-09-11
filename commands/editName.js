const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const enableEditGruop = require('../middlewares/enableEditGruop');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('editname', chatIsGroup, botIsAdmin, memberIsAdmin, enableEditGruop, ctx => {
  const title = ctx.message.text.slice('/editname'.length + 1, ctx.message.text.length);
  const msg = `Guruh nomi ${title}'ga o'zgartirildi`;
  ctx.telegram.setChatTitle(ctx.chat.id, title);
  ctx.deleteMessage(ctx.message.message_id);
  ctx.deleteMessage(ctx.message.message_id + 1);
  ctx.reply(msg);
})