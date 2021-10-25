import { describe } from 'mocha';
import { expect } from 'chai';

import { Point } from '../arachnid-bot';
import { ArachnidBotMk2 } from '../arachnid-bot-mk2';

describe("Arachnid Bot: Mk 2",()=>{
    it("when instantiated is not null", ()=>{
        const bot = new ArachnidBotMk2();
        expect(bot).to.not.be.null;
    });

    it("Given scenario 1: resolve(0, 0 , FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF) returns (0, 0)",() => {
        const bot = new ArachnidBotMk2();
        
        const expected: Point = {x: 0, y: 0};
        
        const actual = bot.resolve(0, 0, "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");

        expect(actual).to.deep.equal(expected);
    });
});