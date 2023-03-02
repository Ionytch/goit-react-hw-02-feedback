import { Component } from "react";
import { StatPage } from "./statistics/Statistics";
import FeedbackOptions from "./feedback/Feedback";
import { FeedbackStyle, Section, SectionTitle, StatisticsBox, StatisticsText } from "./App.styled";

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
        // <div>
          <Section title="Please leave feedback">
          <FeedbackStyle>
            
            
              <SectionTitle title="Please leave feedback">
Please leave feedback</SectionTitle>
              <FeedbackOptions options={options} onLeaveFeedback={HandleClickButton}/>
          </FeedbackStyle>
                       
          <StatisticsBox>
                {countTotalFeedback > 0 ? (
         <StatPage
                onGood={good}
                onNeutral={neutral}
                onBad={bad}
                onTotal={countTotalFeedback}
                onPositive={countPositiveFeedback} />) : (<StatisticsText>There is no feedback</StatisticsText>)}
            
            </StatisticsBox>
          </Section>
        // </div>
        )
    }
}

export default App