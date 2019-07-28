import Enzyme, { shallow, mount } from 'enzyme';
import React from "React";
import Adapter from 'enzyme-adapter-react-16';
import {CryptoCurrencyApp} from '../CryptoCurrencyApp';
import {store} from "./../../testData/mockStore";
import { Provider } from 'react-redux';
import Filter from '../../components/Filter';
import CryptoDetails from '../../components/CryptoDetails';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing CryptoDetails component", () => {

    it("Test snapshot without props", () => {
        const list = [{}]
        const wrapper = shallow(
           
                <CryptoCurrencyApp 
                getCryptoData = {jest.fn()}
                getCryptoCurrencyList = {jest.fn()}
                getCryptoDataForCurrency = {jest.fn()}
                currencyCodeList = {jest.fn()}
                cryptoProfitList = {list}
                />
            );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".row")).toHaveLength(1);
        expect(wrapper.find(".container")).toHaveLength(1);
        expect(wrapper.find(Filter)).toHaveLength(1);
        expect(wrapper.find(CryptoDetails)).toHaveLength(1);
    })

})