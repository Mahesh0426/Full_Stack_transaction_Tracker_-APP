import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-primary text-white text-center py-5">
        <h1>Finance Tracker</h1>
        <p className="lead">Take control of your finances</p>
      </header>

      <Container className="py-5">
        <Row className="mb-4">
          <Col md={8} className="mx-auto text-center">
            <h2>Welcome to Your Financial Dashboard</h2>
            <p className="lead">
              Track expenses, set budgets, and achieve your financial goals with
              ease.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Expense Tracking</Card.Title>
                <Card.Text>
                  Log and categorize your expenses to understand your spending
                  habits.
                </Card.Text>
                <Button variant="primary">Track Expenses</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Budget Planning</Card.Title>
                <Card.Text>
                  Create and manage budgets to keep your finances on track.
                </Card.Text>
                <Button variant="primary">Plan Budget</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Financial Insights</Card.Title>
                <Card.Text>
                  Get personalized insights and tips to improve your financial
                  health.
                </Card.Text>
                <Button variant="primary">View Insights</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="mx-auto text-center">
            <h3>Ready to take control of your finances?</h3>
            <Link to="/signup">
              <Button variant="success" size="lg" className="mt-3">
                Get Started Now
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Finance Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
