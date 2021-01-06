import React, { Component } from "react";
import Icon from "../icon/Icon";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   this is just for testing the query does not get added to
    //   the url or any search functionality is called
    event.preventDefault();
    if (this.state.query === "") {
      alert("nothing was entered");
    } else {
      alert("you searched for " + this.state.query);
    }
  };

  render() {
    return (
      <form className="searchbar-form" onSubmit={this.handleSubmit}>
        <input
          id="search"
          name="query"
          role="combobox"
          autoComplete="off"
          className="searchbar-form__input"
          type="search"
          placeholder="Search for clothes, cosmetics or styles"
          aria-label="Search"
          aria-controls="search-results"
          aria-expanded="false"
          maxLength={150}
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="searchbar-form__btn">
          <Icon icon="search" title="Search" className="me-4" size={18} />
        </button>
      </form>
    );
  }
}

export default SearchBar;
