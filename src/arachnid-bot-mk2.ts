import { ArachnidBot, Point } from "./arachnid-bot";

export class ArachnidBotMk2 extends ArachnidBot {
    resolve(x: number, y: number, instructions: string): Point {
        let point: Point = { x, y };
        let rotation: Point = {x , y};

        for(let index = 0; index < instructions.length; index++){
            switch(instructions[index]){
                case "F":
                case "B":
                case "L":
                case "R":
                    break;
                default:
                    console.error(`Invalid command: ${instructions[index]}`);
            }
        }

        return point;
    }

    checkInBounds(point: Point): boolean{
        if(point.x < 0) return false;
        if(point.y < 0) return false;

        return true;
    }
}
