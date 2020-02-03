import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (url, method = 'get', body = null, initialData = []) => {
  const [localData, setData] = useState(initialData)

  useEffect(() => {
    axios(url, {method, body}).then(({data}) => {
      setData(data)
    }).catch(err => console.log(err))
  }, [url, method, body])
  return [localData, setData]
}

export default useAxios