import { IRepoResult } from './interfaces/IRepoResult';
import './styles/index.css';

const openNewWindow = (url: string) => {
  window.open(url);
}

const RepoSearchResult = (props: IRepoResult) => {
  const {
    name,
    repoUrl,
    stars,
    userDetails:
    {
      avatar,
      name: username,
    },
  } = props;

  return (
    <article className='repo' onClick={() => openNewWindow(repoUrl)}>
      <img className='repo_image' src={avatar} alt={`${name} image`} />
      <p className='repo_stars'>Stars: {stars}</p>
      <p className='repo_title'>{name}</p>
      <p className='repo_owner_name'>{username}</p>
    </article>
  );
}

export default RepoSearchResult;
