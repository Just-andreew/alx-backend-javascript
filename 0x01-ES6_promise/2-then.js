function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(error => {
      console.log('Error:', error); // Optional: Log the error for debugging
      return {}; // Return an empty object on rejection
    });
}
