import { useDispatchook } from '../../../utils/Redux/store';
import { PayloadAction } from '@reduxjs/toolkit';

const useDispatch = () => {
  const dispatch = useDispatchook();

  return (
    ...actions: Array<PayloadAction<any>>
  ) => actions.forEach(action => dispatch(action));
};

export default useDispatch;
