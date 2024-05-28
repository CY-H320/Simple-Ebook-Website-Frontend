import { reactive } from 'vue';

const state = reactive({
  isAuthenticated: !!localStorage.getItem('token'),
  userData: {}
});

export function useStore() {
  return state;
}

export async function fetchUserData() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (token && userId) {
    try {
      const response = await fetch(`http://localhost:8000/user/${userId}`, {
        method: 'GET',
        headers: {
          'Access-Token': token
        }
      });

      if (response.ok) {
        state.userData = await response.json();
        state.isAuthenticated = true;
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}
