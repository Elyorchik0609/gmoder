const bot = require('../core/bot');
const botIsAdmin = require('../middlewares/botIsAdmin');
const regex = new RegExp("OK_");

bot.action(regex, botIsAdmin, ctx => {
  const id = parseInt(ctx.update.callback_query.data.slice('OK_'.length, ctx.update.callback_query.data.length));
  if (ctx.update.callback_query.from.id !== id) return ctx.answerCbQuery('Bu tugma siz uchun emas :)', { show_alert: true });
  const userid = ctx.update.callback_query.from.id;
  const firstname = ctx.update.callback_query.from.first_name;
  const lastname = ctx.update.callback_query.from.last_name || '';

  const msg = `Yangi guruh a'zosi <b><a href="tg://user?id=${userid}">${firstname + ' ' + lastname}</a></b> guruh <a href="https://t.me/TGraph_Rules">qoida</a>lariga rozilik bildirdi`
  ctx.deleteMessage(ctx.update.callback_query.message.message_id);
  ctx.replyWithHTML(msg, { disable_web_page_preview: true });
  ctx.restrictChatMember(userid, { permissions: { can_send_messages: true, can_send_media_messages: true, can_invite_users: true } });
})