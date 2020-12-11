import React, { Component } from 'react'

class Instructions extends Component {

    state = {showing: true}
    render(){
        const { showing } = this.state;

        return (
            <div id="instructions" style={{ display: (showing ? 'flex' : 'none') }}>
                 <div className="instructionBlock">
                    <h3 className='resourceTitle'>Welcome to HCI Bot</h3>
                    <p className = "resourceInfo">HCI bot is a voice based tool focused on helping you find 
                    new popular papers related to the design of emerging technologies. To use HCI Bot click
                    start exploring and use the canned responses to select a topic. When you are done you can 
                    hit the stop listening button</p>
                    <button onClick={() => this.setState({ showing: !showing })}>Ok, I got it!</button>
                </div>
            </div>
           
        
        )
    }
    
}

export default Instructions