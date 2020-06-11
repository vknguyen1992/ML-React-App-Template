import React, { Component } from 'react';
import { installViewer } from '@ohif/viewer';
import Container from 'react-bootstrap/Container';

// const ohifViewerConfig = window.config;
const ohifViewerConfig = {
  // default: '/'
  routerBasename: '/',
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    ],
  },
};
const containerId = 'ohif';
const componentRenderedOrUpdatedCallback = function() {
  console.log('OHIF Viewer rendered/updated');
};

class MRIViewer extends Component {

  componentDidMount() {
    installViewer(
       ohifViewerConfig,
       containerId,
       componentRenderedOrUpdatedCallback
     );
 }

  render() {
    return (
      <Container>
        <div className="MRI Viewer">
            MRI Viewer Page
        </div>
        <div id={containerId}/>
      </Container>
    );
  }
}

export default MRIViewer;