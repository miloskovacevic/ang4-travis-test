import { greet } from './greet';
import { getCurrencies } from './getCurrencies';


describe('greet', () => {
    it('it should include the name in message', () => {
        expect(greet('mosh')).toContain('mosh');
    });

     it('it should include the currency in array', () => {
        expect(getCurrencies()).toContain('EUR');
    });
});
