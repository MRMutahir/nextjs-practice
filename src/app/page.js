import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const page = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>    
            <Link href={"/home"}  >Home</Link>
            <Link href={"/about"}  >About</Link>
            <Link href={"/shop"}  >Shop</Link>
            <Link href={"/contact"}  >Contact</Link>     
        </Container>
      </Navbar>
    </div>
  );
};

export default page;
