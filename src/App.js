import './App.css';
import React, { useState, useEffect } from 'react'

import Searchbar from './components/Searchbar';
import Gallery from './components/Gallery/Gallery-Index';

function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }, [search])

  return (
    <div className="App">
      <Searchbar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
