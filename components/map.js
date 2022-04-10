import GoogleMapReact from "google-map-react";
import LocationPin from "./location-pin";

export default function Map({ location, zoomLevel, address }) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin lat={location.lat} lng={location.lng} text={address} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
