import { useState } from "react";
import "./SearchBox.css"

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState(" ")

  const handlerKeyPress = (e) => {
    if (e.key == "Enter") {
      setSearch(e.target.value)
      onSearch(search)
    }
  };
  return (
      <div className='searchbox'>
        <input className='searchbox__input' placeholder='Buscar...' type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => handlerKeyPress(e)}></input>
        <a className='searchbox__button' onClick={() => onSearch(search)}><i className="fa-solid fa-magnifying-glass"></i></a>
      </div>
  )
}

export default SearchBox;