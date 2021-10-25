import {ArachnidBot} from './arachnid-bot';




const args = process.argv;

if(args.length === 5){
    const bot = new ArachnidBot();

    const x = parseInt(args[2]);
    const y = parseInt(args[3]);
    const instructions = args[4];

    const result = bot.resolve(x, y, instructions);
    
    console.log("Bot position should be");
    console.log(JSON.stringify(result));
} else {
    console.error("Invalid params passed in. Try npm start 0 0 FFF");
    process.exit(1);
}

