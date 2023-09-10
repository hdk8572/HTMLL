import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
        <h1>홈!</h1>
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
        <h1>목록!</h1>
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
                <th>이름</th>
                <th>가격</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              {fruitList.map((fruit) => {
                return (
                  <tr>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.amount}</td>
                    <td>
                      <button
                        onClick={() => {
                          console.log("aaa");
                          onClickdeleteHandler(fruit.name);
                        }}
                      >
                        삭제
                      </button>
                    </td>
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
        <h1>입력!</h1>
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
        <div>
          <span>이름</span>
          <input></input>
        </div>
        <div>
          <span>가격</span>
          <input></input>
        </div>
        <div>
          <span>수량</span>
          <input></input>
        </div>
        <div>
          <button onClick={onClickHandler}>등록</button>
        </div>
      </>
    );
  };

  const onClickdeleteHandler = (name) => {
    const filteredFruitList = fruitList.filter((fruit) => fruit.name != name);
    setFruitList(filteredFruitList);
  };

  const onClickHandler = (event) => {
    if (!newFruit.name || !newFruit.price || !newFruit.amount) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    const isExist = fruitList.some((fruit) => fruit.name == newFruit.name);
    if (isExist) {
      alert("이미 등록된 과일이름입니다. 이름을 다시 입력해주세요.");
      // 이름 입력란을 공란으로 만들기
      setNewFruit({ ...newFruit, ["name"]: "" });
      return;
    }

    setFruitList([...fruitList, newFruit]);
    setNewFruit({ name: "", price: "", amount: "" });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFruitList({ ...newFruit, [name]: value });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/list" element={<List></List>} />
          <Route path="/insert" element={<Insert></Insert>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
