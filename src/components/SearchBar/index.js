import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchImages } from "./actions";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onSearch = event => {
    event.preventDefault();
    this.props.fetchImages(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSearch}>
          <div className="ui input" style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Search images..."
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchImages }
)(SearchBar);
