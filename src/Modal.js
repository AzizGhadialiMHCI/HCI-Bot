import React, { Component } from 'react'
import ReactModal from 'react-modal';
import Resource from './Resource.js'

class Modal extends Component {
    render(){
        
        return (
            <ReactModal isOpen={this.props.modalStatus} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                },content: {
                    display: 'flex',
                    flexDirection: 'column',
                    // position: "absolute",
                    // top: '50%',
                    // left: '50%',
                    // right: 'auto',
                    // bottom: 'auto',
                    // marginRight: '-50%',
                    // transform: 'translate(-50%, -50%)',
                    border: '1px solid #333',
                    background: '#333',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '40px',
                    
                  }}}>
            {this.props.content}
            </ReactModal>
        )
    }
    
}

export default Modal