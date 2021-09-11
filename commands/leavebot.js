const bot = require('../core/bot');
const botIsAdmin = require('../middlewares/botIsAdmin');
const adminIsSuper = require('../middlewares/adminIsSuper');
const chatIsGroup = require('../middlewares/chatIsGroup');

bot.command('leavebot', chatIsGroup, adminIsSuper, botIsAdmin, ctx => {
  ctx.deleteMessage(ctx.message.message_id)
  ctx.leaveChat();
})