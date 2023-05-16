import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";
import Stock from "./SingleStock";

const CombinedSearch = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelected = (company) => {
    setSelectedCompany(company);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Search onCompanySelected={handleCompanySelected} />
        </Col>
        <Col md={6}>
          <Stock company={selectedCompany} />
        </Col>
      </Row>
    </Container>
  );
};

export default CombinedSearch;
