import React from 'react';
import Moment from 'react-moment';

export default function CryptoDetails({ cryptoProfitList }) {
  return (
    <>
     
      <div className="row marginTop" id="rowData">
        {cryptoProfitList != null && cryptoProfitList != undefined ? cryptoProfitList.map(cryptoProfitData => {
          return (
            <div className="col-md-4" key={cryptoProfitData.currency}>
              <table id="dt-select" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                <thead>
                  <tr><th colSpan="2" id="date"><Moment format="DD-MMM-YY">{cryptoProfitData.date}</Moment></th></tr>
                  <tr><th colSpan="2" id="currency">{cryptoProfitData.currency}</th></tr>
                  <tr>
                    <th>Buy</th>
                    <th>Sell</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td id="minPrice">${cryptoProfitData.minPrice}</td>
                    <td id="maxPrice">${cryptoProfitData.maxPrice}</td></tr>
                  <tr><td id="minTime">{cryptoProfitData.minTime}</td>
                    <td id="maxTime">{cryptoProfitData.maxTime}</td></tr>
                  <tr><td colSpan="2" id="profit">Profit: ${cryptoProfitData.profit}</td></tr>
                </tbody>
              </table>

            </div>
          );
        }):"No data to display"
        }
      </div>
    </>
  );
};