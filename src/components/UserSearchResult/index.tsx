import { IUserResult } from './interfaces/IUserResult';
import './styles/index.css';

const openNewWindow = (url: string) => {
  window.open(url);
}

const UserSearchResult = (props: IUserResult) => {
  const {
    avatar,
    name,
    profileUrl,
  } = props;

  return (
    <article className='user' onClick={() => openNewWindow(profileUrl)}>
      <img className='user_image' src={avatar} alt={`${name} image`} />
      <p className='user_title'>{name}</p>
    </article>
  );
}

export default UserSearchResult;
