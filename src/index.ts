import {ArachnidBot} from './arachnid-bot';
import {ArachnidBotMk2} from './arachnid-bot-mk2';

const args = process.argv;

if(args.length === 6){

    const bot = args[5] === "mk2" ? new ArachnidBotMk2() : new ArachnidBot();

    const x = parseInt(args[2]);
    const y = parseInt(args[3]);
    const instructions = args[4];

    const result = bot.resolve(x, y, instructions);
    
    console.log("Bot position should be");
    console.log(JSON.stringify(result));
} else {
    console.error("Invalid params passed in. Try npm start 0 0 FFF [mk1 | mk2]");
    process.exit(1);
}

