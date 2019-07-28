import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import { GET_CRYPTO_DATA_URL, FETCH_CRYPTO_CURRENCY, FETCH_CRYPTO_BY_CURRENCY, FETCH_CURRENCY } from '../../constantsVar';
import { getCryptoData, getCryptoDataForCurrency, getCryptoCurrencyList } from '..';
jest.mock('axios');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);


const cryptoData =
{
    "currency": "BTC",
    "date": "20180507",
    "quotes": [
        {
            "time": "0915",
            "price": "34.98"
        },
        {
            "time": "1045",
            "price": "36.13"
        },
        {
            "time": "1230",
            "price": "37.01"
        },
        {
            "time": "1400",
            "price": "35.98"
        },
        {
            "time": "1530",
            "price": "33.56"
        }
    ]
}
describe('async actions', () => {

    it('creates  action FETCH_CRYPTO_CURRENCY', () => {
        const store = mockStore({})
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data :cryptoData
            })
        );
        const expectedActions = [
            { type: FETCH_CRYPTO_CURRENCY, payload: cryptoData }]

        return store.dispatch(getCryptoData()).then(() => {
            expect(store.getActions().type).toEqual(expectedActions.type)
            expect(store.getActions().payload).toEqual(expectedActions.payload)
        })

    });

    it('creates  action FETCH_CRYPTO_BY_CURRENCY', () => {
        const store = mockStore({})
        axios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data :cryptoData
        })
    );
        const expectedActions = [
            { type: FETCH_CRYPTO_BY_CURRENCY, payload: cryptoData }]

        return store.dispatch(getCryptoDataForCurrency()).then(() => {
            expect(store.getActions().type).toEqual(expectedActions.type)
            expect(store.getActions().payload).toEqual(expectedActions.payload)
        })

    });

    it('creates  action FETCH_CURRENCY', () => {
        const store = mockStore({})
        axios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data :["BTC"]
        })
    );
        const expectedActions = [
            { type: FETCH_CURRENCY, payload: cryptoData }]

        return store.dispatch(getCryptoCurrencyList()).then(() => {
            expect(store.getActions().type).toEqual(expectedActions.type)
            expect(store.getActions().payload).toEqual(expectedActions.payload)
        })

    });
});