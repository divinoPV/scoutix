import { Store } from '../Redux/store';

const key = 'userState';

export function loadUserState() {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;

    return { user: { ...JSON.parse(serializedState) } };
  } catch (e) {
    return undefined;
  }
}

export async function saveUserState(state: Store) {
  try {
    const serializedState = JSON.stringify({ id: state['user'].id });
    localStorage.setItem(key, serializedState);
  } catch (e) {
    // Ignore
  }
}
