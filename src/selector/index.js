

export const formProfitData = (cryptoData) => {
    const filteredData = cryptoData.map(data => {
        /** Find the max price from the quotes*/
        const maxQuote = data.quotes.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
        /** Find the quotes which are before the max quote*/
        const filteredArr = data.quotes.filter(dt => dt.time < maxQuote.time);
        /** Find the minimum price from the above filtered quotes */
        const minQuote = filteredArr.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
        /* Set required values in data object to pass on*/
        
        return {
            ...data, "maxPrice": maxQuote.price, "maxTime":getFormattedTime(maxQuote.time), 
            "minTime":getFormattedTime(minQuote.time),"minPrice": minQuote.price,
             "profit": (maxQuote.price - minQuote.price).toFixed(2)
        }

    })

    return filteredData;
};

export const getFormattedTime=(time)=>{
    let formattedTime = time;
    if(time.slice(0,2) > 12){
        formattedTime = (time.slice(0,2)-12)+':'+time.slice(2,4)+'PM';
    }else if(time.slice(0,2)==12){
        formattedTime = 12 +':'+time.slice(2,4)+'PM';
    }else{
        formattedTime = time.slice(0,2)+':'+time.slice(2,4)+'AM'; 
    }
    return formattedTime;
};

