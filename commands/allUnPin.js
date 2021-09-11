const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('allunpin', chatIsGroup, botIsAdmin, memberIsAdmin, ctx => {
  ctx.deleteMessage(ctx.message.message_id)
  ctx.unpinAllChatMessages()
})