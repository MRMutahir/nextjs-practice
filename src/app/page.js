import Link from "next/link";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { resolve } from "styled-jsx/css";
// import { useRouter } from "next/navigation";
const jsonData = async () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const page = async () => {
  const data = await jsonData();
  console.log(data, ">>>>>>>>>>>>>>");

  // console.log(  jsonData());
  // const router = useRouter();
  // const login = () => {
  //   router.push("/shop/item/login");
  // };
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
      <Container>
        <ul>
          {data.map((ele, index) => (
            <li>{ele.title}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default page;
