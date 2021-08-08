import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Col, Row, Button } from "antd";

export default function DateSelector({ getMealsFromAPI }) {
  const [hovering, setHovering] = useState(null);
  const [active, setActive] = useState(null);
  const getDates = () => {
    let dates = [];
    let currentDate = dayjs();
    for (let x = 0; x <= 6; x++) {
      dates.push({
        day: currentDate.format("ddd"),
        date: currentDate.format("DD"),
      });
      currentDate = currentDate.add(24, "h");
      console.log(currentDate);
    }
    return dates;
  };

  const getBackgroundColor = (date) => {
    if (date === hovering) {
      return "#dbdbdb";
    }
    if (date === active) {
      return "black";
    }
    return "none";
  };

  const getTextColor = (date) => {
    if ([active, hovering].includes(date)) {
      return "white";
    }
    return "#000000";
  };

  useEffect(() => {
    getDates().map((e) => {
      if (e.date === dayjs().add(24, "h").format("DD")) {
        setActive(e.date);
      }
      return null;
    });
  }, []);

  return (
    <Row justify="center">
      <Col
        sm={24}
        md={20}
        lg={17}
        style={{ borderBottom: "1px solid gray", padding: "15px 0" }}
      >
        <Row justify="space-between">
          {getDates().map((elem) => (
            <Col span={3}>
              <Button
                style={{
                  border: "none",
                  //   padding: "0.5em 4.5em 5.5em 4.5em",
                  borderRadius: "10px",
                  background: getBackgroundColor(elem.date),
                }}
                className="date-button"
                onMouseOver={() => setHovering(elem.date)}
                onMouseOut={() => setHovering(null)}
                onClick={() => {
                  setActive(elem.date);
                  getMealsFromAPI(elem.date);
                }}
                block
              >
                <h3
                  style={{
                    fontSize: "1.1em",
                    fontWeight: elem.date === active ? "500" : "300",
                    color: getTextColor(elem.date),
                  }}
                >
                  {elem.day}
                </h3>
                <br />
                <h4
                  style={{
                    fontSize: "2em",
                    marginTop: "-2rem",
                    color: getTextColor(elem.date),
                  }}
                >
                  {elem.date}
                </h4>
              </Button>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
