import React from "react";


function Search({onSearchWord} ) {
  

  function handlesearch(e){
    onSearchWord(e.target.value)

  }

  return (
    <div className="searchbar">
      <label htmlFor="search" id="aboveSearchBar">Use the search bar to see if we have the type of flower you want!</label>
      <input
        type="text"
        id="search"
        placeholder="Search for flower..."
        onChange={handlesearch}
    />
    </div>
  );
}

export default Search;
