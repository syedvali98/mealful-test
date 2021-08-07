import { Col, Row, Button, Skeleton, Empty, Modal } from "antd";
import React, { useEffect, useState } from "react";
import DateSelector from "../components/DateSelector";
import Notification from "../components/Notification";
import DescriptionModal from "../components/DescriptionModal";
import "../components/components.css";
import MealCard from "../components/MealCard";
import { getMeals } from "../helpers/HomeCalls";

export default function Home() {
  const [mealTime, setMealTime] = useState("Lunch");
  const [mealsLoaded, setMealsLoaded] = useState(false);
  const [mealOptions, setMealOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  useEffect(() => {
    getMealsFromAPI();
  }, []);

  const getMealsFromAPI = (customProp) => {
    setMealsLoaded(false);
    getMeals(customProp).then((a) => {
      setMealOptions(a.data);
      setMealsLoaded(true);
    });
  };

  useEffect(() => {
    if (mealsLoaded && mealTime !== "Test") {
      getMealsFromAPI(mealsLoaded);
    }
  }, [mealTime]);

  return (
    <Row justify="center">
      <Col span={24}>
        <Notification />
      </Col>
      <Col span={24}>
        <DateSelector getMealsFromAPI={getMealsFromAPI} />
      </Col>
      <Col span={17} style={{ padding: "15px 0" }}>
        <Row justify="space-between">
          <Col>
            <h1 style={{ fontWeight: 500, fontSize: "2.2em" }}>
              {mealTime} Menu
            </h1>
          </Col>
          <Col>
            <Button
              className={`${
                mealTime === "Test" ? "active-toggle-button" : "toggle-button"
              }`}
              size={"large"}
              onClick={() => {
                setMealOptions([]);
                setMealTime("Test");
              }}
            >
              Test
            </Button>
            <Button
              className={`${
                mealTime === "Lunch" ? "active-toggle-button" : "toggle-button"
              }`}
              size={"large"}
              onClick={() => setMealTime("Lunch")}
            >
              Lunch
            </Button>
            <Button
              className={`${
                mealTime === "Dinner" ? "active-toggle-button" : "toggle-button"
              }`}
              size={"large"}
              onClick={() => setMealTime("Dinner")}
            >
              Dinner
            </Button>
          </Col>
        </Row>
        {mealsLoaded ? (
          <Row
            justify="center"
            gutter={[30, 30]}
            style={{ padding: "15px 30px" }}
          >
            {mealOptions.length ? (
              mealOptions.map((meal) => (
                <MealCard
                  meal={meal}
                  setIsModalVisible={setIsModalVisible}
                  setSelectedMeal={setSelectedMeal}
                />
              ))
            ) : (
              <Col>
                <Empty description={<span>No meals found.</span>}></Empty>
              </Col>
            )}
          </Row>
        ) : (
          <Skeleton active />
        )}
      </Col>
      <Modal
        title={<h2>{`${mealTime} Menu`}</h2>}
        visible={isModalVisible}
        closable
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <DescriptionModal meal={selectedMeal} />
      </Modal>
    </Row>
  );
}
