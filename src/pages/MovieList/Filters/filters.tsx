import { Col, Container, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import './filters.css';

interface ListFiltersProps {
  setSort: (sort: 'episode' | 'year') => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const ListFilters = ({
  setSort,
  filter,
  setFilter
}: ListFiltersProps) => {
  return (
    <Container fluid className="filters">
      <Row className="filterRow">
        <Col md={"auto"}>
          <DropdownButton id="dropdown-basic-button" title="SORT BY..." variant="outline-primary">
            <Dropdown.Item onClick={() => setSort('episode')}>Episode</Dropdown.Item>
            <Dropdown.Item onClick={() => setSort('year')}>Year</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col lg={true}>
          <Form.Control
            type="text"
            value={filter}
            placeholder="Type to filter..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ListFilters;
