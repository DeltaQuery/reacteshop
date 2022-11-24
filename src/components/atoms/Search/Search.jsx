import React from 'react'
import { BiSearch } from "react-icons/bi"
import { SearchForm } from '../../../styles/Header/SearchStyles'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/value=${e.target[0].value}`)
  }

  const handleSearchIcon = () => {

  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input type="text" className="searchInput" />
      <BiSearch
        className="searchIcon"
        size="22"
        fill="#003A4E"
        onClick={handleSearchIcon}
      />
    </SearchForm>
  )
}
