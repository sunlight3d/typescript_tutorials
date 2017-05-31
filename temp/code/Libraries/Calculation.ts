import { CalculationInterface } from './CalculationInterface';
export class Calculation implements CalculationInterface {
    addTwoNumbers(x: number, y: number): number {
        return x + y;
    }
    multiplyTwoNumbers(x: number, y: number): number {
        return x * y;
    }
    minusTwoNumbers(x: number, y: number): number {
        return x - y;
    }
}
