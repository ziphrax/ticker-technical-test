export interface Point {
    x: number;
    y: number;
}

export class ArachnidBot {
    resolve(x: number, y: number, instructions: string ): Point{
        return {x: 0, y: 0};
    }
}