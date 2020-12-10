import React, { Component } from 'react'
// import ReactTypingEffect from 'react-typing-effect';
// import Siriwave from 'react-siriwave';
import { Snow } from 'react-snow-particle'



class BackgroundParticles extends Component {
    render(){
        return (
            <Snow backgroundImage="https://firebasestorage.googleapis.com/v0/b/pinboard-25.appspot.com/o/ezgif.com-resize.gif?alt=media&token=12dae8c9-00d1-4fc8-9fff-5f1e8ba3e01d" />
            // <ReactTypingEffect staticText={["Hello."]} text={["Hello."]}/>
            // <Siriwave />
            // <div id="siri-container"></div>
        )
    }
    
}

export default TWriter