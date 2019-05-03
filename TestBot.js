const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  else if (msg.content === 'Henry Jekyll'){
    msg.reply("At your service, " + msg.author);
  } else if (msg.content === "Gucci"){
      let chan = msg.channel;
      const attachment = new Attachment('https://i.imgur.com/Zbqj2lW.jpg');
      //var emoji = msg.author.guild.emojis.find(em => emoji.name === "shame");
      //chan.send(emoji);
      chan.send("Fashionable.", attachment);
  }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
