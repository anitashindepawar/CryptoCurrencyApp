import Enzyme, { shallow, mount } from 'enzyme';
import React from "React";
import Adapter from 'enzyme-adapter-react-16';
import CryptoDetails from '../CryptoDetails';
import { notDeepEqual } from 'assert';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing CryptoDetails component", () => {

    it("Test snapshot without props", () => {
        const wrapper = shallow(<CryptoDetails />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".row")).toHaveLength(1);
        expect(wrapper.find("table")).toHaveLength(0);
        expect(wrapper.find("#rowData").text()).toEqual("No data to display");

    })

    it("Test snapshot with props", () => {
        const data = [{
            currency: "BTC",
            date: "20180507",
            maxPrice: "37.01",
            maxTime: "12:30PM",
            minPrice: "34.98",
            minTime: "09:15AM",
            profit: "2.03"
        }
        ]

        const wrapper = shallow(<CryptoDetails cryptoProfitList = {data}/>);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find("table")).toHaveLength(1);
        expect(wrapper.find("#profit").text()).toEqual("Profit: $2.03");
        expect(wrapper.find("#minTime").text()).toEqual("09:15AM");
        expect(wrapper.find("#minPrice").text()).toEqual("$34.98");
        expect(wrapper.find("#maxTime").text()).toEqual("12:30PM");
        expect(wrapper.find("#maxPrice").text()).toEqual("$37.01");
        expect(wrapper.find("#currency").text()).toEqual("BTC");

    })

})