import { ArachnidBot } from "./arachnid-bot";
import { Point } from "./point";
import * as utils from './utils';

export class ArachnidBotMk2 extends ArachnidBot {
    resolve(x: number, y: number, instructions: string): Point {
        let point: Point = { x, y };
        let nextMove: Point = {x: 0 ,y: 1}; // based of assumption initial direction is up.

        for(let index = 0; index < instructions.length; index++){
            switch(instructions[index]){
                case "F":
                    if(this.checkInBounds(utils.addPoint(point,nextMove))){
                        point = utils.addPoint(point, nextMove)
                    }
                case "B":
                    if(this.checkInBounds(utils.addPoint(point,nextMove))){
                        point = utils.subtractPoint(point, nextMove)
                    }
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

    // answer from https://stackoverflow.com/questions/17410809/how-to-calculate-rotation-in-2d-in-javascript
    // adapted to
    rotate(point:Point, angle: number){
        let radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (point.x - point.x)) + (sin * (point.y - point.y)) + point.x,
        ny = (cos * (point.y - point.y)) - (sin * (point.x- point.x)) + point.y;
    
        return {x: nx, y: ny};
    }
}
