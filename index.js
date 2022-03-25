const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "/";
bot.on("ready", function (){
  bot.user.setActivity("Project Server SA-MP");
  console.log(`${bot.user.tag} bot sudah aktif`);
});

bot.on("message", async message =>{
  if(!message.guild) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let args = message.content.slice(prefix.length).trim().split(" ");
  let command = args.shift().toLowerCase();

  //commands
  if(message.content === `${prefix}ping`) {
    message.channel.send(":ping_pong: Pong!");
  }

  //req role
  if(message.content == `${prefix}role`) {
      message.channel.send("Kamu berhasil request role discord!");
  }
});

bot.login(process.env.BOT_TOKEN);