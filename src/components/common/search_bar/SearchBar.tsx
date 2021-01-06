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
        <SearchBtn />
      </form>
    );
  }
}

export const SearchBtn: React.FC = () => {
  return (
    <button type="submit" className="searchbar-form__btn">
      <Icon
        icon="search"
        title="Search"
        className="searchbar-form__icon"
        size={18}
      />
    </button>
  );
};

// Launches the search bar component as a modal
export const SearchBarUtil: React.FC = () => {
  const handleClick = () => {
    alert("search bar launched...not yet");
  };
  return (
    <div className="nav-util" onClick={handleClick}>
      <Icon icon="search" title="Search " className="nav-util__img" size={24} />
    </div>
  );
};

export default SearchBar;
