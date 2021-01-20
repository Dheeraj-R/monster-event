const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { number, random } = require('mathjs');
const client = new Discord.Client();


let survivorsname = [];
let dead = [];






client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Epic RPG",{
        type: "PLAYING",
    })
});




client.on('message', message => {
    
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    
    
    

    if (command === 'event-info') {
        if (message.author.id === '640071778911256577') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Monster Invasion Event')
                .setDescription('*Herensuge* is being invaded by Monsters!\nWe need you help to defend Herensuge!')

                .addFields(
                    {name: '__About Event__', value: 'Monsters are invading *Herensuge* for 2 days! Fight these monsters and **defend** *Herensuge*!\nIf you survive after this *Treacherous Invasion*, you will be rewarded in erpg coins!' },
                    {name: '__What you need to do__', value: 'Monsters will be randomly spawned in the area channels! who ever win against those monsters will advance to the **BOSS BATTLE**(SEA KING). If you survive the battle against the SEA KING, then you will be rewarded with epic rpg coins!' },
                    {name: '__Rewards__', value: 'Rewards can range from 5m to 10m epic rpg coins!' },
                )
                .setImage('https://cdna.artstation.com/p/assets/images/images/006/649/356/large/troll-juncha-monster-invasion.jpg?1500216359')
            message.channel.send(exampleEmbed);
        }
    }

    if (command ==='summon1') {
        if(message.author.id === '640071778911256577'){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Cthulhu Island (stage 1)')
                .setDescription('Three Cthulhu have appeared! Type `=join` to join the battle!\nType the option immediately once you join the battle!')
                .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c54b01e8-ee61-4b9f-bd65-118d8a4cfdd8/d5xl874-8bf2b0dc-c6ee-44fb-b944-326b1afacdb3.jpg/v1/fill/w_1024,h_820,q_75,strp/eye_monster_by_htivey_d5xl874-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MjAiLCJwYXRoIjoiXC9mXC9jNTRiMDFlOC1lZTYxLTRiOWYtYmQ2NS0xMThkOGE0Y2ZkZDhcL2Q1eGw4NzQtOGJmMmIwZGMtYzZlZS00NGZiLWI5NDQtMzI2YjFhZmFjZGIzLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fbBsXsWW_DFLh_5S-nNYYV-uW8BKlhE-NGpK2a7lPQE')
            message.channel.send(exampleEmbed);
        }
        
         
    }

    if (command === 'summon2') {
        if(message.author.id === '640071778911256577'){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Temple of Doom (stage 2)')
                .setDescription('A Quetzacoatl has appeared!\nType `=join` to join the battle!\nType the option asap!')
                .setImage('https://cdnb.artstation.com/p/assets/images/images/012/834/861/large/art-gutierrez-quetzalcoatl-dragon-as.jpg?1536755616')
            message.channel.send(exampleEmbed);

        }
    }

    if (command === 'summon3') {
        if(message.author.id === '640071778911256577'){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Deadly ocean (stage 3)')
                .setDescription('The SEA KING was summoned!!! Type `=fight` to join the fight!!!\nYour partner suggests you to not attack. Maybe Run or Dodge.')
                .setImage('https://orion-uploads.openroadmedia.com/xl_172f8dd0e0ec-seamonsterfeatureopt.jpg')
            message.channel.send(exampleEmbed);
        }
    }
 
    

    if (command === 'join') {
        message.channel.send(`<@${message.author.id}> has joined the battle!`)
        const filter = response => {
            return response.author.id === message.author.id;
            }   
        message.channel.send('What will you do?\n‣attack\n‣dodge\n‣run\nType your action asap!').then(() => {
        message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time'],   
            })
            .then((collected) => {
                
                if (collected.first().content === 'attack') {
                    let x = random(1,10)
                    if (x>=4) {
                        
                        message.channel.send('💥💥💥\nYou defeated the monster!')
                        survivorsname.push(message.author.username)
                    }
                    else {
                        message.channel.send('💀 You died.')
                    }
                } 
                else if (collected.first().content === 'dodge') {
                    let y = random(1,8)
                    if (y>=4) {
                        message.channel.send('You dodged the attack!\n💥💥💥\nWOW! you killed the monster before it could react!')
                        survivorsname.push(message.author.username)
                    } 
                    else {
                        message.channel.send('You failed to dodge the monsters attack. It killed you.')
                    }
                }
                else if (collected.first().content === 'run') {
                    let z = random(1,50)
                    if (z>=25) {
                        message.channel.send('You ran away! You got no reward.')
                        survivorsname.push(message.author.username)
                    }
                    else {
                        message.channel.send('The monster killed you while you tried to run away.')
                    }
                }
                
            })
            .catch(() => {
                message.channel.send('You could not make a move.\n💀💀💀 The monster ate you.');
            });

        
        });
    }

    if (command === 'survive') {
        if (message.author.id === '640071778911256577') {
            message.channel.send('These people survived the Invasion:')
            message.channel.send(survivorsname)
        }
    }

    if (command === 'dead') {
        if (message.author.id === '640071778911256577'){
            message.channel.send('These people died in the Battle with SEA KING:')
            message.channel.send(dead)
        }
    }

    
    
    if (command === 'fight') {
        message.channel.send(`<@${message.author.id}> has joined the battle!`)
        const filter = response => {
            return response.author.id === message.author.id;
            }   
        message.channel.send('The SEA KING is going to attack! What will you do?\n‣attack\n‣dodge\n‣run\nType your option asap!').then(() => {
        message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time'],   
            })
            .then((collected) => {
                
                if (collected.first().content === 'attack') {
                    let a = random(1,10)
                    if (a>4) {
                        
                        message.channel.send('💀 You attack made a scratch on the SEA KING.\nLooks like he used his special move `Stone Body`.\nHe killed you.')
                        dead.push(message.author.username)
                    }
                    else {
                        message.channel.send('💥💥💥\nYou defeated the SEA KING!!!\n💰You Looted all his Treasury(5m)!!!')
                        
                    }
                } 
                else if (collected.first().content === 'dodge') {
                    let y = random(1,4)
                    if (y<4) {
                        message.channel.send('You dodged the attack!\n💥💥💥\nWOW! you killed the SEA KING before he could react!\n💰You looted everything in his treasury(5m)!!!')
                        
                    } 
                    else {
                        message.channel.send('You failed to dodge the SEA KING. He killed you.')
                        dead.push(message.author.username)
                    }
                }
                else if (collected.first().content === 'run') {
                    let z = random(1,4)
                    if (z=4) {
                        message.channel.send('The SEA KING killed you while you tried to run away.')
                        dead.push(message.author.username)
                    }
                    else {
                        message.channel.send('You ran away!\n💰You stole a treasure chest from the SEA KING.(1m)')
                        
                    }
                }
                
            })
            .catch(() => {
                message.channel.send('You could not make a move.\n💀💀💀 The SEA KING ate you.');
            });

        
        });
    }
    
    

	
});

client.login(token);


