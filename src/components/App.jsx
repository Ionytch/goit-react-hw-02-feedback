import { Component } from "react";
import { StatPage } from "./statistics/Statistics";
import FeedbackOptions from "./feedback/Feedback";
import { FeedbackStyle, SectionStyle, StatisticsBox, StatisticsText } from "./App.styled";
import { Section } from "./Section";


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
        <SectionStyle>
          <Section title="Please leave feedback">
            <FeedbackStyle> 
              
              <FeedbackOptions options={options} onLeaveFeedback={HandleClickButton}/>
          </FeedbackStyle>
          </Section>
        
        <Section title="Statistics">          
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
        </SectionStyle>
        )
    }
}

export default App