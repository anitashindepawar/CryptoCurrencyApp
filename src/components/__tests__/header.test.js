import Enzyme, { shallow, mount } from 'enzyme';
import React from "React";
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing Header component", () => {

    it("Test form and snapshot", () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".navbar")).toHaveLength(1);
        expect(wrapper.find(".container")).toHaveLength(1);
        expect(wrapper.find("a")).toHaveLength(1);

    })

})