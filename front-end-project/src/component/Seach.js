import React from "react";


function Search({onSearchWord} ) {
  

  function handlesearch(e){
    onSearchWord(e.target.value)

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Flowers:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name of flower..."
        onChange={handlesearch}
    />
    </div>
  );
}

export default Search;
