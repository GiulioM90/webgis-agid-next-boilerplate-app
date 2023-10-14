'use client'

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Map from './Map';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const DEFAULT_CENTER =[40.851775,  14.268124];
  const [data, setData] = useState([]);

  const { data: jsonData } = useSWR(
    'https://giuliogis.developy.it/api/json',
    fetcher
  );
  useEffect(() => {
    setData(jsonData);
  }, [jsonData]);


  const homes = data?.map((house) => {
    const { id, lat, lon, indirizzo, foglio, particella, note} = house;
    return {
      id,
      lat,
      lon,
      indirizzo,
      foglio,
      particella,
      note,
    }
  })
  console.log(homes)
  
  // TODO: get user location 
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //       const { latitude, longitude } = position.coords;
  //       setInitialPosition([latitude, longitude]);
  
  //   });
  // }, []);

  return (
          <>
            <h1>
                 Mappa
            </h1>
            <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
                    {({ TileLayer, Marker, Popup }, Leaflet) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {homes?.map(({ id, lat, lon, indirizzo, foglio, particella, note }) => {

                                return (
                                    <Marker
                                        key={id}
                                        position={[lat, lon]}
                                        icon={Leaflet.icon({
                                            iconUrl: 'leaflet/images/bluehome.png',
                                            iconSize: [41, 41],
                                        })}
                                    >
                                        <Popup>
                                            <strong>Indirizzo:</strong> {indirizzo}
                                            <br />
                                            <strong>Foglio:</strong> {foglio}
                                            <br />
                                            <strong>Particella:</strong> {particella}
                                            <br />
                                            <strong>Note:</strong> {note}
                                        </Popup>
                                    </Marker>
                                );
                            })}
                        </>
                    )}
                </Map>
              </>
  )
}
