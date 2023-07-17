import './App.css';
import List from './list/List.js';
import Search from './search/Search.js'
import SearchResults from './search/SearchResults.js'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Search />
      <Routes>
        <Route path = '/' element={<List />} />
        <Route path = '/search/:search' element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
