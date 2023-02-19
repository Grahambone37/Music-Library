import './App.css';
import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Searchbar from './components/Searchbar';
import Gallery from './components/Gallery/Gallery-Index';

import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView';

function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        if (resData.results.length > 0) {
          setMessage('')
          setData(resData.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <Router>
        {message}
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Searchbar handleSearch={handleSearch} />
              <Gallery data={data} />
            </Fragment>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
