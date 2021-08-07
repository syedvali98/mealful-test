import { Alert, Col, Row } from "antd";
import React from "react";

export default function Notification() {
  return (
    <Row style={{ background: "#FFDB76" }} justify="center">
      <Col lg={17} md={17} sm={24}>
        <Alert
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            fontFamily: "sans-serif",
            background: "none",
            border: "none",
          }}
          message={
            <p style={{ padding: "10px 0 0 0" }}>
              <b>Note:</b> Slot time for lunch is from 12:30pm to 3:00pm and
              slot time for dinner is from 6:00pm to 8:30pm. You can schedule or
              modify your orders 4 hours prior to the slot time.
            </p>
          }
          type="warning"
        />
      </Col>
    </Row>
  );
}
