import { Col, Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FavouriteCompanies = () => {
  const content = useSelector((state) => {
    return state.favCompanies;
  });

  return (
    <Container>
      <Col xs={10} className='mx-auto my-3'>
        <h1 className='display-1'>Your favourite companies:</h1>
        <ListGroup>
          {content.map((company, i) => {
            return (
              <ListGroup.Item key={i}>
                <Link to={`/company/${company}`}>{company}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    </Container>
  );
};

export default FavouriteCompanies;
