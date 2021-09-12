const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');
const enablePinMsg = require('../middlewares/enablePinMsg');

bot.hears('!allunpin', chatIsGroup, botIsAdmin, memberIsAdmin, enablePinMsg, ctx => {
  ctx.deleteMessage(ctx.message.message_id)
  ctx.unpinAllChatMessages()
})