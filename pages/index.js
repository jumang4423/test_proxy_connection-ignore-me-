import { useEffect } from 'react'
import axios from 'axios'

// data fetching async func
const getData = async () => {
  try {
    // TODO: put URL ( which is get )
    const { data } = await axios.get("https://...SOME_URL")
    return data

  } catch (e) {
    console.log("rejected")
    console.log(e)
    return null
  }
}

export default function Home() {
  useEffect(async () => {
    const fetched = await getData()
    if (fetched != null) {
      console.log("success")
      console.log(fetched)
    }
  }, [])

  return (
    <div>
      dom rendered
    </div>
  )
}