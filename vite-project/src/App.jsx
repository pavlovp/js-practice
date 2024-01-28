import { useEffect, useState } from "react";
import Table from "./Table";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = window.localStorage.getItem("entries");
    if (savedItems) {
      const arr = JSON.parse(savedItems);
      setItems(arr);
    }
  }, []);

  const deleteItem = (id) => {
    let newItems = items.filter((item) => item.id != id);

    newItems = [...newItems];
    const str = JSON.stringify(newItems);
    window.localStorage.setItem("entries", str);
    setItems(newItems);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formData;
    data.id = Math.floor(Math.random() * 10000);
    setItems((prevItems) => {
      const newItems = [...prevItems, { ...data }]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      const str = JSON.stringify(newItems);
      window.localStorage.setItem("entries", str);
      return newItems;
    });

    window.items = items;
  };

  return (
    <>
      <div className="appContainer">
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onInput={handleChange}></input>

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" onInput={handleChange}></input>

            <button type="submit">Submit</button>
          </div>
        </form>

        <Table items={items} deleteAction={deleteItem}></Table>
      </div>
    </>
  );
}

export default App;
