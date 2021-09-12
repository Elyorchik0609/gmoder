const bot = require('../core/bot');
const botIsAdmin = require('../middlewares/botIsAdmin');

bot.on('new_chat_members', botIsAdmin, ctx => {
  const userid = ctx.update.message.new_chat_member.id;
  const firstname = ctx.update.message.new_chat_member.first_name;
  const lastname = ctx.update.message.new_chat_member.last_name || '';
  const msg = `Guruhda yangi a'zo!\n\nHurmatli <b><a href="tg://user?id=${userid}">${firstname + ' ' + lastname}</a></b> guruhimizga Xush kelibsiz!\nGuruhimiz <a href="https://t.me/TGraph_Rules">qoida</a>lari bilan albatta tanishib chiqing!\nTanishib chiqqaningizdan so'ng qoidalarga rozi ekanligingizni bildiring`;
  ctx.restrictChatMember(userid, { permissions: { can_send_messages: false } });
  ctx.deleteMessage(ctx.message.message_id);
  ctx.replyWithHTML(msg, {
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Roziman',
            callback_data: `OK_${userid}`
          }
        ]
      ]
    }
  });
})