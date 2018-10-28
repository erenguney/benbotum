const Discord = require('discord.js');
const client = new Discord.Client();
const dateFormat = require('dateformat');
const moment = require("moment");
const prefix = "!!";
require("moment-duration-format");
const size    = 12;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;

function changeColor() {
  for (let index = 0; index < 1; ++index) {	
  var red   = sin_to_hex(Math.random() * Math.floor(32), 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(Math.random() * Math.floor(32), 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(Math.random() * Math.floor(32), 2 * Math.PI * 2/3); // 240 deg
	  client.guilds.get('499980231440859136').roles.get('504949830171492354').setColor('#'+ red + green + blue)
    client.guilds.get('425267962275037184').roles.get('495224079192948736').setColor('#'+ red + green + blue)
		.catch(console.error);
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd");
  client.user.setActivity("🔮");
  setInterval(changeColor, 10000);
});

client.on("message", async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type !== "text") return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const event = msg.content.toLower;

    // OTO CEVAPLAR
        if (msg.content.toLowerCase() == "sa") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "selamun aleyküm") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "sea") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "saa") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "ssa") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "se ve a") return msg.channel.send("Aleyküm Selam");

if (msg.content.toLowerCase() == "s ve a") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "günaydın") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "günaydınn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");


if (msg.content.toLowerCase() == "gnydn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");
if (msg.content.toLowerCase() == "günaydınnn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "günaydınnnn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "günaydınnnnn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "Günydın") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "Gnaydın") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "cry") return msg.channel.send("");

if (msg.content.toLowerCase() == "sa") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "selamun aleyküm") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "sea") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "saa") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "ssa") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "se ve a") return msg.channel.send("Aleyküm Selam");

if (msg.content.toLowerCase() == "s ve a") return msg.channel.send("Aleyküm Selam");


if (msg.content.toLowerCase() == "günaydın") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "günaydınn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");


if (msg.content.toLowerCase() == "gnydn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");


if (msg.content.toLowerCase() == "günaydınnnn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "günaydınnnnn") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");
if (msg.content.toLowerCase() == "Günydın") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "Gnaydın") return msg.channel.send("Günaydın ! Günün nasıl gidiyor ?");

if (msg.content.toLowerCase() == "cry") return msg.channel.send("Ayb 😡");

if (msg.content.toLowerCase() == "edwiges") return msg.channel.send("Efendim ");

if (msg.content.toLowerCase() == "naber") return msg.channel.send("İyiyim, sen nasılsın ?");

if (msg.content.toLowerCase() == "ilkerbey") return msg.channel.send("World Pyke #1 olan mı ?");

if (msg.content.toLowerCase() == "boş yapma") return msg.channel.send("Boş Yobmo");

if (msg.content.toLowerCase() == "deniz benim") return msg.channel.send("😡😡😡😡😡");

if (msg.content.toLowerCase() == "ağla") return msg.channel.send("Ayb 😡");


if (msg.content.toLowerCase() == "ses teyit gelebilirmisin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ses teyite gelebilirmisin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ses teyite gelebilir misin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ses teyit gelebilir misin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ses teyit gelir misin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ses teyit gelirmisin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ses teyit alabilir misin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");
if (msg.content.toLowerCase() == "ağlaa") return msg.channel.send("Ayb 😡");

if (msg.content.toLowerCase() == "aqla") return msg.channel.send("Ayb 😡");

if (msg.content.toLowerCase() == "aqlaa") return msg.channel.send("Ayb 😡");

if (msg.content.toLowerCase() == "nasılsın") return msg.channel.send("iyi, sen nasılsın 😘");

if (msg.content.toLowerCase() == "ses teyit") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");
if (msg.content.toLowerCase() == "ses teyit alabilirmisin") return msg.channel.send("Hey ! Ses teyiti ben alıcam uzaklaş bakalım sen ;) ");

if (msg.content.toLowerCase() == "ayb") return msg.channel.send("Ayb Burda Olmaz ;) ");

