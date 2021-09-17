import { Point } from './Point';
import { MarsMap } from './MarsMap';

export class Helicopter {

    public check(point: Point) {
        let points = this.generatePoint(point);
 
        return points.filter(point=>{
            if(!(point.getX() > MarsMap.Max_xpoint || point.getX() <MarsMap.Min_xpoint || point.getY() > MarsMap.Max_ypoint || point.getY() < MarsMap.Min_ypoint))
            return point;
        })
    
    }

    private generatePoint(point:Point) {
        let list: Array<Point> = [];

        for (let index = 0; index < 3; index++) {
            list.push(new Point(point.getX()-1+index,point.getY()-1));
            list.push(new Point(point.getX()-1+index,point.getY()));
            list.push(new Point(point.getX()-1+index,point.getY()+1));
        }
        return list;
    }
}