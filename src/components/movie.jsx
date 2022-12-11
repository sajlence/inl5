import React, { Component } from "react";

class Movie extends Component {
  styles = {
    fontSize: "1rem",
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <div style={this.styles}>{this.formatCount()}</div>

        <button
          onClick={() => this.props.onModify(this.props.movie)}
          className="btn btn-secondary btn-sm"
        >
          Modify
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.movie.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value: count, year: year, grade: grade } = this.props.movie;
    return "Titel: " + count + " - År: " + year + " - Betyg: " + grade;
  }
}

export default Movie;
