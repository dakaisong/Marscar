import { Point } from '../models/Point';
export class DuplicateRemove {

    public static duplicateRemove(traceArray:Array<Point>){
        console.log(traceArray);
        let filterArray = traceArray.reduce((el, current) => {
            if(!el.some(item => item.x === current.x && item.y === current.y)) {
              el.push(current);
            }
            return el;
        },[]);

        return filterArray;
    }
        
}