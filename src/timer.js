import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isOn: false
        }
    }
    Start = () => {
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1

            })
        }, 1000)
        this.setState({
            isOn: true
        })
    }
    Rest = () => {
        clearInterval(this.interval)
        this.setState({
            time: 0
        })
    }
    Stop = () => {
        clearInterval(this.interval)
        this.setState({
            isOn: false
        })
    }
    compteur(num) {

        var a = num / 3600


        var h = Math.floor(a)
        var m = Math.floor((a - h) * 60)
        var s = Math.round((((a - h) * 60) - m) * 60)

        return (
            <div>
                <span>{String(h).padStart(2, 0)} : {String(m).padStart(2, 0)} : {String(s).padStart(2, 0)} </span>
            </div>
        )

    }

    state = {}
    render() {
        return (
            <div className="time-hour" >
                <div className="time-app">
                    <div className="app-time">
                        <span>{this.compteur(this.state.time)}</span>

                    </div>
                    <div className="app-text">
                        <div className="item1">Hours</div>
                        <div className="item2">Minutes</div>
                        <div className="item3">Seconds</div>
                    </div>
                    <div className="btn">
                        <button className="btn1" onClick={!this.state.isOn ? this.Start : this.Stop}>Start</button>
                        <button className="btn2" onClick={this.Rest}>Reset</button>
                    </div>


                </div>

            </div >


        );

    }
}
export default Timer;