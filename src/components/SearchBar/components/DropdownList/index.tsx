import { IDropdownListProps } from './interfaces/IDropdownListProps';
import './styles/index.css';

function DropdownList(props: IDropdownListProps) {
  const { listItems, setType } = props;
  return (
    <select className='dropdown_list' name='search_options' onChange={(e) => {
      setType(e.currentTarget.value)
    }}>
      {listItems.map((item, i) => <option value={item} key={i}>{item}</option>)}
    </select>
  );
}

export default DropdownList;
