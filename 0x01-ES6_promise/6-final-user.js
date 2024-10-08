import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/* eslint-disable no-console */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(results => {
    return results.map(result => {
      if (result.status === 'fulfilled') {
        return {
          status: 'fulfilled',
          value: result.value
        };
      } else {
        return {
          status: 'rejected',
          value: result.reason
        };
      }
    });
  });
}
