export const getLocation = async (
  address: string
): Promise<{ lat : number; lon: number }> => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`
  );
  const data = await response.json();
  const { lat, lon } = data[0];
  return {lat: parseFloat(lat), lon: parseFloat(lon)}
};
