import { Store } from '../Redux/store';
import { User } from '../Redux/Slice/user';

export const key = 'user';

export const loader = (): { user: User } | undefined => {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;

    return { user: { ...JSON.parse(serializedState) } };
  } catch (e) {
    return undefined;
  }
};

export const saver = async (state: Store): Promise<void> => {
  if (state.user.logged) {
    try {
      localStorage.setItem(key, JSON.stringify({ id: state.user.id }));
    } catch (e) {
      return undefined;
    }
  }
};
