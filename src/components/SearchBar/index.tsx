import { useEffect, useState } from 'react';
import { ResultTypes } from '../enums/ResultTypes';
import DropdownList from './components/DropdownList';
import SearchInput from './components/SearchInput';
import './styles/index.css';

function SearchBar(props: { setSearchParams: Function }) {
  const { setSearchParams } = props;
  const [type, setType] = useState(ResultTypes.USERS);
  const [text, setText] = useState();

  useEffect(() => {
    setSearchParams({ text, type });
  }, [text]);

  return (
    <div className='search_bar'>
      <SearchInput setText={setText} />
      <DropdownList setType={setType} listItems={[ResultTypes.USERS, ResultTypes.REPOSITORIES]} />
    </div>
  );
}

export default SearchBar;
