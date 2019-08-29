import React, { Component } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

class GenerateTree extends Component {
  printDocument = async () => {
    const canvas = await html2canvas(document.querySelector('#capture'));
    const png = canvas.toDataURL('image/png');
    saveAs(png, 'tree.png');
  };

  render() {
    return <div id="capture">GenerateTree</div>;
  }
}

export default GenerateTree;
