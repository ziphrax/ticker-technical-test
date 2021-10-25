import { describe } from 'mocha';
import { expect } from 'chai';

import { ArachnidBot, Point } from '../arachnid-bot';

describe("Arachnid Bot",()=>{
    it("when instantiated is not null", ()=>{
        const bot = new ArachnidBot();
        expect(bot).to.not.be.null;
    });

    it("Given scenario 1: resolve(0, 0 , FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF) returns (-1, 21)",() => {
        
        const bot = new ArachnidBot();
        
        const expected: Point = {x: -1, y: 21};
        
        const actual = bot.resolve(0, 0, "FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 2: resolve(3, 6, FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF ) returns (4, 19)",() => {
        const bot = new ArachnidBot();
        
        const expected: Point = {x: 4, y: 19};
        
        const actual = bot.resolve(3, 6, "FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 3: resolve(0, 7 ,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR) returns (3, 15)",() => {
        const bot = new ArachnidBot();
        
        const expected: Point = {x: 3, y: 15};
        
        const actual = bot.resolve(0, 7, "RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR");

        expect(actual).to.deep.equal(expected);
    });
})