import { Component } from "react";
import { StatPage } from "components/statistics/Statistics";

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
    
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

    render() {
        const countTotalFeedback = this.countTotalFeedback();
        const countPositiveFeedback = this.countPositiveFeedback();
        return (<div>
        <div>
        <h2>Please leave feedback</h2>
                <button type="button" onClick={this.CountGood}>good</button>
                <button type="button" onClick={this.CountNeutral}>neutral</button>
                <button type="button" onClick={this.CountBad}>bad</button>
            </div>
            
           
            <div>
                {countTotalFeedback > 0 ? (
        <> <StatPage
                onGood={this.state.good}
                onNeutral={this.state.neutral}
                onBad={this.state.good}
                onTotal={countTotalFeedback}
                onPositive={countPositiveFeedback} /></>) : (<p>There is no feedback</p>)}
            </div>
        </div>
        )
    }
}

export default FeedbackPage