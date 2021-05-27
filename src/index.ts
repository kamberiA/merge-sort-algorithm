import {TimeEfficiencyInterface} from "./interfaces/time-efficiency.interface";
import {GenerateNumberInterface} from "./interfaces/generate-number.interface";
import {MergeSortInterface} from "./interfaces/merge-sort.interface";
import {CalculateTimeEfficiency} from "./calculate-time-efficency";
import {GenerateNumbers} from "./generate-numbers";

// generate array of random numbers
const randomNumbers: GenerateNumberInterface = new GenerateNumbers();
const generatedNumbers: number[] = randomNumbers.generate();

// initialize CalculateTimeEfficiency class which is extended with MergeSortClass
let merge: MergeSortInterface = new CalculateTimeEfficiency();

// store the start time
const start = (new Date()).getTime();

// show unsorted elements in array
console.log("unsorted: " + generatedNumbers);

merge.sort(generatedNumbers);

// show sorted elements in array
console.log("sorted: " + generatedNumbers);

// store the end time
const end = (new Date()).getTime();

// calculate time for sorting array
const timeEfficiency: TimeEfficiencyInterface = merge.timeEfficiency(start, end);

// expected result for example => { milliseconds: 6221, seconds: 6.221 }
console.log(timeEfficiency)

