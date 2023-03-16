import { useEffect, useState } from 'react'
import axios from 'axios';

const Fetcher = (url) => {
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNzZmNzhiNS02ODk5LTRmYjEtYTBiNy0wM2UyNDlmZDAwM2YiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4OTIwMjQsImV4cCI6MTY3OTc5MjAyNH0.6h8998my4DkJVfc76HUsnE_h5HMfXAZN2BQ5O83yiIw";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } });
        setData(response.data.courses);
        console.log(response.data.courses);
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    }

    FetchData();
  }, [url])


  return { data, loading, error }
}

export default Fetcher