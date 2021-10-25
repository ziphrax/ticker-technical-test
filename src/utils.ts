import { Point } from "./point";

export function addPoint(pointA: Point, pointB: Point): Point {
    return {
        x: pointA.x + pointB.x, 
        y: pointA.y + pointB.y
    };
}


export function subtractPoint(pointA: Point, pointB: Point): Point {
    return {
        x: pointA.x - pointB.x, 
        y: pointA.y - pointB.y
    };
}

