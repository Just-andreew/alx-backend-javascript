import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Call signUpUser and await its resolution/rejection
    const signUpResult = await signUpUser(firstName, lastName);

    // Call uploadPhoto and await its resolution/rejection
    const uploadResult = await uploadPhoto(fileName);

    // Return an array with settlements for both promises
    return [
      { status: signUpResult.status, value: signUpResult.data },
      { status: uploadResult.status, value: uploadResult.data || uploadResult.error }, // Handle potential upload error
    ];
  } catch (error) {
    // Handle any errors during promise execution
    return [
      { status: 'failed', value: error }, // Indicate signup failure
      { status: 'not_attempted', value: 'Photo upload not attempted' }, // Indicate skipped photo upload
    ];
  }
}
