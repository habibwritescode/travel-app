import { formatDate } from "../js/helperFunctions";
import { capitalCase } from "../js/helperFunctions";

describe("Test: the function 'formatDate()'", () => {
    test('It should be defined', () => {
        expect(formatDate).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof formatDate).toBe("function");
    });

    test('2020-04-23 should return  April 23, 2020', () => {
        expect(formatDate('2020-04-23')).toBe(`April 23, 2020`);
    });

    test('2020-04-23 should not return February 23, 2020', () => {
        expect(formatDate('2020-04-23')).not.toBe(`February 23, 2020`);
    });
});


describe("Test: the function 'capitalCase()'", () => {
    test('It should be defined', () => {
        expect(capitalCase).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof capitalCase).toBe("function");
    });

    test('word should return Word', () => {
        expect(capitalCase('word')).toBe(`Word`);
    });

    test('word should not return word', () => {
        expect(capitalCase('word')).not.toBe(`word`);
    });
});