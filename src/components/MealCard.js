import { Col, Card, Button, Row } from "antd";
import React from "react";

export default function MealCard({ meal, setIsModalVisible, setSelectedMeal }) {
  return (
    <Col lg={8} md={12} sm={24}>
      <Card
        hoverable
        style={{ width: "100%", borderRadius: "12px" }}
        cover={
          <img
            alt="meal-thumbnail"
            style={{ borderRadius: "12px 12px 0 0" }}
            src={meal.thumbnail}
          />
        }
      >
        <h2 style={{ margin: 0 }}>{meal.name}</h2>
        <h4>
          by{" "}
          <span style={{ fontSize: "1.2em", fontWeight: 500 }}>
            {meal.restaurantName}
          </span>
        </h4>
        <Row gutter={[5, 5]}>
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
        <div className="ellipsis description">
          <p>{meal.description}</p>
        </div>
        <Button
          onClick={(e) => {
            setSelectedMeal(meal);
            setIsModalVisible(true);
          }}
          className="schedule-button"
          block
        >
          Schedule Meal
        </Button>
      </Card>
    </Col>
  );
}
