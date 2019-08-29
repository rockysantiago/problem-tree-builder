import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { Button } from 'semantic-ui-react';

import Tree from 'components/Tree';

class GenerateTree extends Component {
  printDocument = async () => {
    const canvas = await html2canvas(document.querySelector('#capture'));
    const png = canvas.toDataURL('image/png');
    saveAs(png, 'tree.png');
  };

  render() {
    const { topic } = this.props;

    return (
      <>
        <div id="capture">
          <Tree data={topic} />
        </div>
        <Button onClick={this.printDocument}>Export File</Button>
      </>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(GenerateTree);
