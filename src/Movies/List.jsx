import React from 'react';
import { connect } from 'react-redux';

const ListView = React.createClass({
  render() {
    const {movies} = this.props;
    const moviesList = movies.map((m, i) => {
      return  (
        <li key={i}>{m.Title}</li>
      );
    });
    return (
      <ul>
        {moviesList}
      </ul>
    )
  }
})

function mapStateToProps(state) {
  return {
    movies: state.movies.list
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default List;

