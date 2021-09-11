const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');
const userIsMember = require('../middlewares/userIsMember');

bot.command('warn', chatIsGroup, botIsAdmin, memberIsAdmin, userIsMember, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });

  const msg = `Iltimos <a href="https://t.me/TGraph_Rules">guruh qoidalari</a> bilan yana bir bor tanishib chiqing\nKegingi safar ogohlantirishsiz jazo olasiz!`
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg, { reply_to_message_id: ctx.message.reply_to_message.message_id, disable_web_page_preview: true })
})