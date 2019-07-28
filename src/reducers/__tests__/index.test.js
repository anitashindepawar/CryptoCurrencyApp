import Enzyme, { shallow, mount } from 'enzyme';
import { currencyReducers,cryptoReducers} from '../index';
import Adapter from 'enzyme-adapter-react-16';
import { FETCH_CURRENCY, FETCH_CRYPTO_CURRENCY, FETCH_CRYPTO_BY_CURRENCY} from '../../constantsVar';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing currencyReducers', () => {
    it('Test action: FETCH_CURRENCY', () => {
        const currencyCodeArray = ['BTC','ETC','LTC'];
        const fetchCurrencyAction = {
            type: FETCH_CURRENCY,
            payload: {data: currencyCodeArray}
        };
        const outCome = currencyReducers([], fetchCurrencyAction);
       
        expect(outCome.data).toEqual(currencyCodeArray);

    });

    it('Test action: Dafult', () => {
        const currencyCodeArray = ['BTC','ETC','LTC'];
        const fetchCurrencyAction = {
            type: "Default",
            payload: {data: currencyCodeArray}
        };
        const outCome = currencyReducers([], fetchCurrencyAction);
       
        expect(outCome).toEqual([]);

    });
});

describe('Testing cryptoReducers', () => {
    it('Test action: FETCH_CRYPTO_CURRENCY', () => {
        const currencyCodeArray = ['BTC','ETC','LTC'];
        const fetchCurrencyAction = {
            type: FETCH_CRYPTO_CURRENCY,
            payload: {data: currencyCodeArray}
        };
        const outCome = cryptoReducers([], fetchCurrencyAction);
       
        expect(outCome.data).toEqual(currencyCodeArray);

    });

    it('Test action: FETCH_CRYPTO_BY_CURRENCY', () => {
        const currencyCodeArray = ['BTC','ETC','LTC'];
        const fetchCurrencyAction = {
            type: FETCH_CRYPTO_BY_CURRENCY,
            payload: {data: currencyCodeArray}
        };
        const outCome = cryptoReducers([], fetchCurrencyAction);
       
        expect(outCome.data).toEqual(currencyCodeArray);

    });

    it('Test action: Default', () => {
       
        const fetchCurrencyAction = {
            type: FETCH_CRYPTO_BY_CURRENCY,
            
        };
        const outCome = cryptoReducers([], fetchCurrencyAction);
       
        expect(outCome).toEqual({});

    });
});
