/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopNavbar = (props) => {
  const {userName} = props

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <b>{userName}</b>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;