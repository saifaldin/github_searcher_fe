import React from 'react';
import _ from 'lodash';
import './styles/index.css';

function SearchInput(props: { setText: Function }) {
  const { setText } = props;
  const setTextOnInputChange = (text: string) => {
    return setText(text)
  }
  const debouncedSetText = _.debounce(setTextOnInputChange, 500, { trailing: true, leading: false });
  return (
    <input className='search_input' placeholder='Start typing to search ..' onChange={(e) => {
      return debouncedSetText(e.currentTarget.value);
    }}></input>
  );
}

export default SearchInput;
