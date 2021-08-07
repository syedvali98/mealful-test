import { Col, Row, Button } from "antd";
import React from "react";

export default function DescriptionModal({ meal }) {
  return (
    meal && (
      <Row style={{ padding: "0 10px" }}>
        <Col span={24}>
          <img
            src={meal.thumbnail}
            width="100%"
            alt="desc-thumb"
            style={{ borderRadius: "10px", margin: "15px 0" }}
          ></img>
        </Col>
        <Col span={24}>
          <h1>{meal.name}</h1>
        </Col>
        <Col span={24}>
          <h3 style={{ fontWeight: 300 }}>{meal.description}</h3>
        </Col>
        <Col span={24}>
          <Row gutter={[5, 53]}>
            {meal.tags.map((tag) => (
              <Col>
                <Button
                  size="small"
                  ghost
                  style={{
                    color: tag.color,
                    borderColor: tag.color,
                    borderRadius: "4px",
                  }}
                >
                  {tag.name}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
        <Col style={{ padding: "10px 0" }} span={24}>
          <hr />
        </Col>
      </Row>
    )
  );
}
