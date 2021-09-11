const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('unpin', chatIsGroup, botIsAdmin, memberIsAdmin, ctx => {
  if (!ctx.message.reply_to_message) return ctx.deleteMessage(ctx.message.message_id);
  const message = ctx.message.reply_to_message.message_id;
  ctx.unpinChatMessage(message)
  ctx.deleteMessage(ctx.message.message_id)
})