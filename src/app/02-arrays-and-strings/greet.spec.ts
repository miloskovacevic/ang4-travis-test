import { greet } from './greet';
import { getCurrencies } from './getCurrencies';


describe('greet', () => {
    xit('it should include the name in message', () => {
        expect(greet('mosh')).toContain('mosh');
    });

    xit('it should include the currency in array', () => {
        expect(getCurrencies()).toContain('EUR');
    });
});
