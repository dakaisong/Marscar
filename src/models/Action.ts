import { Point } from './Point';

export abstract class Action {
    abstract move(point: Point, direct: string):string;
}



