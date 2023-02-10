import { Component } from "react";
import { StatPage } from "./statistics/Statistics";
import FeedbackOptions from "./feedback/Feedback";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         flexDirection: 'column'
//       }}
//     >
//       <FeedbackPage />
      
      
//     </div>
//   );
// };

class App extends Component {
    
      
        
    state = {
            good: 0,
            neutral: 0,   
            bad: 0   
  }
  
  HandleClickButton = e => {
    const option = e.target.name;

    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

    // CountGood = () => {
    //     console.log('good');
    //     console.log(this);
    //     this.setState(prevState => ({
    //         good: prevState.good + 1
    //     }));
    // }
    
    // CountNeutral = () => {
    //     this.setState(evt => ({
    //         neutral: evt.neutral + 1,
    //     }));
    // }
    
    // CountBad = () => {
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1,
    //     }));
    // }
    
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
      const { good, neutral, bad } = this.state;
      const countTotalFeedback = this.countTotalFeedback();
      const countPositiveFeedback = this.countPositiveFeedback();
      const HandleClickButton = this.HandleClickButton;
      const options = Object.keys(this.state);
       
      return (
        <div>
          <section title="Please leave feedback">
          <div>
            
            
              <h2>Please leave feedback</h2>
              <FeedbackOptions options={options} onLeaveFeedback={HandleClickButton}/>
          </div>
                       
          <div>
                {countTotalFeedback > 0 ? (
         <StatPage
                onGood={good}
                onNeutral={neutral}
                onBad={bad}
                onTotal={countTotalFeedback}
                onPositive={countPositiveFeedback} />) : (<p>There is no feedback</p>)}
            
            </div>
          </section>
        </div>
        )
    }
}

export default App