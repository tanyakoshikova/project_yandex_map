import React from 'react';
import { YMaps } from "@pbe/react-yandex-maps";
import {Layout} from "antd";
import MapComponent from "shared/ui/MapComponent/MapComponent";
import './ContentComponent.scss'

const {Content} = Layout;

function ContentComponent() {
    return (
        <Content className="content">
            <YMaps query={{apikey: '8b29a2bb-5ff5-4ffb-acb6-5596a63f42d3'}}>
                <MapComponent/>
            </YMaps>
        </Content>
    );
}

export default ContentComponent;