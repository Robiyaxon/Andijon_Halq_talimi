import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const MyMap = () => {
    const defaultState = {
        center: [40.757145,72.360036],
        zoom: 5,
      };
      return (
        <YMaps>
          <Map width={100 + '%'} defaultState={defaultState}>
            <Placemark geometry={[40.757145,72.360036]} />
          </Map>
        </YMaps>
      );
};
