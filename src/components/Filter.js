import React from 'react';
import { BTN_SHOW_FILTER, SELECT_CURRENCY, BTN_FILTER, BTN_RESET, ALL_CURRENCY_CODE } from '../constantsVar';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '40%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropDownStyle:{
    width: '100%'
  }
}));

export default function Filter({ currencyCodeList, handleFilter, filterValue }) {
  const classes = useStyles();
  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Select Currency Code</InputLabel>
        <Select
          id="currencyCode"
          value={filterValue}
          onChange={handleFilter}
          className={classes.dropDownStyle}
        >
          <MenuItem key='All' value='All'>{ALL_CURRENCY_CODE}</MenuItem>
          {currencyCodeList && currencyCodeList.map(code => {
            return <MenuItem key={code} value={code}>{code}</MenuItem>
          })}

        </Select>
      </FormControl>
      {/* <p>
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          {BTN_SHOW_FILTER}
        </a>
      </p>
      <Grid className="collapse" id="collapseExample">
        <Grid className="card card-body">
          <Grid className="row filterPadding">
            <label>{SELECT_CURRENCY}</label>
            <select className="custom-select custom-select-lg mb-3"
              style={{ marginRight: "30px" }}
              onChange={handleFilter} id="currencyCode" value={filterValue}>
              <option key='All' value='All'>{ALL_CURRENCY_CODE}</option>
              {currencyCodeList && currencyCodeList.map(code => {
                return <option key={code} value={code}>{code}</option>
              })}
            </select>

            <button id="filterBtn" className="btn btn-primary" style={{ marginRight: "30px" }} type="submit" onClick={getDetailsByCurrency}>{BTN_FILTER}</button>
            <button id="resetBtn" className="btn btn-primary" type="button" onClick={resetData}>{BTN_RESET}</button>
          </Grid>
        </Grid>
      </Grid> */}
    </>);
}       