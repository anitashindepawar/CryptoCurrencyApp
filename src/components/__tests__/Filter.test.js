import Enzyme, { shallow, mount } from 'enzyme';
import React from "React";
import Adapter from 'enzyme-adapter-react-16';
import Filter from '../Filter';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing Filter component", () => {

    it("Test snapshot and without props", () => {
        const wrapper = shallow(<Filter />);
        expect(wrapper).toMatchSnapshot();
      
        expect(wrapper.find(".row")).toHaveLength(1);
        expect(wrapper.find("p").text()).toEqual("Filter");
        expect(wrapper.find("option")).toHaveLength(1);
        expect(wrapper.find("option").text()).toEqual("All");

    })

    it("Test snapshot and with props", () => {
       const currencyCodeList = ["BTC","ETC"]
       const getDetailsByCurrency = jest.fn();
       const resetData = jest.fn();
       const handleFilter = jest.fn();

        const wrapper = shallow(<Filter currencyCodeList={currencyCodeList} getDetailsByCurrency={getDetailsByCurrency}
            resetData={resetData} handleFilter={handleFilter} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("option")).toHaveLength(3);

        expect(wrapper.find("#filterBtn")).toHaveLength(1);
        expect(wrapper.find("#filterBtn").text()).toEqual("Filter");

        wrapper.find('#filterBtn').simulate('click');
        expect(getDetailsByCurrency).toHaveBeenCalled();

        expect(wrapper.find("#resetBtn")).toHaveLength(1);
        expect(wrapper.find("#resetBtn").text()).toEqual("Reset");
        wrapper.find('#resetBtn').simulate('click');
        expect(resetData).toHaveBeenCalled();

    })

})