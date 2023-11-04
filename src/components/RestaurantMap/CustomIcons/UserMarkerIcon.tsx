import L from "leaflet";

import iconUrl from '/src/assets/markers/user_marker.png'

export const userMarkerIcon = new L.Icon({
    iconUrl: iconUrl,
    iconSize: [48, 48]
})