import { PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';


const AppHeader = () => {
  return (

      // <Header
      //   style={{
      //     position: 'fixed',
      //     display: 'flex',
      //     flexDirection: 'row',
      //     zIndex: 1,
      //     width: '100%',
      //     justifyContent: 'space-between',
        
      //   }}
      // ><Row gutter={24} >
      //    <Col span={8} >
         
      //     MULI REUBEN MUMO{' '}
      //     </Col>
      //   <Col span={8}>
        
          
      //      
          
      
      // </Col>
      //   <Col span={8} style={{ fontSize: '15px', color: 'HighlightText' }}>
      //     Welcome....
      //     <NavLink to ="/Contact">Contact Me</NavLink>
      //   </Col>
      // </Row>
       
      // </Header>

      <PageHeader
      ghost={false}
      title="REUBEN MULI MUMO"
      extra={[
        
           <NavLink key={"home"} to='/'>Home</NavLink>,

              <NavLink key={"about"} to='/About'>About</NavLink>,
           
            
              <NavLink key={"projects"} to='/Projects'>Projects</NavLink>,
      ]}
    >
     
    </PageHeader>

  );
};

export default AppHeader;
