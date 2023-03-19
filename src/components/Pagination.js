import React from 'react'
import '../scss/pagination.scss'
const Pagination = ({totalPosts,counItemPage,setCurrentPage}) => {
    let pages = [];
    for (let i = 1; i<=Math.ceil(totalPosts/counItemPage); i++){
        pages.push(i)
       
    }
  return (
    <div className='pagination'>
        {
            pages.map((page, index) => {
                return (
                    <button key={index} onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                );
            })
        }
    </div>
  )
}

export default Pagination