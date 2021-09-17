import { MarsCar } from '../src/models/Marcar';
import { Point } from '../src/models/Point';

test('Test forward',()=>{
    const car = new MarsCar("Test");
    car.recivedOrder("F");
    const point:Point = car.getLocation();
    expect(point.getX()).toBe(8);
    expect(point.getY()).toBe(16); 
});

test('Test backward',()=>{
    const car = new MarsCar("Test");
    car.recivedOrder("B");
    const point:Point = car.getLocation();
    expect(point.getX()).toBe(8);
    expect(point.getY()).toBe(18); 
});

test('Test turn left',()=>{
    const car = new MarsCar("Test");
    car.recivedOrder("L");
    const point:Point = car.getLocation();
    expect(point.getX()).toBe(8);
    expect(point.getY()).toBe(17); 
});

test('Test turn right',()=>{
    const car = new MarsCar("Test");
    car.recivedOrder("R");
    const point:Point = car.getLocation();
    expect(point.getX()).toBe(8);
    expect(point.getY()).toBe(17); 
});
