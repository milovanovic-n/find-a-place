import React, { useMemo, useState } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({searchResults, MAPBOX_KEY}) {
  const [popupInfo, setPopupInfo] = useState(null);
  // Transform searchResults object into the {latitude - longitude} object
  const coordintates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordintates);

  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const pins = useMemo(() => 
    searchResults.map(result => (
      <Marker
        key={result.long}
        longitude={result.long}
        latitude={result.lat}
        anchor="bottom"
        color='#F87171'
      >
        <p 
          onClick={() => setPopupInfo(result)}
          className="cursor-pointer text-3xl animate-bounce text-red-600"
          aria-label='push-pin'
          role="img"
        >
          &#9660;
        </p>
      </Marker>
    )),
    []
  );

  return (
    <ReactMapGL
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: "100%", height: "100%"}}
      mapStyle="mapbox://styles/neno110/cl0kxais7000x14o3j68awjce"
      mapboxAccessToken={MAPBOX_KEY}
    >
      {pins}

      {
        popupInfo && (
          <Popup
            onClose={() => setPopupInfo(null)}
            closeOnClick={false}
            longitude={popupInfo.long}
            latitude={popupInfo.lat}
          >
            {popupInfo.title}
          </Popup>
        )
      }
    </ReactMapGL>
  )
}

export default Map