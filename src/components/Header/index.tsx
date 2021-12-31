import SearchBar from '../SearchBar';
import './styles/index.css';

function Header(props: { setSearchParams: Function }) {
  const { setSearchParams } = props;
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
    </div>
  );
}

export default Header;
