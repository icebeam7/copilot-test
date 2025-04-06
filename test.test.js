const { add } = require('./test');

// filepath: /workspaces/copilot-test/test.test.js

describe('add function', () => {
    test('should return the sum of two positive numbers', () => {
        expect(add(3, 5)).toBe(8);
    });

    test('should return the sum of two negative numbers', () => {
        expect(add(-3, -5)).toBe(-8);
    });

    test('should return the sum of a positive and a negative number', () => {
        expect(add(7, -2)).toBe(5);
    });

    test('should return the same number when adding zero', () => {
        expect(add(0, 10)).toBe(10);
        expect(add(10, 0)).toBe(10);
    });

    test('should return the sum of two floating-point numbers', () => {
        expect(add(1.5, 2.3)).toBeCloseTo(3.8);
    });
});