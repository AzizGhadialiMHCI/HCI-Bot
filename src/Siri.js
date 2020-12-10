import React, { Component } from 'react'
import Siriwave from 'react-siriwave';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



class Siri extends Component {
    render(){

        return (
            <Siriwave speed=".4" style="ios9" amplitude="1"/>
        )
    }
    
}

export default Siri