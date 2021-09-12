const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const restrictForwarding = require('../middlewares/restrictForwarding');
bot.use(restrictForwarding);
bot.launch();
module.exports = bot;
process.on('SIGINT', () => bot.stop('SIGINT'));
process.on('SIGTERM', () => bot.stop('SIGTERM'));