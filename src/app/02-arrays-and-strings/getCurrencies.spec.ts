import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
     it('it should include the SUPPORTED currencies in array', () => {
        const res = getCurrencies();
        expect(res).toContain('USD');
        expect(res).toContain('EUR');
        expect(res).toContain('AUD');
    });
});
