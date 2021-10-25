import { ArachnidBotMk3 } from '../arachnid-bot-mk3';
import { Point } from '../point';
import * as utils from '../utils';
import { Instruction } from './instruction';

export class ForwardXDistanceInstruction implements Instruction {
    distance: number;

    constructor(distance: number) {
        this.distance = distance;
    }

    resolve(bot: ArachnidBotMk3): ArachnidBotMk3 {
        let movement: Point = { x: 0, y: 0 };
        let coveredDistance = 0;

        while (hasSufficientFuel() && coveredDistance < this.distance) {
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

            coveredDistance++;
            bot.location = utils.addPoint(bot.location, movement);
            bot.remainingFuel = bot.remainingFuel - 1;
        }

        return bot;

        function hasSufficientFuel() {
            return bot.remainingFuel - 1 >= 0;
        }
    }
}
