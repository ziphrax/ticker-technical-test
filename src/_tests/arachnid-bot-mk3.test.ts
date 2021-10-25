import { describe } from 'mocha';
import { expect } from 'chai';

import { ArachnidBot } from '../arachnid-bot';
import { Point } from '../point';
import { ArachnidBotMk3 } from '../arachnid-bot-mk3';
import { InstructionParser } from '../instructions/instruction-parser';

describe("Arachnid Bot: Mk 3",()=>{
    let bot: ArachnidBot;
    
    beforeEach(()=>{
        const parser = new InstructionParser();
        bot = new ArachnidBotMk3(30, parser);
    });

    it("when instantiated is not null", ()=>{        
        expect(bot).to.not.be.null;
    });

    it("Given scenario 1: resolve(0, 0 , FFFFFF3FLFFFFFFR5FL) returns (-6, 14)",() => {
        const expected: Point = {x: -6, y: 14};
        
        const actual = bot.resolve(0, 0, "FFFFFF3FLFFFFFFR5FL");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 2: resolve(4, 3, FFFFFFFFRRRRRRRFFFFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFFFFLLLBBRRRRRLLLLLLLLLRFFF ) returns (-11, 18",() => {
        const expected: Point = {x: -11, y: 18};
        
        const actual = bot.resolve(4, 3, "FFFFFFFFRRRRRRRFFFFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFFFFLLLBBRRRRRLLLLLLLLLRFFF");

        expect(actual).to.deep.equal(expected);
    });
});