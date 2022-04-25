import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';

function Home() {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const editUser = () => {
    dispatch(setUser({
      name: 'john do',
      age: 10,
      firstName: 'john',
      lastName: 'do',
    }));
  };

  return <div>
    <h1>Home</h1>
    <Link to='/office'>Office</Link>
    {user ? <div>
      {user.name}
      <button onClick={() => editUser()}>edit</button>
    </div> : <div>empty user</div>}
  </div>;
}

export default Home;
