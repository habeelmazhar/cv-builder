export const selectUserEmail = state => state.email;
export const selectUserFirstname = state => state.firstname;
export const selectUserLastname = state => state.lastname;
export const selectUserPassword = state => state.password;
export const selectUserLoggedIn = state => state.auth.isLoggedIn;


export const selectUserNewEmail = state => state.draft.personal.email;
export const selectUserNewFirstname = state => state.draft.personal.firstname;
export const selectUserNewLastname = state => state.draft.personal.lastname;
export const selectUserNewLinkedin = state => state.draft.personal.linkedin;
export const selectUserNewPhone = state => state.draft.personal.phone;
export const selectUserNewAddress = state => state.draft.personal.address;





