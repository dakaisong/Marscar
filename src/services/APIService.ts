import { MarsCar } from '../models/Marcar';
import { Mapping } from '../Utils/mapping';
import { DuplicateRemove } from '../Utils/duplicateRemove';
import { Point } from '../models/Point';
import { MarsMap} from '../models/MarsMap';

export class APIService {
    
    public excuteOrders (orders:string,name:string){
        let car = new MarsCar(name);
        let orderList = orders.split('');
        car.processOrder(orderList);
        let x = Mapping.mapPoint(car.getLocation().getX());
        let coverage = this.calCoverage(car.getTrack());
        return {"name":car.name,"location":x+car.getLocation().getY(),"coverage":coverage*100+"%"}
    }

    private calCoverage (trackingPoint:Array<Point>) {
        let filterPoints = DuplicateRemove.duplicateRemove(trackingPoint);
        return filterPoints.length /(MarsMap.Max_xpoint * MarsMap.Max_ypoint);
    }
}