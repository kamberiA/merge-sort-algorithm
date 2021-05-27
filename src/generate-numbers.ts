// auto generate 100000 random integer numbers and return them
export class GenerateNumbers {
    public generate(): number[] {
        const tempArray: number[] = [];
        for (let i = 0; i < 100; i++) {
            tempArray[i] = Math.floor(Math.random() * 101) + 1;
        }
        return tempArray;
    }
}
