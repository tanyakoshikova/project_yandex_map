import React from 'react';
import './style/style.scss'
import {Layout} from 'antd';
import SiderComponent from "shared/ui/SiderComponent/SiderComponent";
import MainComponent from "shared/ui/MainComponent/MainComponent";

const App: React.FC = () => {


    return (
        <Layout>
            <SiderComponent/>
            <MainComponent/>
        </Layout>
    );
};

export default App;

