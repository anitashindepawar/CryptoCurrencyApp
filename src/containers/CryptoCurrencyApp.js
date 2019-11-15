import React from 'react';
import { connect } from 'react-redux';
import { getCryptoData, getCryptoDataForCurrency, getCryptoCurrencyList } from '../actions';
import { formProfitData } from '../selector';
import CryptoDetails from '../components/CryptoDetails';
import Filter from '../components/Filter';
import { ALL_CURRENCY_CODE, APP_TITLE } from '../constantsVar';

export class CryptoCurrencyApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyCode: ALL_CURRENCY_CODE
        }
    }

    componentDidMount() {
        this.props.getCryptoData();
        this.props.getCryptoCurrencyList();
    };

    getDetailsByCurrency = (currencyCode) => {
        console.log('inside get',currencyCode);
        currencyCode === ALL_CURRENCY_CODE ?
        this.props.getCryptoData() :
        this.props.getCryptoDataForCurrency(currencyCode);
    };

    resetData = () => {
        this.props.getCryptoData();
        this.setState({
            currencyCode: ALL_CURRENCY_CODE
        })
    };

    handleFilter = (e) => {
        console.log('hande',e.target.value);
        this.setState(()=>{ return {currencyCode: e.target.value}});
        this.getDetailsByCurrency(e.target.value);
    };

    render() {
        const { currencyCodeList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">

                    </div>

                    <div className="col-md-12">
                        <h2><p className="font-weight-bold marginTop">{APP_TITLE}</p></h2>

                       {this.props.isError &&  <div class="alert alert-danger" role="alert">
                            {this.props.errorMessage}
                        </div>
                       }
                        <Filter currencyCodeList={currencyCodeList}
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