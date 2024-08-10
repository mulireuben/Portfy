import { Layout } from 'antd';
const { Header } = Layout;

const AppHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'row',
          zIndex: 1,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: '20px',
            color: 'white',
            justifyContent: 'flex-start',
          }}
        >
          MULI REUBEN MUMO{' '}
        </div>
        <div style={{ fontSize: '15px', color: 'HighlightText' }}>
          Welcome....
        </div>
      </Header>
    </Layout>
  );
};

export default AppHeader;
