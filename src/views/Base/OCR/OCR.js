import React from 'react';
import FileBase64 from 'react-file-base64';
import {Card, CardBody, Alert, Col, Row} from 'reactstrap';
import Axios from "axios";

class OCR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      files: [],
      loading:false
    };
  }

  ocrEIDFront = async (file) => {
    const config = {
      headers: {
        'Authorization': "Bearer OTQzNDYyOTA5MjgwNDgwMGIzOWQyMGExMWUwNjgzYTE6NDhlNzA2MGUtZWYxNS00ZDI4LTg2ZGQtNDQyZmM2Y2UwNjg4"
      }
    };

    let res = await Axios.post(
      'https://api.microblink.com/recognize/execute',
      {
        "recognizers": [
          "MRTD",
          "UAE_ID_FRONT",
          "UAE_ID_BACK"
        ],
        "imageBase64": file
      },
      config);
    let {data} = await res.data;
    this.setState({results: data, loading: true});
  };


  getFiles(files) {
    this.ocrEIDFront(files[0].base64);
    this.setState({files: files})
  }

  render() {
    return (
      <div>
        <h1 className="text-left">Macroblik API OCR Demo</h1>
        <Row>
          <div className="text-center mt-25">
            <FileBase64
              multiple={true}
              onDone={this.getFiles.bind(this)}/>
          </div>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="text-center">
              {this.state.files.map((file, i) => {
                return <img style={{width: "500px", height: "700px"}} key={i} src={file.base64}/>
              })}
              <img src=""/>
            </div>
          </Col>
          <Col xs={6}>
            {this.state.files.length != 0 && this.state.results.length !=0 && this.state.loading ?
              this.state.results.map((data, index) => {
                return <div key={index}>
                  <h3 className="text-center mt-25">Results</h3>
                  <div className="pre-container">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                  </div>
                </div>
              })
              :
               <div>
                 Please waiting for the OCR, please don't complain since you didn't pay for the demo.......
               </div>
            }
          </Col>
        </Row>

      </div>
    )
  }

}

export default OCR;
