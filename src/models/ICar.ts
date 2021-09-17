import { Point } from './Point';
import { Helicopter } from './Helicopter';

export interface ICar{
    name:string;
    point: Point;
    action: any;
    helicopter: Helicopter;
    tracePoint: Array<Point>;
    direct: string;

    processOrder(order:Array<string>);
    recivedOrder(order:string);
    getTrack();
    getLocation();
}