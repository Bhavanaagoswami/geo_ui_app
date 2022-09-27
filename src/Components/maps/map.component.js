import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '76vw',
  height: '40vh',
  maxWidth: '700px'
};

const center = {
  lat: 0,
  lng: 0
};

function MapComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDGACPlz-IdjV4ATVsvdf5P0aF4kEzg9Q0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={1}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as mxarkers, info windows, etc. */ }
        { props.list && props.list.map((res, i) => {
            return <Marker key={i} position={{ lat: res.latitude , lng: res.longitude }}></Marker>;
          })
        }
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)