import React, {useState} from 'react'
import {Button, Layout} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const {Header} = Layout;

interface HeaderInterface {
    className?: string;
}

const HeaderComponent: React.FC<HeaderInterface> = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Header style={{padding: 0, background: '#95d4f7'}}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />МОИ УНИКАЛЬНЫЕ МЕСТА
            </Header>
        </Layout>

    );
};

export default HeaderComponent;