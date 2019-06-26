import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={this.handleClick} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleClick = (event) => {
    this.props.callBackFromMatrix(event.target.style.backgroundColor);
    //console.log(event.target.style.backgroundColor)
  }


  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
