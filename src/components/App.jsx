import { FeedbackPage } from "./feedback/Feedback";
import { StatPage } from "./statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <FeedbackPage />
      <StatPage/>
      
    </div>
  );
};
