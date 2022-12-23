import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: [
      {
        id: this.getRandomInt(),
        value: "The Godfather",
        year: 1972,
        grade: 9.2,
      },
      { id: this.getRandomInt(), value: "Star Wars", year: 1977, grade: 8.6 },
      {
        id: this.getRandomInt(),
        value: "The Usual Suspects",
        year: 1995,
        grade: 8.5,
      },
      {
        id: this.getRandomInt(),
        value: "Jurassic Park",
        year: 1993,
        grade: 8.1,
      },
    ],
  };

  //Generate a somewhat random key ID value
  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000));
  }

  //Get user input from popup
  getUserInput() {
    let title = prompt("Titel: ");
    let year = prompt("År: ");
    let grade = prompt("Betyg: ");
    return [title, year, grade];
  }

  handleModify = (movie) => {
    let input = this.getUserInput();

    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].value = input[0];
    movies[index].year = input[1];
    movies[index].grade = input[2];

    this.setState({ movies });
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((c) => c.id !== movieId);
    this.setState({ movies });
  };

  handleAdd = (movie) => {
    let input = this.getUserInput();

    const movies = [...this.state.movies];

    // Add new movie to array
    movies.push({
      id: this.getRandomInt(),
      value: input[0],
      year: input[1],
      grade: input[2],
    });
    this.setState({ movies });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>

        {this.state.movies.map((movie) => (
          <Movie
            key={movie.id}
            onDelete={this.handleDelete}
            onModify={this.handleModify}
            movie={movie}
          ></Movie>
        ))}
      </div>
    );
  }
}

export default Movies;
