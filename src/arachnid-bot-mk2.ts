import { ArachnidBot, Point } from "./arachnid-bot";

export class ArachnidBotMk2 extends ArachnidBot {
    resolve(x: number, y: number, instructions: string): Point {
        let point: Point = { x, y };

        point.x = point.x + (instructions.match(/R/g) || []).length - (instructions.match(/L/g) || []).length;
        point.y = point.y + (instructions.match(/F/g) || []).length - (instructions.match(/B/g) || []).length;

        return point;
    }
}
