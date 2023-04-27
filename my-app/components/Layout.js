import { Container,Nav } from 'react-bootstrap';
import Navbar from './navbar';

export default function Layout(props){
return (
    <>
        <Navbar />
        <br />
        <Container>
            {props.children}
        </Container>
        <br />
        <Nav className="navbar  navbar-light bg-light">
        <div className="container text-center">
        <a className="navbar-brand" href="#">All contents' copyright belong to ????.</a>
        </div>
        </Nav>
    </>
)
}