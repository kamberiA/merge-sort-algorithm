// auto generate 100000 random integer numbers and return them
export class GenerateNumbers {
    public generate(): number[] {
        const tempArray: number[] = [];
        for (let i = 0; i < 100000; i++) {
            tempArray[i] = Math.floor(Math.random() * 100001) + 1;
        }
        return tempArray;
    }
}
