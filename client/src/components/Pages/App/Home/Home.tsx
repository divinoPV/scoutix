import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../utils/Redux/hooks';
import { setUser } from '../../../../utils/Redux/Slices/userSlice';

const Home = (): JSX.Element => {
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
    <Link to="/office">Office</Link>
    { user ? <div>
      { user.name }
      <button onClick={ () => editUser() }>edit</button>
    </div> : <div>empty user</div> }
  </div>;
}

export default Home;
