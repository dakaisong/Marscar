import { Point } from './Point';

export class MarsMap {
    public static Max_xpoint: number = 25;
    public static Min_xpoint: number = 1;
    public static Max_ypoint: number = 25;
    public static Min_ypoint: number = 1; 


    public static checkMaxXpoint(point: Point){
        return MarsMap.Max_xpoint > point.getX() + 1;
    }

    public static checkMinXpoint(point: Point){
        return MarsMap.Min_xpoint <= point.getX() - 1;
    }

    public static checkMaxYpoint(point: Point){
        return MarsMap.Max_ypoint > point.getY() + 1;
    }

    public static checkMinYpoint(point: Point){
        return MarsMap.Min_ypoint <= point.getY() - 1;
    }

}