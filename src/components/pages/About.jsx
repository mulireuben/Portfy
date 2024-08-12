import { Card, Col, Divider, Form, Row } from 'antd';

const About = () => {
  return (
    <Card
      style={{ width: '100%', height: '100%', textAlign: 'justify' }} // Use justify to spread text across the width
      bodyStyle={{ padding: '20px' }}
    >
      <Row type='flex' justify='center' style={{ padding: '0px' }}>
        <Col span={16}>
          <h1 style={{ margin: '0px', padding: '10px' }}>About Me</h1>
          <Divider />
          <Form layout='vertical'>
            <Form.Item>
              <p style={{ margin: '0px', padding: '10px' }}>
                I am a dedicated and passionate software developer with a strong
                foundation in both academic and professional settings. I
                graduated from KCA University in July 2024, where I developed a
                deep understanding of software development principles and
                practices.
              </p>
            </Form.Item>

            <Form.Item>
              <p style={{ margin: '0px', padding: '10px' }}>
                My professional journey began with a successful attachment at
                Smart International from January to April 2023. During this
                period, I refined my technical skills, focusing on developing
                efficient and user-friendly applications. This experience laid
                the groundwork for my subsequent role as a graduate trainee from
                February to August 2024. As a trainee, I had the opportunity to
                work on complex projects, collaborate with industry experts, and
                further enhance my proficiency in modern development frameworks
                and tools.
              </p>
            </Form.Item>

            <Form.Item>
              <p style={{ margin: '0px', padding: '10px' }}>
                Throughout these experiences, I have cultivated a strong
                expertise in both frontend and backend technologies, with a
                particular emphasis on ReactJS and Spring Boot. I am eager to
                continue leveraging my skills and experiences to contribute to
                innovative projects and deliver impactful solutions in the
                ever-evolving tech landscape.
              </p>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default About;
