import { Icon, Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import AppHeader from './components/common/AppHeader';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <BrowserRouter>
          <Header style={{ backgroundColor: 'WindowFrame' }}>
            <div>
              <AppHeader />
            </div>
          </Header>
          <Layout style={{ padding: '2px' }}>
            <Sider style={{ backgroundColor: 'darkgrey' }}>
              <div className='logo' />

              <Menu
                style={{ backgroundColor: 'darkgrey' }}
                defaultSelectedKeys={['1']}
                mode='inline'
              >
                <Menu.Item key='1'>
                  <Icon type='pie-chart' />
                  <span>
                    <NavLink to='/'>Home</NavLink>
                  </span>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Icon type='desktop' />
                  <span>
                    <NavLink to='/About'>About</NavLink>
                    <About />
                  </span>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Icon type='desktop' />
                  <span>
                    <NavLink to='/Projects'>Projects</NavLink>
                  </span>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Icon type='desktop' />
                  <span>
                    <NavLink to='/Contact'>Contact</NavLink>
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '30px', backgroundColor: 'grey' }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contact' element={<Contact />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
        <Footer style={{ backgroundColor: 'WindowFrame' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
