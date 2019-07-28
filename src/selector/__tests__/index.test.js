
import { formProfitData, getFormattedTime } from ".."

describe('Testing selectors', () => {
    it('Test formProfitData', () => {

        const data = [{
            currency: "BTC",
            date: "20180507",
            quotes: [
                { time: "0915", price: "34.98" },
                { time: "1045", price: "36.13" },
                { time: "1230", price: "37.01" },
            ]
        }]
        const expectedData = [{"currency": "BTC", "date": "20180507", "maxPrice": "37.01", "maxTime": "12:30PM", "minPrice": "34.98", "minTime": "09:15AM", "profit": "2.03", "quotes": [{"price": 
        "34.98", "time": "0915"}, {"price": "36.13", "time": "1045"}, {"price": "37.01", "time": "1230"}]}]

        const outCome = formProfitData(data);

        expect(outCome).toEqual(expectedData);

    });

    it('Test getFormattedTime for AM', () => {
        const data = "0915";
        const expectedData = "09:15AM";
        const outCome = getFormattedTime(data);
        expect(outCome).toEqual(expectedData);
    });

    it('Test getFormattedTime for PM', () => {
        const data = "1715";
        const expectedData = "5:15PM";
        const outCome = getFormattedTime(data);
        expect(outCome).toEqual(expectedData);
    });
});
