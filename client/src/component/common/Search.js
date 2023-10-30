import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='col-sm-5 mt-4 mb-3 offset-sm-7'>
        <form onSubmit={(e)=> e.preventDefault()}>

            <input 
            className='form-control'
            type='search'
            role='searchBox'
            placeholder='Search students...'
            value={search}
            onChange={(e)=> 
                setSearch(e.target.value)
            }></input>

        </form>
    </div>
  )
}

export default Search