import React, { Component } from 'react';
import { withRouter } from 'react-router';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Selection from './Selection';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  componentDidMount() {
    if (this.props.location.pathname !== '/') {
      this.setState({ value: this.props.location.pathname });
    }
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    // shift over for vertical lines
    ctx.translate(0.5, 0.5);
    // shift over to center
    ctx.translate(30, 0);
    ctx.lineWidth = 5;
    ctx.lineJoin = 'miter';
    ctx.lineCap = 'round';
    // cup
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(160, 50);
    ctx.lineTo(150, 200);
    ctx.lineTo(60, 200);
    ctx.lineTo(50, 50);
    ctx.stroke();

    // handle
    ctx.moveTo(160, 50);
    ctx.quadraticCurveTo(250, 80, 154, 150);
    ctx.stroke();

    // liquid
    ctx.beginPath();
    ctx.moveTo(54, 100);
    ctx.bezierCurveTo(80, 50, 120, 150, 155, 100);
    ctx.lineTo(150, 200);
    ctx.lineTo(60, 200);
    ctx.closePath();
    ctx.fill();
  }

  handleChange = (event, index, value) => {
    if (value) {
      this.setState({ value });
      this.props.history.push(value);
    } else {
      this.setState({ value: null });
      this.props.history.push('/');
    }
  };

  render() {
    const selection = this.props.types.find(
      type => type.url === this.state.value
    );
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2>What café will you make today? </h2>
        <canvas ref="canvas" width={300} height={300} />
        <SelectField
          floatingLabelText="Go wild"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          {this.props.types.map(type => (
            <MenuItem key={type.url} value={type.url} primaryText={type.name} />
          ))}
        </SelectField>
        {this.state.value && <Selection selection={selection} />}
      </div>
    );
  }
}

export default withRouter(Main);
