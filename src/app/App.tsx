import React from 'react';
import './style/style.scss'
import {Layout} from 'antd';
import PagesComponent from "pages/PagesComponent";
import MainComponent from "shared/ui/MainComponent/MainComponent";

const App: React.FC = () => {


    return (
        <Layout>
            <PagesComponent/>
            <MainComponent/>
        </Layout>
    );
};

export default App;

