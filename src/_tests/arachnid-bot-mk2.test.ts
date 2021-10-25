import { describe } from 'mocha';
import { expect } from 'chai';

import { Point } from '../point';
import { ArachnidBotMk2 } from '../arachnid-bot-mk2';

describe("Arachnid Bot: Mk 2",()=>{
    it("when instantiated is not null", ()=>{
        const bot = new ArachnidBotMk2();
        expect(bot).to.not.be.null;
    });

    it("Given scenario 1: resolve(0, 0 , FFFRFFF) returns (3, 3)",() => {
        const bot = new ArachnidBotMk2();
        
        const expected: Point = {x: 3, y: 3};
        
        const actual = bot.resolve(0, 0, "FFFRFFF");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 2: resolve(0, 0, FFFFRRFFFF ) returns (0, 0)",() => {
        const bot = new ArachnidBotMk2();
        
        const expected: Point = {x: 0, y: 0};
        
        const actual = bot.resolve(0, 0, "FFFFRRFFFF");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 3: resolve(0, 0, LFFRFF ) returns (0, 0)",() => {
        const bot = new ArachnidBotMk2();
        
        const expected: Point = {x: 0, y: 2};
        
        const actual = bot.resolve(0, 0, "LFFRFF");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 4: resolve(0, 0, LFFRFFLLFF ) returns (0, 0)",() => {
        const bot = new ArachnidBotMk2();
        
        const expected: Point = {x: 0, y: 0};
        
        const actual = bot.resolve(0, 0, "LFFRFFLLFF");

        expect(actual).to.deep.equal(expected);
    });

    it("Given scenario 5: resolve(0, 0, FFB ) returns (0, 1)",() => {
        const bot = new ArachnidBotMk2();
        
        const expected: Point = {x: 0, y: 1};
        
        const actual = bot.resolve(0, 0, "FFB");

        expect(actual).to.deep.equal(expected);
    });

    describe("CheckInBounds",()=>{
        let bot: ArachnidBotMk2;

        beforeEach(()=>{
            bot = new ArachnidBotMk2();
        });

        it("CheckInBounds Given Point (0, 0) returns true",()=>{
            const actual = bot.checkInBounds({x: 0, y: 0});
            expect(actual).to.be.true;
        });

        it("CheckInBounds Given Point (-1, 0) returns false",()=>{
            const actual = bot.checkInBounds({x: -1, y: 0});
            expect(actual).to.be.false;
        });

        it("CheckInBounds Given Point (0, -1) returns false",()=>{
            const actual = bot.checkInBounds({x: 0, y: -1});
            expect(actual).to.be.false;
        });

        it("CheckInBounds Given Point (-1, -1) returns false",()=>{
            const actual = bot.checkInBounds({x: -1, y: -1});
            expect(actual).to.be.false;
        });

        it("CheckInBounds Given Point (1, 1) returns true",()=>{
            const actual = bot.checkInBounds({x: 1, y: 1});
            expect(actual).to.be.true;
        });
    });

    describe("Rotate",()=>{
        let bot: ArachnidBotMk2;

        beforeEach(()=>{
            bot = new ArachnidBotMk2();
        });

        it("rotate",()=>{
            // TODO:
        });
    });

});