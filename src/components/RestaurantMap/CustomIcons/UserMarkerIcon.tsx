import L from "leaflet";

import iconUrl from '/src/assets/markers/current_location.icon.png'

export const userMarkerIcon = new L.Icon({
    iconUrl: iconUrl,
    iconSize: [48, 48]
})