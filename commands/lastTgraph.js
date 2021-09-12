const bot = require('../core/bot');
const memberIsAdmin = require('../middlewares/memberIsAdmin');
const botIsAdmin = require('../middlewares/botIsAdmin');
const chatIsGroup = require('../middlewares/chatIsGroup');
const userIsMember = require('../middlewares/userIsMember');

bot.hears('!tgraph', chatIsGroup, botIsAdmin, memberIsAdmin, userIsMember, ctx => {
  if (!ctx.message.reply_to_message) return ctx.reply('Reply bilan', { reply_to_message_id: ctx.message.message_id });

  const msg = `Telegraph'ning so'ngi versiyasi👇\nhttps://t.me/TGraphUz/1421\nIlovalari ushbu post ostida, qurilmangizga mosini yuklab olishingiz mumkin!\nUshbu yangilanish haqida <a href="https://youtu.be/TfHz5R5E2g8">to'liqroq ma'lumot</a>`;
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg, { reply_to_message_id: ctx.message.reply_to_message.message_id, disable_web_page_preview: true })
})