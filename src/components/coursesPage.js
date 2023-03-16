import React, { useState } from 'react';
import '../scss/coursepage.scss'
import Fetcher from '../helpers/Fetcher';
import ItemList from './ItemList';
import Pagination from './Pagination';

const CoursesPage = () => {
  const { data, loading, erorr } = Fetcher("https://api.wisey.app/api/v1/core/preview-courses")
  const [currentPage, setCurrentPage] = useState(1);
  const [counItemPage, setCounItemPage] = useState(10)

  const lastIndex = currentPage * counItemPage;
  const firstIndex = lastIndex - counItemPage;
  const currentPosts = data.slice(firstIndex, lastIndex)
  return (
    <div>
      <ItemList
        loading={loading}
        data={currentPosts}
        erorr={erorr}
      />
      <Pagination
        totalPosts={data.length}
        counItemPage={counItemPage} 
        setCurrentPage={setCurrentPage}
        />
        
    </div>
  )
}

export default CoursesPage