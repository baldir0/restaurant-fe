export const getCurrentLocation = async (successHandler: PositionCallback, errorHandler: PositionErrorCallback = localErrorHandler) : Promise<void> => {
  if (!navigator.geolocation) throw new Error('Geolocation is not supported by this browser!');

  const { state } : PermissionStatus = await navigator.permissions.query({name: "geolocation"});
  if (state !== "granted") throw new Error('Failed to get location!');
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
    enableHighAccuracy: true,
  })
}

const localErrorHandler = () => {
  console.log("An Error Occured")
}