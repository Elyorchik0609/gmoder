const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const enableEditGruop = require('../middlewares/enableEditGruop');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('editbio', chatIsGroup, botIsAdmin, memberIsAdmin, enableEditGruop, ctx => {
  const title = ctx.message.text.slice('/editbio'.length + 1, ctx.message.text.length);
  const msg = `Guruh bio'si ${title}'ga o'zgartirildi`;
  ctx.telegram.setChatDescription(ctx.chat.id, title);
  ctx.deleteMessage(ctx.message.message_id);
  ctx.deleteMessage(ctx.message.message_id + 1);
  ctx.reply(msg);
})