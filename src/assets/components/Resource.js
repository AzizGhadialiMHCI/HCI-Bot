import React, { Component } from 'react'
 
// Component for a paper resource that has a title, description, and a link
class Resource extends Component {
    render(){
        return (
            <div className="resource">
                <h3 className='resourceTitle'>{this.props.title}</h3>
                <p className = "resourceInfo">{this.props.description}</p>
                <a href={this.props.link} className='resourceButton' target="_blank">View Paper</a>
            </div>
        
        )
    }
    
}

export default Resource