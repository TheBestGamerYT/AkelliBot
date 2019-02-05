// This two lines are constants the stuff that you need in order for bot to run should be all declared on the begging of the code

const Discord = require('discord.js'); //This one tells you that constant with the name Discord in order to work requires discord.js library

const client = new Discord.Client();   //This one here tells you that constant with the name client in order to work requires a new Discord client which basicly means that it creates a new client/bot/user

//// BOT PREFIX: EXAMPLE: !help , a!help, $help , b$help , b!help etc. ////
    var prefix = "a!";

//// GREET COMMAND SECTION ////

    // USER JOINS SERVER:
    client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Everyone, welcome ${member} to the server!`);
    });

    // USER LEAVES SERVER:
    client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user.username} has left the server!`);
    });

//// CONSOLE REPLY & GAME ACTIVITY STATUS OF THE BOT: ////

 client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('I am ready & online on DiscordApp!');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`a!help | ${client.guilds.size} Servers`, { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : `a!help | ${client.guilds.size} Servers`}`))
    .catch(console.error);
  });

//// SHORTCUT TEXTS IN THE JAVASCRIPT (CODE): ////

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');

     // EXAMPLE COMMAND INSTRUCTION & MEANINGS:
     // if (msg.content === 'example') { // the { here signs the start of the scope(of the if sentence)
     //    msg.reply('This is an example command!'); }
     //  the } here signs the end of the scope(if sentence)

  if(msg.author.bot) return; //This here means that if message was sent from the other bots EXEPT Akelli, our bot (Akelli) won't sent anything in the chat (thats why return there is e.g return, returns you to somewhere or something) this prevents bot-ception (when multiple bots were to use the same prefix).
  if(msg.content.indexOf(prefix) !== 0) return;

//// HELP & COMMANDS COMMAND FOR GUESTS (EMBED MESSAGE: https://embedbuilder.nadekobot.me/) ////

      // HELP COMMAND:
    if (msg.content.startsWith(prefix + 'help')) {
      msg.channel.send({embed:{
      "title": "",
      "description": "Hi! I'm AkelliBot! \nI am 24/7 online & being developed by:\nAkelli Company's Developers (TeamCo7Clan) \nFor a list of commands enter **a!commands** \n\nDo you wish to add me in your server? \nEnter **a!invite** \n\nNeed support? Join our server!\nhttps://discord.gg/j39xBQa",
      "color": 3447003,
      "footer": {
      "text": "© Copyright Akelli Company, @akellicompany"

      },
      "author": {
      "name": "Akelli Help",
      "url": "https://thebestgameryt.github.io/AkelliBot/",
      "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      }
      }
      });
      }

      // COMMANDS COMMAND:
    if (msg.content.startsWith(prefix + 'commands')) {
      msg.channel.send({embed:
      {
      "title": "Usage: a!<command>",
      "description": "**» Music:** \nCOMING SOON... now on Akelli FM Bot.\nJoin our Discord for more info with!\n\n**» Administration Moderation:**\navatar <@user> - Sends you the user's profile picture. \nmyavatar - Sends you your profile picture. \n\n**» Information:**\nhelp - Sends the introduction message. \ninvite - Link to invite the Bot!\nping - Sends the ping! \nsocialmedia - Team's social media accounts.\n\n**» Akelli Company:** \nsetgame <@message> - Changes the game activity status of the bot.",
      "author": {
      "name": "Akelli Commands",
      "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      },
      "color": 53380,
      "footer": {
      "text": "© Copyright Akelli Company, @akellicompany"
      }
      }
      });
      }

//// ADMINISTRATION COMMAND SECTION ////

    // MYAVATAR CMD
    if (msg.content.startsWith(prefix + 'myavatar')){
     msg.member.send(msg.author.avatarURL);
     msg.reply('I will send you your profile picture!');
     }

    // AVATAR @USER CMD
    if (msg.content.startsWith(prefix + 'avatar')){
     let member = msg.mentions.members.first();
     msg.member.send(member.user.displayAvatarURL);
     msg.reply('user\'s profile picture sent to you!');
     }

////  INFORMATION COMMAND SECTION ////

  // SOCIAL MEDIA CMD
  if (msg.content.startsWith(prefix + 'socialmedia')){
     msg.channel.send({embed:{
     "plainText": "Online",
     "title": "Akelli",
     "description": "Make sure to follow us for future updates!",
     "author": {
     "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
     },
     "color": 15105570,
     "footer": {
     "text": "© Copyright Akelli Company",
     "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
     },
     "thumbnail": "https://cdn.discordapp.com/attachments/344215127828070401/538810804024377374/20190117_091141.jpg",
     "fields": [
     {
     "name": "• Instagram",
     "value": "https://www.instagram.com/akellicompany",
     "inline": false
      },
      {
     "name": "• Twitter",
     "value": "https://www.twitter.com/akellicompany",
     "inline": false
     },
     {
     "name": "• Discord",
     "value": "https://www.discord.me/akellibot",
     "inline": false
     }
     ]
     }
     });
     }

     // PING CMD:
   if (msg.content.startsWith(prefix + 'ping')) {
     const m = await msg.channel.send("Pong! Checking status");
     m.edit(`Pong! Latency: **${m.createdTimestamp - msg.createdTimestamp}**ms. API Latency: **${Math.round(client.ping)}**ms`);
     }

    // BOT INVITATION CMD:
    if (msg.content.startsWith(prefix + 'invite')){
      msg.channel.send({embed:{
      "plainText": "AkelliBot Invite",
      "title": "Invite Bot",
      "url": "https://discordapp.com/oauth2/authorize?client_id=534003592542027786&scope=bot&permissions=8",
      "author": {
      "name": "Do you wish to invite AkelliBot? Press the link below!"
      },
      "color": 3447003,
      "footer": {
      "text": "© Copyright Akelli Company",
      "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
       }
       }
       });
       }

 //// [AKELLIBOT MANAGEMENT & STAFF: AKELLI COMPANY SECTION COMMANDS] ////

    // SETGAME <MESSAGE> CMD
  if (msg.content.startsWith(prefix + 'setgame')) {
    if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
    return msg.reply("you don't have sufficient access to execute this command! \n Requirement: Management Team or Staff Moderator");

    let result = args.slice(1).join(' ');

    client.user.setActivity(result);
    msg.reply("command accepted! \nNew game activity message set!");
    }
    });
    
client.login(process.env.BOT_TOKEN);
