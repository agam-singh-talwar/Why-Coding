import { Container, Nav } from "react-bootstrap";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <br />
      <Container>{props.children}</Container>
      <br />
      <Nav className="navbar  navbar-light bg-light">
        <div className="container text-center">
          <p className="navbar-brand" href="#">
            All contents' copyright belong to{" "}
            <a
              href="https://www.senecacollege.ca/home.html/"
              class="text-danger"
            >
              Seneca
            </a>{" "}
            and the{" "}
            <a href="/students" class="text-sucess">
              Students
            </a>{" "}
            .
          </p>
        </div>
      </Nav>
    </>
  );
}
