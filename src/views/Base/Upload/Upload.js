import React, {Component} from 'react';
import Dropzone from '../Dropzone/Dropzone';
import './Upload.css';
import Progress from '../Progress/Progress';
import {Redirect} from 'react-router';
import axios, {post} from 'axios';
import CompanyInformation from '../../Base/Forms/Forms';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      preview: false,
      ocrData: {}
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
    this.renderPreviewState = this.renderPreviewState.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }


  renderPreviewState() {
    this.setState({
      files: [], successfullUploaded: false
    });
    return <Redirect push to="/base/form"/>;

  }

  renderActions() {
    if (this.state.preview) {
      window.sessionStorage.setItem('previewData', JSON.stringify(this.state.ocrData.data));
      // window.sessionStorage.setItem('file_name', this.state.ocrData.file);
      return <Redirect to="/base/form"/>;
    }
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({files: [], successfullUploaded: false, preview: true})
          }
        >
          Preview Data
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}>
          Upload
        </button>
      );
    }
  }


  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0}/>
          <img
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === 'done' ? 0.5 : 0
            }}
          />
        </div>
      )
    }
  }

  fileUpload(file) {
    const url = 'http://3.17.205.44:4000/upload';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    return post(url, formData, config)
  }

  sendRequest(file) {
    this.fileUpload(file).then((response) => {
      window.sessionStorage.setItem('file_name', URL.createObjectURL(file));
      this.setState({ocrData: response.data});
      this.setState({successfullUploaded: true, uploading: false});
    });
  }

  async uploadFiles() {
    this.setState({uploadProgress: {}, uploading: true});
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({successfullUploaded: true, uploading: false});
    }
  }

  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content text-center">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}/>
          </div>
          <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="UploadRow">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
      </div>
    )
  }
}


export default Upload;
