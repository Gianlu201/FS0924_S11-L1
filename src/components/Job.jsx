import { Row, Col } from 'react-bootstrap';
import { Bookmark } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const addToFavourite = (data) => {
    console.log(data.company_name);
    dispatch({
      type: 'ADD_TO_FAVOURITE',
      payload: data.company_name,
    });
  };

  return (
    <Row
      className='mx-0 mt-3 p-3'
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Bookmark
          className='me-2'
          onClick={() => {
            addToFavourite(data);
          }}
        />
        <Link to={`/company/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target='_blank' rel='noreferrer'>
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
