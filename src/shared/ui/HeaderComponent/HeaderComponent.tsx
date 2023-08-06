import React, {useState} from 'react'
import {Button, Layout} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './HeaderComponent.scss'

const {Header} = Layout;

interface HeaderInterface {
    className?: string;
}

const HeaderComponent: React.FC<HeaderInterface> = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Header className="header">
                <Button
                    type="text" className="burgerButton"
                    icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                    onClick={() => setCollapsed(!collapsed)}
                />МОИ УНИКАЛЬНЫЕ МЕСТА
            </Header>
        </Layout>

    );
};

export default HeaderComponent;