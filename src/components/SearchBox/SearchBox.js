import { useEffect, useState } from "react";
import "./SearchBox.css"

const SearchBox = ({ onSearch, initial }) => {
  const [search, setSearch] = useState("")

  const handlerKeyPress = (e) => {
    if (e.key == "Enter") {
      setSearch(e.target.value)
      onSearch(search)
    }
  };

  useEffect(() => {
    setSearch(initial)
}, [])

  return (
      <div className='searchbox'>
        <input className='searchbox__input' placeholder='Buscar...' type="text" value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => handlerKeyPress(e)}></input>
        <a className='searchbox__button' onClick={() => onSearch(search)}><i className="fa-solid fa-magnifying-glass"></i></a>
      </div>
  )
}

export default SearchBox;