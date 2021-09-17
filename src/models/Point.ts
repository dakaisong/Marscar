export class Point {

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public setX(x:number) {
        this.x = x;
    }

    public setY(y:number) {
        this.y = y;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

}