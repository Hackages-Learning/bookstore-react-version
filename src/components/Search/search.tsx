import React, {ChangeEvent} from 'react'

export const Search  = ({onSearch}: {onSearch: (term: string) => void}) => {
    return (
      <>
        <div>
          <input id="search-box" onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)} />
        </div>
        <hr />
        <br />
      </>
    )
  }
