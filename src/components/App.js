import React, { Component } from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
class App extends Component {
    constructor(props) {
        super(props);
        let orderName = ["T.H IS CEO", "DEFT IS MY LIFE", "HI I'M ADC"];
        let orderIntro = ["I don't know all but I can learn all",
            "Always look for good solutions to the problem",
            "Work with the heart"];

        this.state = {
            widthProcessBar: 0,
            orderBackground: 26,
            idavatar: 1,
            indexName: 0,
            indexIntro: 0,
            name: orderName[0],
            intro: orderIntro[0],

        }
        setInterval(() => {
            let curW = this.state.widthProcessBar;

            if (curW == 100) {
                curW = 0;
                let stepcurA = this.state.idavatar % 3 + 1;
                let stepcurB = (this.state.orderBackground + 1);
                if (stepcurB == 29)
                    stepcurB = 26;
                let stepCurN = (this.state.indexName + 1) % 3;
                let stepcurI = (this.state.indexIntro + 1) % 3;

                this.setState({
                    idavatar: stepcurA,
                    indexName: stepCurN,
                    indexIntro: stepcurI,
                    name: orderName[stepCurN],
                    intro: orderIntro[stepcurI],
                    orderBackground: stepcurB,
                });

            }
            this.setState({ widthProcessBar: (curW + 1) });
        }, 15)
    }
    render() {
        let urlBackground = 'url(' + './image/background/' + this.state.orderBackground + '.jpg' + ')';
        return (
            <div className="content"
                style={{ backgroundImage: urlBackground }}>
                <div >
                    <Slider
                        width={this.state.widthProcessBar} />
                    <Navbar
                        name={this.state.name}
                        intro={this.state.intro}
                        idavatar={this.state.idavatar}
                    />
                </div>

                <div >
                    <Header />
                </div>
                <Footer 
                />
            </div>
        )
    }
}

export default App