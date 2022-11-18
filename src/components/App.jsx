import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />{' '}
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
