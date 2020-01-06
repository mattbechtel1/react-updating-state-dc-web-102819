import React, { Component } from "react";

// Code ClickityClick Component Here

class ClickityClick extends Component {
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false,
            count: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
            hasBeenClicked: true,
            count: previousState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 
                'not'} been clicked!</p>
                <h5>{this.state.count} clicks!</h5>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick