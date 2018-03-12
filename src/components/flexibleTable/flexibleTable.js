

import React, { Component } from 'react';
import './flexibleTable.css';
import data from '../../data/numbers.json';

class FlexibleTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      tableLength: 1
    }
  }

  createTableHeader(){
      let tableColumns = [];
      for(let i = 0; i<this.state.tableLength; i++){
        tableColumns.push(<div key={i} className="column one animated bounceInRight"><span className="box0">{data.numbers[i]}</span></div>);
      }
      return tableColumns;
  }

  createTableRows(){
    let tableColumns = [];
    for(let i = 0; i<this.state.tableLength; i++){
      tableColumns.push(<div key={i} className="column one animated bounceInRight"><span className="box0 black">  </span></div>);
    }
    return tableColumns;
  }

  createTable(){
    let table = [];
    table.push(<div className="columns is-mobile">
                {this.createTableHeader()}
              </div>);
    for(let i = 0; i< 20; i++){
      table.push(<div className="columns is-mobile">
                  {this.createTableRows()}
                </div>)
    }
    return table;
  }


  incrementColumn(){
    if(this.state.tableLength < 11){
      let newTableLength = this.state.tableLength + 1;
      this.setState({
        tableLength: newTableLength
      });
    }
  }

  decrementColumn(){
    if(this.state.tableLength > 1){
      let newTableLength = this.state.tableLength - 1;
      this.setState({
        tableLength: newTableLength
      });
    }
  }


  render() {
    return (
      <div>
      <div className="box table">
        <div className="columns">
        <div className="column is-1">
        <a className="button is-info is-outlined" onClick={(e)=>{this.incrementColumn()}}><i className="fas fa-plus"></i></a>
        </div>
        <div className="column is-1">
        <a className="button is-info is-outlined" onClick={(e)=>{this.decrementColumn()}}><i className="fas fa-minus"></i></a>
        </div>
        </div>
      </div>



      <div className="table box">

        {this.createTable()}

      </div>
      </div>
    )
  }
}

export default FlexibleTable;
