import { ArachnidBotMk3 } from "./arachnid-bot-mk3";


export interface Instruction {
    resolve(bot: ArachnidBotMk3): ArachnidBotMk3;
}
