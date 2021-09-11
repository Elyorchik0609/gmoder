const bot = require('../core/bot');
const botIsAdmin = require('../middlewares/botIsAdmin');

bot.on('left_chat_member', botIsAdmin, ctx => {
  ctx.deleteMessage(ctx.message.message_id)
})