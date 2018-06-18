import { compute } from './compute';

describe('compute', () => {
    xit('should return zero if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

     xit('should increment the input if is positive', () => {
        const result = compute(6);
        expect(result).toBe(7);
    });
});






