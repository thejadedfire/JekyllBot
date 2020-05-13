const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 
client.on('ready', () => {
  console.log('I am ready!');	  console.log(`Logged in as ${client.user.tag}!`);
  const channel = member.guild.channels.find(ch => ch.name === 'servant-quarters');
  const date = Date.now();
  channel.send("I came online at " + date.toDateString() + ", " + date.toTimeString());
});

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
