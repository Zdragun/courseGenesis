import React from 'react';
import '../scss/coursepage.scss'
import Fetcher from '../helpers/Fetcher';

const CoursesPage = () => {
  const { data, loading, erorr } = Fetcher("https://api.wisey.app/api/v1/core/preview-courses")
  return (
    <div>
      {
        loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
          erorr ? <h1 className='error'>Sorry the error is occurred</h1> :
            data.map((item) =>
            (
              <div key={item.id}>
                {item.title}
                </div>
            ))
      }
    </div>
  )
}

export default CoursesPage