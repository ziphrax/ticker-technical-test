import { describe } from 'mocha';
import { expect } from 'chai';
import * as utils from '../utils';

describe("addPoint",()=>{
    it("given {1,1} {1,1} returns {2,2}",()=>{
        const actual = utils.addPoint({x:1,y:1},{x:1,y:1});
        expect(actual).to.be.deep.equal({x:2, y:2});
    })
});

describe("subtractPoint",()=>{
    it("given {1,1} {1,1} returns {0,0}",()=>{
        const actual = utils.subtractPoint({x:1,y:1},{x:1,y:1});
        expect(actual).to.be.deep.equal({x:0, y:0});
    })
});