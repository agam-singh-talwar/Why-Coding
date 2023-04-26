import { Container } from 'react-bootstrap';
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
        <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 20203 Copyright: All contents' copyright belong to Marcel Jar.
        </div>
        </footer>
    </>
)
}