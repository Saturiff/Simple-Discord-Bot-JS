const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var token = '' /* 輸入你拿到的token */
client.login(token);

client.on('message', msg => 
{
    if (msg.content == '') /* 接收使用者指令 */
	{
		console.log(msg.createdAt + ' ' + msg.content); /* 控制台儲存回傳的訊息 */
		msg.reply(''); /* Bot回復使用者 */
	}
}
);
