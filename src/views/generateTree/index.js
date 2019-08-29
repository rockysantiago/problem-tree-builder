import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { Button } from 'semantic-ui-react';

import Tree from 'components/Tree';

import { Wrapper, Controls } from './style';

class GenerateTree extends Component {
  printDocument = async () => {
    const canvas = await html2canvas(document.querySelector('#capture'));
    const png = canvas.toDataURL('image/png');
    saveAs(png, 'tree.png');
  };

  render() {
    return (
      <Wrapper>
        <div id="capture">
          <Tree forExport />
        </div>
        <Controls left>
          <Button fluid onClick={() => navigate('/compose')}>
            Back to Editing
          </Button>
        </Controls>
        <Controls right>
          <Button fluid onClick={this.printDocument}>
            Export File
          </Button>
        </Controls>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(GenerateTree);
