import React, { Component } from 'react';

export default class ColorSelector extends Component {

  handleClick = (event) => {
    //this.props.setSelectedColor(str)
    console.log(event.target.style.backgroundColor)
    this.props.handleChooseColor(event.target.style.backgroundColor)
    // first, what is the color
    // second, pass the color into the function provided by props
    // (in this case, it's just called onClick)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div hexstr = {str} onClick={this.handleClick} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
