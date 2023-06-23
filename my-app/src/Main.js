import * as React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { posts, title } = props;

  return (
    "hello"
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;