// Bijective base-26
// https://en.wikipedia.org/wiki/Bijective_numeration#The_bijective_base-26_system

import decimalToBb26 from './decimal-to-bb26'
import bb26ToDecimal from './bb26-to-decimal'
import randomBb26String from './random-bb26-string'

class Bb26 {
    public static add(a: string, b: string): string {
        return this.fromDecimal(this.toDecimal(a) + this.toDecimal(b))
    }

    public static equalTo(a: string, b: string): boolean {
        return this.toDecimal(a) === this.toDecimal(b)
    }

    public static fromDecimal = decimalToBb26

    public static greaterThan(a: string, b: string): boolean {
        return this.toDecimal(a) > this.toDecimal(b)
    }

    public static lessThan(a: string, b: string): boolean {
        return this.toDecimal(a) < this.toDecimal(b)
    }

    public static randomString = randomBb26String

    public static subtract(a: string, b: string): string {
        return this.fromDecimal(this.toDecimal(a) - this.toDecimal(b))
    }

    public static toDecimal = bb26ToDecimal
}

export default Bb26
