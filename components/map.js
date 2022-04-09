import GoogleMapReact from "google-map-react";
import LocationPin from "./location-pin";

export default function Map({ location, zoomLevel, address }) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCItHe35vo2BwSKHbjyrQywUfUFQW32iuw" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin lat={location.lat} lng={location.lng} text={address} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
