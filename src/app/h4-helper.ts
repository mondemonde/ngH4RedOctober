export class H4Helper {

    static getRndInteger(min: number, max: number) {
        var myMax = max + 1
        return Math.floor(Math.random() * (myMax - min)) + min;
    }
}
