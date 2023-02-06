// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0

import { Component } from "react"

// }
class FeedbackPage extends Component {
    state = {
            good: 0,
            neutral: 0,   
            bad: 0   
        }

    CountGood = () => {
        console.log('good');
        console.log(this);
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    }
    
    CountNeutral = () => {
        this.setState(evt => ({
            neutral: evt.neutral + 1,
        }));
    }
    
    CountBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }
    

    render() {
        return (<div>
        <div>
        <h2>Please leave feedback</h2>
                <button type="button" onClick={this.CountGood}>good</button>
                <button type="button" onClick={this.CountNeutral}>neutral</button>
                <button type="button" onClick={this.CountBad}>bad</button>
        </div>
            <div>
        <h2>STATISTICS</h2>
                <p>good:{this.state.good}</p>
        <p>neutral:{this.state.neutral}</p>
        <p>bad:{this.state.bad}</p>
        <p>TOTAL:</p>
        <p>positive feedback:</p>
            </div>
        </div>
        )
    }
}

export default FeedbackPage