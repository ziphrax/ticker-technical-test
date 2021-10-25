import { BackInstruction } from "./back-instruction";
import { ForwardInstruction } from "./forward-instruction";
import { ForwardXDistanceInstruction } from "./forward-x-distance-instruction";
import { Instruction } from "./instruction";
import { LeftInstruction } from "./left-instruction";
import { RightInstruction } from "./right-instruction";


export class InstructionParser {
    parseInstructions(instructions: string): Instruction[] {
        let result: Instruction[] = [];

        for (let index = 0; index < instructions.length; index++) {
            let currentInstruction = "";

            if (/^\d+$/.test(instructions[index]) && instructions[index + 1] === "F") {
                currentInstruction = instructions[index] + instructions[index + 1];
                index++;
            } else {
                currentInstruction = instructions[index];
            }

            switch (currentInstruction) {
                case "F":
                    result.push(new ForwardInstruction());
                    break;
                case "B":
                    result.push(new BackInstruction());
                    break;
                case "L":
                    result.push(new LeftInstruction());
                    break;
                case "R":
                    result.push(new RightInstruction());
                    break;
                default:
                    if (currentInstruction.length === 2) {
                        const distance = currentInstruction[0];
                        result.push(new ForwardXDistanceInstruction(parseInt(distance)));
                    }
                    else {
                        throw new Error("Invalid instructions");
                    }
                    break;
            }
        }

        return result;
    }
}
