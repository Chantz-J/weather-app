import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const SearchBar = styled.div`
  height: 70px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Search = () => {
   return (
       <SearchBar>
           <form>
               <input />
               <button>Search</button>
           </form>
       </SearchBar>
   )
}
export default connect(null, {})(Search)