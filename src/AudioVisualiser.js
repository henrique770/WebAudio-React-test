import React, { Component } from 'react';

class AudioVisualiser extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;

    const context = canvas.getContext('2d');

    context.clearRect(0, 0, width, height);
    var barWidth = 200;
    var barHeight;
    var x = 0;
    // context.lineWidth = 2;
    context.fillStyle = '#333';
    context.fillRect(0, 0, width, height);

    context.beginPath();

    for (var i = 0; i < audioData.length; i++) {
      barHeight = audioData[i] / 2;

      context.fillStyle = 'rgba(8,' + (barHeight + 30) + ',226,1)';
      context.fillRect(x, height - barHeight / 2, barWidth, barHeight);

      x = barWidth;
    }
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
    return <canvas width='70' height='70' ref={this.canvas} />;
  }
}

export default AudioVisualiser;
