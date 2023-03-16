import React from 'react';
import '../scss/coursepage.scss'
import Fetcher from '../helpers/Fetcher';
import ItemList from './ItemList';

const CoursesPage = () => {
  const { data, loading, erorr } = Fetcher("https://api.wisey.app/api/v1/core/preview-courses")
  return (
    <div>
      <ItemList 
      loading={loading}
      data={data}
      erorr={erorr}
      />
    </div>
  )
}

export default CoursesPage