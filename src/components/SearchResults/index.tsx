import { useEffect, useState } from 'react';

import './styles/index.css';
import backendClient from '../../clients/backend/backendClient';
import RepoSearchResult from '../RepoSearchResult';
import UserSearchResult from '../UserSearchResult';

import { ResultTypes } from '../enums/ResultTypes';
import { IRepoResult } from '../RepoSearchResult/interfaces/IRepoResult';
import { IUserResult } from '../UserSearchResult/interfaces/IUserResult';
import { ISearchResultsProps } from './interfaces/ISearchResultsProps';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const renderRepoResult = (result: IRepoResult, i: number) => {
  const { name, repoUrl, stars, userDetails, type } = result;
  return <RepoSearchResult
    key={i}
    type={type}
    name={name}
    userDetails={userDetails}
    repoUrl={repoUrl}
    stars={stars}
  />
}

const renderUserResult = (result: IUserResult, i: number) => {
  const { name, avatar, profileUrl, type } = result;
  return <UserSearchResult
    key={i}
    type={type}
    name={name}
    profileUrl={profileUrl}
    avatar={avatar}
  />
}

const SearchResults = (props: ISearchResultsProps) => {
  const { type, text } = props;
  const dispatch = useAppDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const cachedResults = useAppSelector(state => state[type][text]);

  useEffect(() => {
    if (!text || text.length < 3) {
      setSearchResults([]);
    }
    if (text && text.length >= 3) {
      if (cachedResults) {
        setSearchResults(cachedResults.map((result: any) => ({ ...result, type: type })))
      }
      backendClient.search(type, text)
        .then(({ data }) => {
          const results = data.results;
          setSearchResults(results.map((result: any) => ({ ...result, type: type })))
          dispatch({ type: 'CACHE', payload: { type, results, text } });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [type, text])

  return (
    <section className='results_section'>
      {searchResults.map((result, i) => {
        if ((result as IRepoResult).type === ResultTypes.REPOSITORIES) {
          return renderRepoResult(result, i);
        } else {
          return renderUserResult(result, i);
        }
      })}
    </section>
  );
}

export default SearchResults;
