import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { getMovies } from '../_actions/movies'

const MoviesView = React.createClass({
  componentDidMount() {
    this.props.getMovies();
  },
  render() {
    const { total } = this.props;
    return (
      <div>
        Total Results: {total}
        <List />
      </div>
    )
  }
})

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
