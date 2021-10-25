import { ArachnidBot } from "./arachnid-bot";
import { Point } from "./point";
import * as utils from './utils';

export type Orientation = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type Direction = "L" | "R";

export class ArachnidBotMk2 extends ArachnidBot {
    resolve(x: number, y: number, instructions: string): Point {
        let point: Point = { x, y };
        let orientation: Orientation  = "UP"; // based of assumption initial direction is up.

        for(let index = 0; index < instructions.length; index++){
            let newPoint: Point = point;

            switch(instructions[index]){
                case "F":
                    switch(orientation){
                        case "UP":           
                            newPoint = utils.addPoint(point, {x:0, y:1});
                            break;
                        case "DOWN":
                            newPoint = utils.addPoint(point, {x:0, y:-1});
                            break;
                        case "LEFT":
                            newPoint = utils.addPoint(point, {x:-1, y:0});
                            break;
                        case "RIGHT":
                            newPoint = utils.addPoint(point, {x:1, y:0});
                            break;
                    }
                    break;
                case "B":
                    switch(orientation){
                        case "UP":
                            orientation = "DOWN";  
                            newPoint = utils.addPoint(point, {x:0, y:-1});
                            break;
                        case "DOWN":                            
                            orientation = "UP";
                            newPoint = utils.addPoint(point, {x:0, y:1});
                            break;
                        case "LEFT":                            
                            orientation = "RIGHT";
                            newPoint = utils.addPoint(point, {x:1, y:0});
                            break;
                        case "RIGHT":                            
                            orientation = "LEFT";
                            newPoint = utils.addPoint(point, {x:-1, y:0});
                            break;
                    }
                    break;
                case "L":
                    orientation = this.rotate(orientation, "L");
                    break;
                case "R":
                    orientation = this.rotate(orientation, "R");
                    break;
                default:
                    console.error(`Invalid command: ${instructions[index]}`);
            }

            if(this.checkInBounds(newPoint)) point = newPoint;

            console.log(`${instructions[index]}=>, point : {${point.x}:${point.y}}, orientation: ${orientation}`);
            console.log(newPoint);
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
    rotate(orientation: Orientation, direction:Direction): Orientation{
        if(orientation === "UP" && direction === "R") return "RIGHT";
        if(orientation === "UP" && direction === "L") return "LEFT";
        if(orientation === "DOWN" && direction === "R") return "LEFT";
        if(orientation === "DOWN" && direction === "L") return "RIGHT";
        if(orientation === "LEFT" && direction === "R") return "UP";
        if(orientation === "LEFT" && direction === "L") return "DOWN";
        if(orientation === "RIGHT" && direction === "R") return "DOWN";
        
        return "UP";
    }
}
