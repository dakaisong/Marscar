import { Point } from './Point';
import { Helicopter } from './Helicopter';
import { ICar } from './ICar';
import { ActionFactory } from './ActionFactory';
import { Direction } from './direct';
import { Order } from './order';
import { Action } from './Action';


export class MarsCar implements ICar {

    point: Point;
    name:string;
    action: Action;
    helicopter: Helicopter = new Helicopter();
    tracePoint: Array<Point> = [];
    direct:string = Direction.North;

    constructor(name) {
        //this.point = new Point(Math.floor(Math.random()*25+1),Math.floor(Math.random()*25+1));;
        this.name = name;
        this.point = new Point(8,17);
        this.tracePoint.push(new Point(this.point.getX(),this.point.getY()));
    }

    public processOrder(orders:Array<string>){
        for (let index = 0; index < orders.length; index++) {
            this.recivedOrder(orders[index]);
        }
    }

    public recivedOrder(order:string) {
        let tracePoint = this.tracePoint;
        let actionFactory = new ActionFactory();
       
        order = order.toUpperCase();

        this.action = actionFactory.createEngine(order); 
        if(null !== this.action && order !== Order.Helicopter){
            this.direct = this.action.move(this.point, this.direct);
            tracePoint.push(new Point(this.point.getX(),this.point.getY()));
        }else if(order === Order.Helicopter){
            let temp = tracePoint.concat(this.helicopter.check(this.point));
            this.tracePoint = temp;
        }else{
            return;
        }
        
    }

    public getTrack(){
        return this.tracePoint;
    }

    public getLocation(){
        return this.point;
    }
}