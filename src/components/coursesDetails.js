import React,{ useState} from 'react'
import Fetcher from '../helpers/Fetcher';
const CoursesDetails = ({route,item}) => {
  const [courseData, setCourseData] = useState([]);
/*   const [loading, setLoading] = useState(false) */
  const [error, setError] = useState(null);
  
     const { data, loading, erorr } = Fetcher("https://api.wisey.app/api/v1/core/preview-courses/:courseId") 


  return (
    <div>dsds</div>  
  )
}

export default CoursesDetails