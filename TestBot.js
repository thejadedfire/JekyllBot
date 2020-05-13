const prefix = "jb!"
const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
  if (message.content === 'good boy'){
    message.react('591290735194669093');
  }

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	}
	if (command === 'beep') {
		message.channel.send('Boop.');
	}
	if (command === 'help'){
		message.channel.send('Available commands: ping, beep"');
	}
	if (command === 'gucci'){
		console.log(message.author, " tried to run command gucci");
    		try {
			const attachment = new Discord.MessageAttachment('./gucciKyll.png');
    			message.channel.send(attachment);
		} catch (err){
			console.log(err)
		}
	}
});




// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
