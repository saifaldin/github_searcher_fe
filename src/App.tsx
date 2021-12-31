import { useState } from 'react';
import { ResultTypes } from './components/enums/ResultTypes';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './styles/App.css';

const App = () => {
  const [searchParams, setSearchParams] = useState({ text: '', type: ResultTypes.USERS });

  return (
    <section className='github_searcher'>
      <Header setSearchParams={setSearchParams} />
      <SearchResults text={searchParams.text} type={searchParams.type} />
    </section>
  );
}

export default App;
