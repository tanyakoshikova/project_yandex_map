import React from "react";
import {GeolocationControl, Map, Placemark, RouteButton, SearchControl, ZoomControl} from "@pbe/react-yandex-maps";
import './MapComponent.scss'

interface MapInterface {
    className?: string;
}

const MapComponent: React.FC<MapInterface> = () => {

    return (
        <Map className="map"
            defaultState={{ center: [54.1, 91.660786], zoom: 8, controls: []
            }} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        >
            <Placemark
                geometry={[53.73851, 91.591004]}
                options={{
                    balloonPanelMaxMapArea: 0,
                    preset: 'islands#circleDotIcon',
                    iconColor: 'red'
                }}
                properties={{
                    balloonContent: [
                        '<div>',
                        '<address>',
                        `<strong>Гора Шишка</strong>`,
                        '<br/>',
                        'Красноярский край, Минусинский район',
                        '<br/>',
                        ' <a href="#">#природа</a>',
                        ' <a href="#">#гора</a>',
                        '</address>',
                        '<img src="https://avatars.mds.yandex.net/get-altay/2436798/2a00000182791d6ed5b14685a4d830548728/XXXL" class="imgMap"/>',
                        '</div>'
                    ].join(''),
                }}
            />
            <Placemark
                geometry={[53.749535, 92.036767]}
                options={{
                    balloonPanelMaxMapArea: 0,
                    preset: 'islands#circleDotIcon',
                    iconColor: 'red'
                }}
                properties={{
                    balloonContent: [
                        '<div>',
                        '<address>',
                        `<strong>Вечный огонь</strong>`,
                        '<br/>',
                        'Красноярский край, Минусинский район',
                        '<br/>',
                        ' <a href="#">#природа</a>',
                        ' <a href="#">#вечныйогонь</a>',
                        '</address>',
                        '<img src=" https://a.d-cd.net/EIAAAgKyJuA-960.jpg" class="imgMap"/>',
                        '</div>'
                    ].join(''),
                }}
            />
            <Placemark
                geometry={[54.428320, 91.618282]}
                options={{
                    balloonPanelMaxMapArea: 0,
                    preset: 'islands#circleDotIcon',
                    iconColor: 'red'
                }}
                properties={{
                    balloonContent: [
                        '<div>',
                        '<address>',
                        `<strong>Гора Тепсей</strong>`,
                        '<br/>',
                        'Красноярский край, Краснотуранский район',
                        '<br/>',
                        ' <a href="#">#природа</a>',
                        ' <a href="#">#гора</a>',
                        '</address>',
                        '<img src="https://avatars.mds.yandex.net/get-altay/1588111/2a0000016bef6fff850fc785ea2674c71bc9/XXXL" class="imgMap"/>',
                        '</div>'
                    ].join(''),
                }}
            />
            <RouteButton/>
            <SearchControl options={{float: "right"}}/>
            <GeolocationControl options={{float: 'right'}} data={{title: 'Моё местоположение'}}
            />
            <ZoomControl options={{size: "large"}}
            />
        </Map>
    );
};

export default MapComponent;