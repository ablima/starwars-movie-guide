import { Col, Container, Row } from "react-bootstrap";
import './filters.css';

const ListFilters = () => {
  return (
    <Container fluid className="filters">
      <Row className="filterRow">
        <Col md={3}>Sort</Col>
        <Col md={9}>Filter</Col>
      </Row>
    </Container>
  );
}

export default ListFilters;
