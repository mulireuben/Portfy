import { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const SiderDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <div>
          <h1 style={{ color: 'white' }}>
            MULI REUBEN MUMO <h1 style={{ color: 'white' }}>PORTFOLIO</h1>
          </h1>
        </div>
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>
            <Icon type='pie-chart' />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='desktop' />
            <span>About</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='desktop' />
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item key='4'>
            <Icon type='desktop' />
            <span>Contact me</span>
          </Menu.Item>

          <Menu.Item key='5'>
            <Icon type='file' />
            <span>A.O.B</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
