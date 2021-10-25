import { ArachnidBotMk3 } from "../arachnid-bot-mk3";
import { ForwardInstruction } from "./forward-instruction";
import { Instruction } from "./instruction";

export class BackInstruction implements Instruction {
    resolve(bot: ArachnidBotMk3): ArachnidBotMk3 {
        switch (bot.orientation) {
            case "UP":
                bot.orientation = "DOWN";
                break;
            case "DOWN":
                bot.orientation = "UP";
                break;
            case "LEFT":
                bot.orientation = "RIGHT";
                break;
            case "RIGHT":
                bot.orientation = "LEFT";
                break;
        }

        const stepForward = new ForwardInstruction();

        bot = stepForward.resolve(bot);

        return bot;
    }
}
