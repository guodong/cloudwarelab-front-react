import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showModal: false}
  }

  close() {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a href="../" className="navbar-brand">CloudwareLab</a>
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar-main">
              <ul className="nav navbar-nav">

                <li>
                  <a href="#">云件服务</a>
                </li>
                <li>
                  <a href="#">使用帮助</a>
                </li>

              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={this.open}>登 录</a></li>
                <li><a href="#" onClick={this.open}>注 册</a></li>
              </ul>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="jumbotron">
            <h1>Jumbotron</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
              content or information.</p>
            <p><a className="btn btn-primary btn-lg">Learn more</a></p>
          </div>
        </div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <footer>
          <strong>Copyright &copy; 2017 <a href="#">Cloudware Lab</a>.</strong> All rights reserved.
        </footer>
      </div>
    )
  }
}