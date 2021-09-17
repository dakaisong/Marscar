import { Point } from './Point';
import { MarsMap } from './MarsMap';
import { Action } from './Action';
import { Direction } from './direct';
import { Order } from './order';
import { AbstractFactory } from './AbstractFactory';



export class ActionFactory implements AbstractFactory{
    createEngine(order:string): Action {
        let engine: Action= null;
        if(Forward.order === order){
            engine = new Forward();
        }

        if(Backword.order === order){
            engine = new Backword();
        }

        if(TurnLeft.order === order){
            engine = new TurnLeft();
        }

        if(TurnRight.order === order){
            engine = new TurnRight();
        }

        return engine;
    }

}

class Forward extends Action{
    public static order:string = Order.Forward;

    move(point: Point, direct) {
        if( Direction.North === direct){
            if(MarsMap.checkMinYpoint(point)) {
                point.setY(point.getY() - 1);
            }
        }else if(Direction.East === direct) {
            if(MarsMap.checkMaxXpoint(point)) {
                point.setX(point.getX() + 1);
            }
        }else if(Direction.South === direct) {
            if(MarsMap.checkMaxYpoint(point)) {
                point.setY(point.getY() +1);
            }
        }else if(Direction.West === direct) {
            if(MarsMap.checkMinXpoint(point)) {
                point.setX(point.getX() - 1);
            }
        }
        return direct;
    }
    
}

class Backword extends Action{
    public static order:string = Order.Backword; 

    move(point:Point, direct: string) {
        if(Direction.North === direct){
            if(MarsMap.checkMaxYpoint(point)) {
                point.setY(point.getY() + 1);
            }
        }else if(Direction.East === direct) {
            if(MarsMap.checkMinXpoint(point)) {
                point.setX(point.getX() - 1);
            }
        }else if(Direction.South === direct) {
            if(MarsMap.checkMinYpoint(point)) {
                point.setY(point.getY() - 1);
            }
        }else if(Direction.West === direct) {
            if(MarsMap.checkMaxXpoint(point)) {
                point.setX(point.getX() + 1);
            }
        }
        return direct;
    }
}

class TurnLeft extends Action{
    public static order:string = Order.TurnLeft;

    move(point:Point, direct: string) {
        if(Direction.East === direct){
			direct = Direction.North;
		} else if(Direction.South === direct){
			direct = Direction.East;
		} else if(Direction.West === direct){
			direct = Direction.South;
		} else if(Direction.North === direct){
			direct = Direction.West;
        }

        return direct;
    }
}

class TurnRight extends Action{
    static order = Order.TurnRight;
    move(point:Point,direct: string) {
		if(Direction.East === direct){
			direct = Direction.South;
		} else if(Direction.South === direct){
			direct = Direction.West;
		} else if(Direction.West === direct){
			direct = Direction.North;
		} else if(Direction.North === direct){
			direct = Direction.East;
		}
        return direct;
    }
}

