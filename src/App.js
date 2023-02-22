import './App.css';
import React, { useState, Fragment, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Searchbar from './components/Searchbar';
import Gallery from './components/Gallery/Gallery-Index';

import DataContext from './Context/DataContext';
import SearchContext from './Context/SearchContext';
import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView';

function App() {
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
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

  return (
    <div className="App">
      <Router>
        {message}
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
              }}>
                <Searchbar />
              </SearchContext.Provider>
                <DataContext.Provider value={data}>
                  <Gallery />
                </DataContext.Provider>
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
