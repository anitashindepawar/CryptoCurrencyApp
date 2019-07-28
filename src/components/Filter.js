import React from "react";


export default function Filter({ currencyCodeList, getDetailsByCurrency, resetData, handleFilter,filterValue }) {

    return (
        <>
            <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Filter
                    </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <div className="row filterPadding">
                        <label>Select Currency: </label>
                         <select className="custom-select custom-select-lg mb-3" 
                         style={{ marginRight: "30px" }} 
                         onChange={handleFilter} id="currencyCode" value={filterValue}>
                            <option key='All' value='All'>All</option>
                            {currencyCodeList && currencyCodeList.map(code => {
                                return <option key={code} value={code}>{code}</option>
                            })}
                        </select>

                        <button id="filterBtn" className="btn btn-primary" style={{ marginRight: "30px" }} type="submit" onClick={getDetailsByCurrency}>Filter</button>
                        <button id="resetBtn" className="btn btn-primary" type="button" onClick={resetData}>Reset</button>
                    </div>
                </div>
            </div>
        </>);
}       