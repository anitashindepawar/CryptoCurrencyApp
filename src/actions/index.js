import { FETCH_CRYPTO_BY_CURRENCY, FETCH_CRYPTO_CURRENCY, FETCH_CURRENCY, GET_CURRENCY_LIST_URL, GET_CRYPTO_DATA_URL ,API_ERROR} from '../constantsVar';
import axios from "axios"

export const getCryptoData = () => {
    return async function (dispatch, getState) {
        try {
            const currencyData = await axios.get(GET_CRYPTO_DATA_URL);
            dispatch({ type: FETCH_CRYPTO_CURRENCY, payload: currencyData });
        } catch (e) {
            dispatch({ type: API_ERROR, errorMessage: "Function currently unavailable, please try again" });
        }
    };
};

export const getCryptoDataForCurrency = (currencyCode) => {
    return async function (dispatch, getState) {
        try {
            const currencyData = await axios.get(GET_CRYPTO_DATA_URL + "?q=" + currencyCode);
            dispatch({ type: FETCH_CRYPTO_BY_CURRENCY, payload: currencyData, currencyCode: currencyCode });
        } catch (e) {
            dispatch({ type: API_ERROR, errorMessage: "Function currently unavailable, please try again" });
        }
    };
};

export const getCryptoCurrencyList = () => {
    return async function (dispatch, getState) {
        try {
            const currencyList = await axios.get(GET_CURRENCY_LIST_URL);
            dispatch({ type: FETCH_CURRENCY, payload: currencyList });
        } catch (e) {
            dispatch({ type: API_ERROR, errorMessage: "Function currently unavailable, please try again" });
        }
    };
};