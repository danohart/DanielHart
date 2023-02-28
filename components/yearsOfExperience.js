import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function YearsOfExperience() {
  const time = Date.parse('2009-04-12T09:00');

  const [data, setData] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const now = new Date().getTime();
  const seconds = (now - time) / 1000;

  useEffect(() => {
    setData({
      years: seconds / 31556952,
      days: seconds / 86400,
      hours: seconds / 3600,
      minutes: seconds / 60,
      seconds: seconds,
    });
  }, []);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      months: prevState.years * 12,
      weeks: prevState.days / 7,
    }));
  }, []);

  return (
    <Row className="mb-2">
      <Col xs={6} sm={6} md={2} lg={2} className="experience">
        <div className="experience-title">Seconds</div>
        <div className="experience-number">
          {Math.floor(data.seconds).toLocaleString('en-US')}
        </div>
      </Col>
      <Col xs={6} sm={6} md={2} lg={2} className="experience">
        <div className="experience-title">Hours</div>
        <div className="experience-number">
          {Math.floor(data.hours).toLocaleString('en-US')}
        </div>
      </Col>
      <Col xs={6} sm={6} md={2} lg={2} className="experience">
        <div className="experience-title">Days</div>
        <div className="experience-number">
          {Math.floor(data.days).toLocaleString('en-US')}
        </div>
      </Col>
      <Col xs={6} sm={6} md={2} lg={2} className="experience">
        <div className="experience-title">Weeks</div>
        <div className="experience-number">
          {Math.floor(data.weeks).toLocaleString('en-US')}
        </div>
      </Col>
      <Col xs={6} sm={6} md={2} lg={2} className="experience">
        <div className="experience-title">Months</div>
        <div className="experience-number">
          {Math.floor(data.months).toLocaleString('en-US')}
        </div>
      </Col>
      <Col xs={6} sm={6} md={2} lg={2} className="experience">
        <div className="experience-title">Years</div>
        <div className="experience-number">
          {Math.floor(data.years).toLocaleString('en-US')}
        </div>
      </Col>
    </Row>
  );
}