if (msg.content.toLowerCase() == "aqlaa") return msg.channel.send("Ayb 😡");
    // OTO CEVAPLAR BİTİŞ

    // komutlar
	if (!msg.content.startsWith(prefix)) return;
        if (command == "ping"){
            msg.channel.send("Ölçüyorum abi bi sn").then(pong => {
                pong.edit({embed: {
                    color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                    description: (pong.createdTimestamp - msg.createdTimestamp+" ms API: "+Math.round(client.ping)+" ms")
                }});
            })
        }
        if (command == "sustur"){
            if (!msg.member.roles.get("499489311239045120") && !msg.member.roles.get("481891547843919893") && !msg.member.roles.get("484033618625429507") && !msg.member.roles.get("481971665199169546") && !msg.member.hasPermission("MANAGE_CHANNELS")) {
				msg.reply("Bu komutu kullanmak için yetkin yok.");
            	return;
            }
                        let susturulacak = msg.guild.member(msg.mentions.users.first());
                        if(!susturulacak) return msg.channel.send({embed: {
                color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                description: ("Susturacağın kişiyi etiketlemen gerek")
              }})
                        if(susturulacak.highestRole.position >= msg.member.highestRole.position) return msg.channel.send({embed: {
                color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                description: ("rolü senden yüksek olanları susturamazsın")
              }})
                        let role = msg.guild.roles.get("495239126212149258");
              
                      if(susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
                color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                description: ("zaten susturulmuş")
              }});
                      await susturulacak.addRole(role);
                      msg.channel.send({embed: {
                color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                description: (susturulacak+" "+msg.author+" tarafından susturuldu!")
              }})
                 embed = new Discord.RichEmbed()
                            .setColor(rengarenk)
                            .setTimestamp()
                            .addField('İşlem:', 'susturma')
                            .addField('Üye:', `${msg.mentions.users.first().username}#${msg.mentions.users.first().discriminator} (${msg.mentions.users.first().id})`)
                            .addField('Moderatör:', `${msg.author.username}#${msg.author.discriminator}`)
                            client.channels.get("425323300676304896").send(embed)
        } 
        if (command == "witch"){
            if (!msg.member.roles.get("499489311239045120") && !msg.member.roles.get("481891547843919893") && !msg.member.roles.get("484033618625429507") && !msg.member.roles.get("481971665199169546")) {
				msg.reply("Bu komutu kullanabilmek için yetkin yok.");
            	return;
            }
            let lenmq = msg.guild.member(msg.mentions.users.first());
            if (!lenmq) return msg.reply("Şş, kişiyi etiketle bakayım.");
            await lenmq.addRole(msg.guild.roles.get("436255650914369537"));
		msg.channel.send(`**${lenmq} kişisine başarıyla <@&436255650914369537> rolü verildi!**`);
        }
        if (command == "alohomora"){
            if (!msg.member.roles.get("499489311239045120") && !msg.member.roles.get("481891547843919893") && !msg.member.roles.get("484033618625429507") && !msg.member.roles.get("481971665199169546")) {
				msg.reply("Bu komutu kullanabilmek için yetkin yok.");
            	return;
            }
            let lenmq = msg.guild.member(msg.mentions.users.first());
            if (!lenmq) return msg.reply("Şş, kişiyi etiketle bakayım.");
            await lenmq.addRole(msg.guild.roles.get("474682484660109324"));
		msg.channel.send(`**${lenmq} kişisine başarıyla <@&474682484660109324> rolü verildi!**`);
        }
        if (command == "salvio"){
            if (!msg.member.roles.get("499489311239045120") && !msg.member.roles.get("481891547843919893") && !msg.member.roles.get("484033618625429507") && !msg.member.roles.get("481971665199169546")) {
				msg.reply("Bu komutu kullanabilmek için yetkin yok.");
            	return;
            }
            let lenmq = msg.guild.member(msg.mentions.users.first());
            if (!lenmq) return msg.reply("Şş, kişiyi etiketle bakayım.");
            await lenmq.addRole(msg.guild.roles.get("495669710629765142"));
		msg.channel.send(`**${lenmq} kişisine başarıyla <@&495669710629765142> rolü verildi!**`);
        }
        if (command == "fondresila"){
            if (!msg.member.roles.get("499489311239045120") && !msg.member.roles.get("481891547843919893") && !msg.member.roles.get("484033618625429507") && !msg.member.roles.get("481971665199169546")) {
				msg.reply("Bu komutu kullanabilmek için yetkin yok.");
            	return;
            }
            let lenmq = msg.guild.member(msg.mentions.users.first());
            if (!lenmq) return msg.reply("Şş, kişiyi etiketle bakayım.");
            await lenmq.addRole(msg.guild.roles.get("501635194931904512"));
		msg.channel.send(`**${lenmq} kişisine başarıyla <@&501635194931904512> rolü verildi!**`);
        }
        if (command == "ban"){
            if (!msg.member.roles.get("499489311239045120") && !msg.member.roles.get("481891547843919893") && !msg.member.roles.get("484033618625429507") && !msg.member.roles.get("481971665199169546") && !msg.member.hasPermission("BAN_MEMBERS")) {
				msg.reply("Bu komutu kullanmak için yetkin yok.");
            	return;
            }

let guild = msg.guild

  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
if (msg.mentions.users.size < 1) return msg.reply('Etiketlemen gerek, olmaz ki böyle. örnek veriyim: @lamer').catch(console.error);
  if (reason.length < 1) return msg.reply("Bir insan sebepsiz banlanır mı ya?");
     if (!msg.guild.member(user).bannable) return msg.reply("Yasaklamak istediğin kişinin benden yüksek bir yetkisi var. Ya daaaa benim yasaklama yetkim yok.");
  if(msg.guild.member(user).highestRole.position >= msg.member.highestRole.position){
    return msg.channel.send({embed: {
        color: Math.floor(Math.random() * (0xFFFFFF + 1)),
        description: ("rolü senden yüksek olanları yasaklayamazsın")
      }})   
  }       
  user.send("***"+guild.name+"*** Adlı sunucuda ***"+reason+"*** yüzünden yasaklandın.");
            msg.guild.member(user).roles.forEach(lel => {
                msg.guild.member(user).removeRole(lel);
            });
            await msg.guild.member(user).addRole(msg.guild.roles.get("495125242826457088"))
            msg.channel.send(user+" Sunucudan yasaklandı.");
     embed = new Discord.RichEmbed()
              .setColor(rengarenk)
              .setTimestamp()
              .addField('İşlem:', 'yasaklama')
              .addField('Üye:', `${user.username}#${user.discriminator} (${user.id})`)
              .addField('Moderatör:', `${msg.author.username}#${msg.author.discriminator}`)
              .addField('Sebep', reason);
              msg.guild.channels.get("425323300676304896").send(embed);
        }
    // komutlar
    

});

