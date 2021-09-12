const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');
const userIsMember = require('../middlewares/userIsMember');

bot.hears('!gst', chatIsGroup, botIsAdmin, memberIsAdmin, userIsMember, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });

  const msg = `Ghost haqida to'liq tushuncha👇\n\nhttps://youtu.be/3QgNHUQQ1gs\n\nEslatib <a href="https://t.me/uzb_telegraph/534002">o'tamiz!</a>`;
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg, { reply_to_message_id: ctx.message.reply_to_message.message_id, disable_web_page_preview: true })
})