import React, { Component } from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import Header from './Header'
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widthProcessBar: 0,

        }
        setInterval(() => {
            let curW = this.state.widthProcessBar;
            if (curW == 100) {
                // your code
                curW = 0;
            }
            this.setState({ widthProcessBar: (curW + 1) });
        }, 15)
    }
    render() {
        const { mySatate } = this.state;
        return (
            <div className="content">
                <Slider
                    width={this.state.widthProcessBar} />
                <div className="container">
                    <Navbar
                    />
                    <Header />
                </div>

            </div>
        )
    }
}

export default App