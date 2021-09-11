const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');
const userIsMember = require('../middlewares/userIsMember');

bot.command('tg', chatIsGroup, botIsAdmin, memberIsAdmin, userIsMember, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });

  const msg = `Telegram'ning so'ngi versiyasi👇\nhttps://t.me/TGraphUz/1446\nIlova ushbu post ostida!\nUshbu yangilanish haqida <a href="https://youtu.be/Q09gJIuX-N4">to'liqroq ma'lumot</a>`;
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg, { reply_to_message_id: ctx.message.reply_to_message.message_id, disable_web_page_preview: true })
})