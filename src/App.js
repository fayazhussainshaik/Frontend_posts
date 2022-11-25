import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";
import EditUser from "./components/EditUSer";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  return (
    <div className="App">
      <h3>POSTS</h3>

      <br />
      <AddUser onAdd={onAdd} />

      <div>
        {users.map((user) => (
          <User
            userid={user.userId}
            id={user.id}
            title={user.title}
            body={user.body}
            onDelete={onDelete}
            onEdit={<EditUser onEdit={onEdit} />}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
