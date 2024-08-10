import { Card, Col, Form, Row } from 'antd';
import { Link } from 'react-router-dom';
import Mrpng from '../../assets/Mr.png';
import hireme from '../../assets/hireme.png';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Form>
        <Row gutter={24} align='vertical'>
          <Col span={12}>
            <span className='hello'>Hello,</span>
            <br />
            <span className='introText'>
              I am{' '}
              <span className='introName'>
                Reuben
                <br />
                website designer
              </span>
              <br />
            </span>
            <span className='introPara'>
              i am a skilled web designer with experience in creating
              <br /> visually appealing and user friendly websites
            </span>
            <br />
            <Link>
              <button className='btn'>
                <img src={hireme} alt='Hire ' className='btnImg' />
                Hire Me
              </button>
            </Link>
          </Col>

          <Col span={12}>
            <img src={Mrpng} alt='profile' className='bg' />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Home;
