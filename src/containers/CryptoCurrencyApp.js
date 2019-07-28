import React from 'react';
import { connect } from 'react-redux';
import { getCryptoData, getCryptoDataForCurrency, getCryptoCurrencyList } from '../actions';
import { formProfitData } from '../selector';
import CryptoDetails from '../components/CryptoDetails';
import Filter from '../components/Filter';
/*
const CryptoCurrencyApp = () =>{
return(<div>Inside CryptoCurrencyApp</div>);
};
*/

export class CryptoCurrencyApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyCode: "All"
        }
    }
    componentDidMount() {
        this.props.getCryptoData();
        this.props.getCryptoCurrencyList();
    };

    getDetailsByCurrency = () => {

        this.state.currencyCode === "All" ? this.props.getCryptoData() : this.props.getCryptoDataForCurrency(this.state.currencyCode);
    };

    resetData = () => {

        this.props.getCryptoData();
        this.setState({
            currencyCode: "All"
        })
    };
    handleFilter = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    render() {
        const { currencyCodeList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">

                    </div>

                    <div className="col-md-9">
                        <h2><p className="font-weight-bold marginTop">Crypto Currency Profit Details</p></h2>

                       {this.props.isError &&  <div class="alert alert-danger" role="alert">
                            {this.props.errorMessage}
                        </div>
                       }
                        <Filter currencyCodeList={currencyCodeList}
                            getDetailsByCurrency={this.getDetailsByCurrency}
                            resetData={this.resetData}
                            handleFilter={this.handleFilter}
                            filterValue={this.state.currencyCode}
                        />



                        <CryptoDetails cryptoProfitList={this.props.cryptoProfitList} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoProfitList: state.cryptoState.data && formProfitData(state.cryptoState.data),
        currencyCodeList: state.currencyState.data,
        isError: state.cryptoState.isError,
        errorMessage: state.cryptoState.errorMessage,
    };
};

export default connect(mapStateToProps, { getCryptoData, getCryptoDataForCurrency, getCryptoCurrencyList })(CryptoCurrencyApp);