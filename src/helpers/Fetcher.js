import {useEffect,useState} from 'react'
import axios from 'axios';

const Fetcher = (url) => {
    const [data, setData] = useState([]);
    const [error,setError] = useState(null)
    const FetchData = async () =>
    {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNzZmNzhiNS02ODk5LTRmYjEtYTBiNy0wM2UyNDlmZDAwM2YiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4OTIwMjQsImV4cCI6MTY3OTc5MjAyNH0.6h8998my4DkJVfc76HUsnE_h5HMfXAZN2BQ5O83yiIw';
        const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
        setData(response.data.courses);
        console.log(response.data.courses);
      } catch (error) {
        setError(error)
      }
    }
      
    useEffect(() => {
        FetchData();
        }, [url])
      

  return {data,error}
}

export default Fetcher