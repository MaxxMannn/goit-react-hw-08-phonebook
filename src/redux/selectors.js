export const reduxContacts = state => state.contacts.items; 
export const reduxIsLoading = state => state.contacts.isLoading;
export const reduxError = state => state.contacts.error;
export const reduxFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