client.on('guildMemberAdd', async uye => {
	if (uye.guild.id !== "425267962275037184") return;
	if (uye.user.id == "504763018488446992") return;
    await uye.setNickname(`нωs • ${uye.user.username}`);
	uye.guild.channels.get("486785363667451915").send(`➥ ${uye} Aramıza Hoş Geldin, Umarım İyi Vakit Geçirirsin :hugging::tada:\n\n➥ :pencil: Sunucuya Tam Erişim Sağlamak İçin !kayit Yazman Gerekiyor.`);
    await uye.addRole(uye.guild.roles.get("486533750293790740"));
});


client.on('guildMemberRemove', async uye => {
	if (uye.guild.id !== "425267962275037184") return;
	if (uye.user.id == "504763018488446992") return;
    client.channels.get("425323300676304896").send(`${uye.user.username} sunucudan ayrıldı.`);
});

client.on('messageUpdate', function(eskimsg, yenimsg) {
    let guild = eskimsg.guild
    if (eskimsg.channel.type=="dm") return;
      if (eskimsg.author.bot) return;
      if (eskimsg.content.toLowerCase() == yenimsg.content.toLowerCase()) return;
      client.channels.get("489080232129593354").send({embed: {
        description: eskimsg.author+" tarafından oluşturulan mesaj "+eskimsg.channel+" kanalında düzenlendi.\n\n**Eski Mesaj:**\n"+eskimsg.content+"\n**Yeni mesaj:**\n"+yenimsg.content+"\n",
        color: Math.floor(Math.random() * (0xFFFFFF + 1)),
        author: {
            name: eskimsg.author.tag,
            icon_url: eskimsg.author.avatarURL
        },
        thumbnail: {
            url: eskimsg.author.avatarURL
          },
        timestamp: new Date()
   }
})
});

client.on('messageDelete', msg => {
    let guild = msg.guild
    if (msg.channel.type=="dm") return;
      if (msg.author.bot) return;
      if (msg.attachments.first()){
        client.channels.get("489080232129593354").send({embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            image: {
                url: msg.attachments.first().proxyURL
            },
            author: {
                name: msg.author.tag,
                icon_url: msg.author.avatarURL
            },
            description: msg.author+" tarafından oluşturulan mesaj "+msg.channel+" kanalında silindi.\n\n"+msg.content,
            timestamp: new Date()
       }
    })
    }else{
        client.channels.get("489080232129593354").send({embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            author: {
                name: msg.author.tag,
                icon_url: msg.author.avatarURL
            },
            description: msg.author+" tarafından oluşturulan mesaj "+msg.channel+" kanalında silindi.\n\n"+msg.content,
            timestamp: new Date()
       }
    })
    }

});
