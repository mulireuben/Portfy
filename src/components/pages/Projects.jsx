import { Row, Col, Card, Button, PageHeader } from 'antd';
import 'antd/dist/antd.css'; // Import Ant Design styles

const projects = [
  {
    title: 'Project 1',
    image: 'https://via.placeholder.com/300', // Placeholder image URL, replace with actual image URL
    description: 'This is a description of Project 1.',
    link: 'https://project1.com',
  },
  {
    title: 'Project 2',
    image: 'https://via.placeholder.com/300',
    description: 'This is a description of Project 2.',
    link: 'https://project2.com',
  },
  {
    title: 'Project 3',
    image: 'https://via.placeholder.com/300',
    description: 'This is a description of Project 3.',
    link: 'https://project3.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div style={{ padding: '0 ' }}>
      <Card style={{ borderRadius: '15px' }}>
        <PageHeader title='My Projects' onBack={() => history.push('/')} />

        <Row gutter={6} type='flex' justify='space-around' align='middle'>
          {projects.map((project, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ marginBottom: '16px' }}
            >
              <Card
                hoverable
                cover={<img alt={project.title} src={project.image} />}
                style={{ height: '100%' }} // Make the card fill the column height
              >
                <Card.Meta
                  title={project.title}
                  description={project.description}
                />
                <Button
                  type='primary'
                  href={project.link}
                  target='_blank'
                  style={{ marginTop: '10px', width: '100%' }} // Full-width button
                >
                  Check Website
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Projects;
