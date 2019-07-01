import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: null
    }
  }

  handleChooseColor = (hexColor = null) => {
    this.setState({
      selectedColor: hexColor
    })
  }

  // accessSelectedColor = () => {
  //   return this.state.selectedColor
  // }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell getSelectedColor={this.state.selectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleChooseColor={this.handleChooseColor} selectedColor={this.state.selectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
