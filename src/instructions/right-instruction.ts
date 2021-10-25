import { ArachnidBotMk3 } from "../arachnid-bot-mk3";
import { Instruction } from "./instruction";

export class RightInstruction implements Instruction {
    resolve(bot: ArachnidBotMk3): ArachnidBotMk3 {
        bot.orientation = bot.rotate(bot.orientation, "R");

        return bot;
    }
}
