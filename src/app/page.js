"use client";

import Link from "next/link";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const login = () => {
    router.push("/shop/item/login");
  };
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Link href={"/home"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/contact"}>Contact</Link>
        </Container>
      </Navbar>
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export default page;
