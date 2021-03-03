import React, { Component } from "react";
import { connect } from 'react-redux';

import { countPlus , countMinus} from  '../actions';

class App extends React.Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
          <p>現在の数字は {props.val} です</p>
          <button onClick={props.countPlus}>
            + 1
          </button>
          <button onClick={props.countMinus}>
            - 1
          </button>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state =>({val: state.counter.val})
const mapDispatchToProps = dispatch =>({
  countPlus:()=>dispatch(countPlus()),
  countMinus:()=>dispatch(countMinus())
}) 
export default connect (mapStateToProps,mapDispatchToProps)(App) 