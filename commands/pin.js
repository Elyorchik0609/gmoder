const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');
const enablePinMsg = require('../middlewares/enablePinMsg');

bot.hears('!pin', chatIsGroup, botIsAdmin, memberIsAdmin, enablePinMsg, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });
  const message = ctx.message.reply_to_message.message_id;
  ctx.pinChatMessage(message)
  ctx.deleteMessage(ctx.message.message_id)
})