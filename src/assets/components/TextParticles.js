import React, { Component } from 'react'
import Particles from "react-tsparticles";

/* Creates a canvas of particles based on the loaded 
SVG with a particular canvas size, scale, and x-y positions */

class TextParticles extends Component{

    render(){
        return (
          // Creates the particle anmation from svg
          <Particles 
            height={this.props.height}
            width={this.props.width}
            options={{
            background: {
              color: ""
            },
            detectRetina: false,
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble"
                },
                resize: true
              },
              modes: {
                bubble: {
                  color: "",
                  distance: 30,
                  duration: 2,
                  opacity: 1,
                  size: 5,
                  speed: 5
                }
              }
            },
            particles: {
              color: {
                value: ["#ff124f", "#ff00a0", "#fe75fe"]
              },
              links: {
                blink: false,
                color: "#D3D3D3",
                consent: true,
                distance: 5,
                enable: true,
                opacity: 1,
                width: 1
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: .3,
                straight: false
              },
              number: {
                density: {
                  enable: false,
                  area: 1000
                },
                limit: 0,
                value: 2000
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.3,
                  speed: 1,
                  sync: false
                },
                random: { enable: true, minimumValue: 0.3 },
                value: 1
              },
              shape: {
                type: "circle"
              },
              size: {
                value: 1.2
              }
            },
            polygon: {
              move: {
                // change movement
                radius: .5
              },
              inlineArrangement: "equidistant",
              scale: this.props.scale,
              type: "inline",
              position: {
                x: this.props.xValue,
                y: this.props.yValue
              },
              data: {
                path:
                  this.props.svg,
                size: {
                  width: 200.7,
                  height: 123.3
                }
              }
            }
        }}
      />
        );
    };
    
}

export default TextParticles