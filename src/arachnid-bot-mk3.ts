import { ArachnidBotMk2, Orientation } from "./arachnid-bot-mk2";
import { InstructionParser } from "./instructions/instruction-parser";
import { Point } from "./point";

export class ArachnidBotMk3 extends ArachnidBotMk2 {
    instructionParser: InstructionParser
    orientation: Orientation;
    location: Point;
    remainingFuel: number;
    
    constructor( startingFuel: number, instructionParser: InstructionParser ){
        super();
        this.instructionParser = instructionParser;
        this.orientation = "UP";
        this.remainingFuel = startingFuel;
        this.location = {x:0 , y: 0};
    }

    resolve(x: number, y: number, instructions: string): Point {
        this.location = { x, y }; //this could be moved into the constructor as the object shouldn't really be changing location compared to its last known location
                                  // if given a new set of instructions..
        let parsedInstructions = this.instructionParser.parseInstructions(instructions);

        for(let index = 0; index < parsedInstructions.length; index++){
            const currentInstruction = parsedInstructions[index];
            const update = currentInstruction.resolve(this);

            this.location = update.location;
            this.orientation = update.orientation;
            this.remainingFuel = update.remainingFuel;
        }

        return this.location;
    }

    checkInBounds(point: Point): boolean{
        return true;
    }
}


