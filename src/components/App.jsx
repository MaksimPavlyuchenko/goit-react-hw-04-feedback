import { useState } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { FeedbackOptions } from './Buttons/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const handleClick = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0) || 0;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleClick}
          values={options}
        ></FeedbackOptions>
      </Section>
      <Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        ></Statistics>
      </Section>
    </div>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = item => {
//     this.setState(prevState => {
//       return { [item]: prevState[item] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const totalCount = Object.values(this.state).reduce((total, number) => {
//       return total + number;
//     }, 0);
//     return totalCount;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positivePercents =
//       ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) || 0;

//     return positivePercents;
//   };

//   render() {
//     const { bad, good, neutral } = this.state;
//     const options = Object.keys(this.state);

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         {' '}
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           ></FeedbackOptions>
//         </Section>
//         <Section>
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           ></Statistics>
//         </Section>
//       </div>
//     );
//   }
// }
export default App;
