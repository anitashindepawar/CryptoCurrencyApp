import { combineReducers } from 'redux';
import { INITIAL_STATE, FETCH_CRYPTO_CURRENCY, FETCH_CRYPTO_BY_CURRENCY, FETCH_CURRENCY, API_ERROR } from '../constantsVar';

export const cryptoReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CRYPTO_CURRENCY:
            return { ...state, ...action.payload };
        case FETCH_CRYPTO_BY_CURRENCY:
            return { ...state, ...action.payload };
        case API_ERROR:
            return { ...state, isError: true, errorMessage: action.errorMessage };
        default:
            return state;
    }
};

export const currencyReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CURRENCY:
            return { ...state, ...action.payload };
        case API_ERROR:
            return { ...state, isError: true, errorMessage: action.errorMessage };
        default:
            return state;
    }
};

export default combineReducers({
    cryptoState: cryptoReducers,
    currencyState: currencyReducers
});