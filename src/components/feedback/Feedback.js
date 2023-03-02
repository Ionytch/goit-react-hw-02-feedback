import { Feedback, FeedbackButton, FeedbackItem } from "./feedback.styled";
function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <Feedback>
            {
                options.map(option => (
               <FeedbackItem key={option}>
           
                <FeedbackButton name={option} onClick={onLeaveFeedback}>{option}</FeedbackButton>
            </FeedbackItem>     
                )

                )
            }
            
            
        </Feedback>
    )
}
    
  

export default FeedbackOptions;