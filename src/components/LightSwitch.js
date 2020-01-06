import React, { Component } from "react";

// Code Component Here

class LightSwitch extends Component {
    constructor() {
        super()

        this.state = {
            toggled: false,
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
            toggled: !previousState.toggled,
            }
        })
    }

    render() {
        return (
            <div>
                <p>I am {this.state.toggled ? 'ON' : 
                'OFF'}!</p>
                <button onClick={this.handleClick}>Switch me!</button>
            </div>
        )
    }
}

export default LightSwitch