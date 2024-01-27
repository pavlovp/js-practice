import { useState } from "react";
import "./App.css";

const Items = ({ items, deleteAction }) => {
  return (
    <table id="itemsTable" style={{ border: "2px solid" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  if (deleteAction) {
                    deleteAction(item.id);
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(...newItems);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formData;
    data.id = Math.floor(Math.random() * 10000);
    setItems((prevItems) => [...prevItems, { ...data }]); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    window.items = items;
  };

  return (
    <>
      <div>
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onInput={handleChange}></input>

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" onInput={handleChange}></input>

            <button type="submit">Submit</button>
          </div>
        </form>

        <Items items={items} deleteAction={deleteItem}></Items>
      </div>
    </>
  );
}

export default App;
