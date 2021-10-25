import { ArachnidBotMk3 } from "../arachnid-bot-mk3";
import { Point } from "../point";
import { Instruction } from "./instruction";
import * as utils from '../utils';

export class ForwardInstruction implements Instruction {
    resolve(bot: ArachnidBotMk3): ArachnidBotMk3 {
        let movement: Point = { x: 0, y: 0 };

        if (checkHasSufficientFuel()) {
            switch (bot.orientation) {
                case "UP":
                    movement = { x: 0, y: 1 };
                    break;
                case "DOWN":
                    movement = { x: 0, y: -1 };
                    break;
                case "LEFT":
                    movement = { x: -1, y: 0 };
                    break;
                case "RIGHT":
                    movement = { x: 1, y: 0 };
                    break;
                default:
                    throw new Error("Invalid Orientation");
            }
    
            bot.location = utils.addPoint(bot.location, movement);
            bot.remainingFuel = bot.remainingFuel - 1;
        }

        return bot;

        function checkHasSufficientFuel() {
            return bot.remainingFuel - 1 >= 0;
        }
    }
}
