import { Action } from './Action';

export interface AbstractFactory {
    createEngine(order:string): Action;
}