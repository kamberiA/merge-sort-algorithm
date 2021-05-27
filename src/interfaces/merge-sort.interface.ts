import {TimeEfficiencyInterface} from "./time-efficiency.interface";

export interface MergeSortInterface {
    temp: number[];

    sort(arr: number[]): void;

    mergeSort(arr: number[], temp: number[], left: number, right: number): void;

    merge(arr: number[], temp: number[], left: number, right: number, rightEnd: number): void;

    timeEfficiency(start: number, end: number): TimeEfficiencyInterface
}
