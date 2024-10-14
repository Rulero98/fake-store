import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {
  const [response, setResponse] = useState([])

  useEffect(() => {

    axios.get(url).then(resp => setResponse(resp))

  }, [])
  return response

}
