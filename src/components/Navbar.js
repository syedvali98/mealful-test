import { Col, Row } from "antd";
import React from "react";

export default function Navbar() {
  return (
    <Row justify="center" style={{ height: "100%" }}>
      <Col span={17} style={{ height: "100%" }}>
        <Row justify="space-between" style={{ height: "100%" }}>
          <Col style={{ height: "100%" }}>
            <img
              src="https://www.mealful.ca/img/mealful-22.svg"
              alt="logo"
              height="60%"
            ></img>
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
}
