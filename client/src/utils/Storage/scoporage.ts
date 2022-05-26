import { Store } from '../Redux/store';
import { Scope } from '../Redux/Slice/scope';

export const key = 'scope';

export const loader = (): { scope: Scope } | undefined => {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;

    return { scope: { ...JSON.parse(serializedState) } };
  } catch (e) {
    return undefined;
  }
};

export const saver = async (state: Store): Promise<void> => {
  if (state.user.logged) {
    try {
      localStorage.setItem(key, JSON.stringify({
        id: state.scope.id,
        activity: { id: state.scope.activity.id },
        locality: { id: state.scope.locality.id },
      }));
    } catch (e) {
      return undefined;
    }
  }
};
