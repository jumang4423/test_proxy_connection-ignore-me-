import { useEffect, useState } from 'react'
import axios from 'axios'

// result patturn
class Fetched {
  ok
  err 
}

// data fetching async func
const getData = async () => {
  try {
    // TODO: put URL ( which is get )
    const { data } = await axios.get("https://api.jsonin.io/b/6110a49bd5667e403a3c118f/129")

    // ok result
    let ok_fetched = new Fetched
    ok_fetched.ok = data
    return ok_fetched

  } catch (e) {
    // err result
    let err_fetched = new Fetched
    err_fetched.err = e
    return err_fetched
  }
}

export default function Home() {

  const [data, setData] = useState({})

  useEffect(async () => {
    const fetched = await getData()
    // patturn match
    if (fetched.ok != null) {
      setData(fetched.ok)
    } else {
      setData(fetched.err)
    }
  }, [])

  return (
    <div>
      data: 
      {
        JSON.stringify(data)
      }
    </div>
  )
}
