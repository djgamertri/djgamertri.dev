import { useState, useEffect } from 'react'

function UseLanguage () {
  const [systemLanguage, setSystemLanguage] = useState('')

  useEffect(() => {
    const language = navigator.language
    setSystemLanguage(language)
  }, [])

  return systemLanguage
}

export default UseLanguage
