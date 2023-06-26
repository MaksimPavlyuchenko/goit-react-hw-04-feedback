import PropTypes from 'prop-types';

import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ values, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {values.map(value => {
        return (
          <Button
            type="button"
            key={value}
            onClick={() => {
              onLeaveFeedback(value);
            }}
            name={value}
          >
            {value}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
