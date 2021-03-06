import * as AWS from "aws-sdk";
require('dotenv').config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2'
});

import { BotServer, BotUtils, Webhook } from './@aiteq/messenger-bot';
import { format } from "date-fns";
import { surveyHandler } from "./handler/surveyHandler";



let bot = new BotServer({
  name: "MyBot",
  port: process.env.PORT || 3000,
  verifyToken: process.env.VERIFY_TOKEN,
  accessToken: process.env.ACCESS_TOKEN,
  appSecret: process.env.APP_SECRET
});


const botUtils = new BotUtils(process.env.ACCESS_TOKEN);

botUtils.sendText(process.env.MY_RECIPIENT_ID, `Refresh [${format(new Date(), "HH:mm:SS")}]`);

bot.on(Webhook.Event.PERSISTENT_MENU, "get-started", surveyHandler);
bot.on(Webhook.Event.GET_STARTED_BUTTON, "get-started", surveyHandler);
bot.on(Webhook.Event.TEXT_MESSAGE, surveyHandler);
bot.on(Webhook.Event.TEXT_QUICK_REPLY, "from_ad", surveyHandler);
bot.on(Webhook.Event.POSTBACK, "from_ad", surveyHandler);

// @ts-ignore
const app = bot.app;

app.get('/', function(req, res) {
  res.send('hello world');
});

bot.start();

