import { Direction } from '../src/models/direct';
import {ActionFactory} from '../src/models/ActionFactory';
import { Point } from '../src/models/Point';

test('Move forword on point (1,1) to (1,1) when direct is N',()=>{
    const action = new ActionFactory().createEngine("F");
    let point = new Point(1,1)
    let direct = Direction.North;
    action.move(point,direct);
    expect(point.getX()).toBe(1);
    expect(point.getY()).toBe(1);
});

test('Move forword on point (1,1) to (1,2) when direct is S',()=>{
    const action = new ActionFactory().createEngine("F");
    let point = new Point(1,1)
    let direct = Direction.South;
    action.move(point,direct);
    expect(point.getX()).toBe(1);
    expect(point.getY()).toBe(2);
});

test('Move forword on point (1,1) to (2,1) when direct is W',()=>{
    const action = new ActionFactory().createEngine("F");
    let point = new Point(1,1)
    let direct = Direction.West;
    action.move(point,direct);
    expect(point.getX()).toBe(1);
    expect(point.getY()).toBe(1);
});

test('Move forword on point (1,1) to (2,1) when direct is E',()=>{
    const action = new ActionFactory().createEngine("F");
    let point = new Point(1,1)
    let direct = Direction.East;
    action.move(point,direct);
    expect(point.getX()).toBe(2);
    expect(point.getY()).toBe(1);
});

test('Move back on point (1,1) to (1,2) when direct is N',()=>{
    const action = new ActionFactory().createEngine("B");
    let point = new Point(1,1)
    let direct = Direction.North;
    action.move(point,direct);
    expect(point.getX()).toBe(1);
    expect(point.getY()).toBe(2);
});

test('Move back on point (1,1) to (1,1) when direct is S',()=>{
    const action = new ActionFactory().createEngine("B");
    let point = new Point(1,1)
    let direct = Direction.South;
    action.move(point,direct);
    expect(point.getX()).toBe(1);
    expect(point.getY()).toBe(1);
});

test('Move back on point (1,1) to (2,1) when direct is W',()=>{
    const action = new ActionFactory().createEngine("B");
    let point = new Point(1,1)
    let direct = Direction.West;
    action.move(point,direct);
    expect(point.getX()).toBe(2);
    expect(point.getY()).toBe(1);
});

test('Move back on point (1,1) to (1,1) when direct is E',()=>{
    const action = new ActionFactory().createEngine("B");
    let point = new Point(1,1)
    let direct = Direction.East;
    action.move(point,direct);
    expect(point.getX()).toBe(1);
    expect(point.getY()).toBe(1);
});

test('Turn left is W from N', ()=>{
    const action = new ActionFactory().createEngine("L");
    let point = new Point(1,1)
    let direct = Direction.North;
    let result = action.move(point,direct);
    expect(result).toEqual("W");
})

test('Turn right is E from N', ()=>{
    const action = new ActionFactory().createEngine("R");
    let point = new Point(1,1)
    let direct = Direction.North;
    let result = action.move(point,direct);
    expect(result).toEqual("E");
})