// This class contains logic for Merge Sort algorithm implementation.

export class MergeSort {

    public temp: number[] = [];

    constructor() {
    }

    //  Starts the sorting process, array to be sorted

    public sort(arr: number[]): void {
        if (arr !== undefined) {
            this.mergeSort(arr, this.temp, 0, arr.length - 1);
        }
    }
    /**
     * Recursively sorts and calls merge.
     *
     * @method mergeSort
     * @param {Array} arr The array to be sorted.
     * @param {Array} temp The temporary array.
     * @param {Number} left The left index of the array.
     * @param {Number} right The right index of the array.
     */
    public mergeSort(arr: number[], temp: number[], left: number, right: number): void {
        if (left < right) {
            let center: number = Math.floor((left + right) / 2);
            this.mergeSort(arr, temp, left, center);
            this.mergeSort(arr, temp, center + 1, right);
            this.merge(arr, temp, left, center + 1, right);
        }
    }

    /**
     * This method contains the logic to implement the merge step.
     *
     * @method merge
     * @param {Array} arr The array to be sorted.
     * @param {Array} temp The temporary array.
     * @param {Number} left The left index of the array.
     * @param {Number} right The right index of the array.
     * @param {Number} rightEnd The right most index of the array.     */

    public merge(arr: number[], temp: number[], left: number, right: number, rightEnd: number): void {

        let leftEnd: number = right - 1;
        let k: number = left;
        let num: number = rightEnd - left + 1;

        // Sorting two closest arrays, the smaller element will be pushed first to the new empty array

        while (left <= leftEnd && right <= rightEnd) {
            if (arr[left] <= arr[right]) {
                temp[k++] = arr[left++];
            } else {
                temp[k++] = arr[right++]
            }
        }
        
        // Since the two arrays length can be uneven, you may have one last element available in either left or right array

        while (left <= leftEnd) {
            temp[k++] = arr[left++];
        }

        while (right <= rightEnd) {
            temp[k++] = arr[right++];
        }

        for (let i: number = 0; i < temp.length; i++, rightEnd--) {
            arr[rightEnd] = temp[rightEnd];
        }

    }
}
