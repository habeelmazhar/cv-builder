export const selectUserEmail = state => state.auth.email;
export const selectUserFirstname = state => state.auth.firstname;
export const selectUserLastname = state => state.auth.lastname;
export const selectUserPassword = state => state.auth.password;
export const selectUserLoggedIn = state => state.auth.isLoggedIn;


export const selectUserDraft = state => state.draft;

export const selectUserNewEmail = state => state.draft.personal.email;
export const selectUserNewFirstname = state => state.draft.personal.firstname;
export const selectUserNewLastname = state => state.draft.personal.lastname;
export const selectUserNewLinkedin = state => state.draft.personal.linkedin;
export const selectUserNewPhone = state => state.draft.personal.phone;
export const selectUserNewAddress = state => state.draft.personal.address;


export const selectUserNewEducations = state => state.draft.education;
export const selectUserNewExperiences = state => state.draft.experience;
export const selectUserNewSkills = state => state.draft.skills;


export const selectUserResume = state => state.resume;




