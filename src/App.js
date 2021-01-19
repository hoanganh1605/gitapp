import React, { useEffect, useState } from 'react';

import ListRepos from './components/ListRepos';
import withListLoading from './components/withListLoading';
import SearchBar from './SearchBar';


function App() {

  SearchBar();
  const ListLoading = withListLoading(ListRepos);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setAppState({ loading: true });
    setUserName();
    const apiUrl = `https://api.github.com/users/vietcao/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (

    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <SearchBar placeholder="Enter user name" onChange={() => setUserName({ userName })}/>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      
    </div>
  );
}
export default App;
