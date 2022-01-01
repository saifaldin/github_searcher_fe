import { useEffect } from 'react';
import SearchBar from '../SearchBar';
import { IHeaderProps } from './interfaces/IHeaderProps';
import './styles/index.css';

function Header(props: IHeaderProps) {
  const { setSearchParams, remainingRequests, setRemainingRequests } = props;
  useEffect(() => {
    if (remainingRequests !== 10) {
      setTimeout(() => { setRemainingRequests(10) }, 60 * 1000);
    }
  }, [remainingRequests])
  return (
    <div className='header'>
      <div className='banner'>
        <img src='/assets/github.svg' alt='github icon' className='banner-icon' />
        <div>
          <h2 className='banner-title'>GitHub Searcher</h2>
          <h3 className='banner-subtitle'>Search users or repositories below</h3>
        </div>
      </div>
      <SearchBar setSearchParams={setSearchParams} />
      <p className='remaining'>Remaining Requests: {remainingRequests}</p>
      <p className='remaining_subtitle'>According to Github API ratelimit. Resets every 1 minute.</p>
      {remainingRequests === 0
        ? <p className='remaining_subtitle'>You cant make any new searches for 1 minute. Any cached searches will be returned normally.</p>
        : <></>}
    </div>
  );
}

export default Header;
