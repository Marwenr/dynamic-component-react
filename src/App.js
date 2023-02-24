import { Container } from "react-bootstrap";
import "./App.css";
import ShapeOne from "./components/Layout/ShapeOne";
import ShapeTwo from "./components/Layout/ShapeTwo";

function App() {
  const users = [
    {
      componentName: ShapeTwo,
      data: {
        id: 1,
        userName: "Marwen",
        email: "Marwen@gmail.com",
        age: 27,
        gender: "Male",
      },
    },
    {
      componentName: ShapeOne,
      data: {
        id: 2,
        userName: "Manel",
        email: "Manel@gmail.com",
        age: 28,
        gender: "Female",
      },
    },
    {
      componentName: ShapeTwo,
      data: {
        id: 3,
        userName: "Ahmed",
        email: "Ahmed@gmail.com",
        age: 27,
        gender: "Male",
      },
    },
  ];

  const fetchData = users.map((el) => {
    let ComponentName = el.componentName;
      return <ComponentName key={el.data.id} item={el.data} />
  });

  return <Container className="App mt-5">{fetchData}</Container>;
}

export default App;
