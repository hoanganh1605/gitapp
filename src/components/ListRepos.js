
import React from 'react';
const ListRepos = (props) => {
  const { repos } = props;

if (!repos || repos.length === 0) return <p>NO repo!</p>;
  return (
   <ul>
      <h2 className='list-head'>Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>

  )

}
 export default ListRepos;