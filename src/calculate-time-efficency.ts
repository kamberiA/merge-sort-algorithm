import {TimeEfficiencyInterface} from "./interfaces/time-efficiency.interface";
import {MergeSort} from "./merge";

// calculating time spent in milliseconds for sorting
export class CalculateTimeEfficiency extends MergeSort {
    public timeEfficiency(start: number, end: number): TimeEfficiencyInterface {
        const milliseconds = end - start;
        const seconds = milliseconds / 1000;
        return {milliseconds, seconds};
    }
}
