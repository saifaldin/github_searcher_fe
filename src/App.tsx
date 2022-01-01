import { useState } from 'react';
import { ResultTypes } from './components/enums/ResultTypes';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './styles/App.css';

const App = () => {
  const [searchParams, setSearchParams] = useState({ text: '', type: ResultTypes.USERS });
  const [remainingRequests, setRemainingRequests] = useState(10);

  return (
    <section className='github_searcher'>
      <Header setSearchParams={setSearchParams} remainingRequests={remainingRequests} setRemainingRequests={setRemainingRequests} />
      <SearchResults text={searchParams.text} type={searchParams.type} setRemainingRequests={setRemainingRequests} />
    </section>
  );
}

export default App;
