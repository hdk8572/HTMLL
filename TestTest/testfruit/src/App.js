import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {

  const [newFruit, setNewFruit] = useState({
    name: "",
    price: "",
    amount: "",
  });
  
  const [fruitList, setFruitList] = useState([
    {
      name: "수박",
      price: "10000",
      amount: "20",
    },
    {
      name: "참외",
      price: "3000",
      amount: "10",
    },
  ]);




  const Home = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/list">과일목록</Link>
            </li>
            <li>
              <Link to="/insert">과일추가</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  };

  const List = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/insert">과일추가</Link>
            </li>
          </ul>
        </nav>
        <div>
          <table>
            <thead>
              <tr>
                <td>이름</td>
                <td>가격</td>
                <td>수량</td>
              </tr>
            </thead>
            <tbody>
              {fruitList.map((fruit) => {
                return (
                  <tr>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.amount}</td>
                    <td><button>삭제</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const Insert = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/list">과일목록</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  };

  const onClickdeleteHandler = (name) = {};

  const onClickHandler = (event) = {};

  const onChangeHandler = (event) = {
    const {name, value} = event.target;
    setFruitList
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/list" element={<List></List>}/>
          <Route path="/insert" element={<Insert></Insert>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
