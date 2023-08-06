import React from 'react';
import '../../../app/style/style.scss'
import {Layout} from 'antd';
import HeaderComponent from "shared/ui/HeaderComponent/HeaderComponent";
import ContentComponent from "shared/ui/ContentComponent/ContentComponent";


function MainComponent() {
    return (
        <Layout>
            <HeaderComponent/>
            <ContentComponent/>
        </Layout>
    );
}

export default MainComponent;