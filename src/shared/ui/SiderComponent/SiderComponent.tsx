import React, {useState} from 'react'
import {Layout, Menu} from "antd";
const {Sider} = Layout;

interface SiderInterface {
    className?: string;
}

const SiderComponent: React.FC<SiderInterface> = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor: '#95d4f7'}}>
            <div className="demo-logo-vertical"/>
            <Menu
                style={{backgroundColor: '#95d4f7'}}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        label: 'Гора Шишка',
                    },
                    {
                        key: '2',
                        label: 'Вечный огонь',
                    },
                    {
                        key: '3',
                        label: 'Гора Тепсей',
                    },
                ]}
            />
        </Sider>
    );
};

export default SiderComponent;