if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../serviceWorker.js')
    .then(function(registration) {
      // Registrierung erfolgreich
      console.log('Service Worker Registrierung erfolgreich');
    }).catch(function(error) {
      // Registrierung fehlgeschlagen
      console.log('Service Worker Registrierung fehlgeschlagen: ', error);
    });
}

// This function initializes user media
function getUserMedia(options, successCallback, failureCallback) {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return navigator.mediaDevices.getUserMedia(options)
      .then(successCallback)
      .catch(failureCallback);
  }
  throw new Error('User Media API not supported.')
}
