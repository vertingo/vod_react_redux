import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { moviesActions } from '../_actions'

class MoviesView extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { total } = this.props;
    return (
      <div>
        Total Results: {total}
        <List />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    total: state.movies.total
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies())
  };
}

const Movies = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesView);

export default Movies;
