import { useEffect, useState } from 'react';

import './styles/index.css';
import backendClient from '../../clients/backend/backendClient';
import RepoSearchResult from '../RepoSearchResult';
import UserSearchResult from '../UserSearchResult';

import { ResultTypes } from '../enums/ResultTypes';
import { IRepoResult } from '../RepoSearchResult/interfaces/IRepoResult';
import { IUserResult } from '../UserSearchResult/interfaces/IUserResult';
import { ISearchResultsProps } from './interfaces/ISearchResultsProps';

const SearchResults = (props: ISearchResultsProps) => {
  const { type, text } = props;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!text || text.length < 3) {
      setSearchResults([]);
    }
    if (text && text.length >= 3) {
      backendClient.search(
        type,
        text,
      ).then(({ data }) => {
        setSearchResults(data.results.map((result: any) => ({ ...result, type: type })))
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [type, text])

  return (
    <section className='results_section'>
      {searchResults.map((result, i) => {
        if ((result as IRepoResult).type === ResultTypes.REPOSITORIES) {
          const { name, repoUrl, stars, userDetails, type } = result as IRepoResult;
          return <RepoSearchResult
            key={i}
            type={type}
            name={name}
            userDetails={userDetails}
            repoUrl={repoUrl}
            stars={stars}
          />
        } else {
          const { name, avatar, profileUrl, type } = result as IUserResult;
          return <UserSearchResult
            key={i}
            type={type}
            name={name}
            profileUrl={profileUrl}
            avatar={avatar}
          />
        }
      })}
    </section>
  );
}

export default SearchResults;
