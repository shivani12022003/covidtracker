import React, { useEffect } from 'react'

const Covid = () => {
  useEffect(() => {
    getCovidData()
  }, [])
  

  return (
    <div>Covid </div>
  )
}

export default Covid