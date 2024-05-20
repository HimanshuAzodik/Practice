import { useEffect, useState } from "react";
import "./CSS/hero.css";
import axios from "axios";

const Hero = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/Users").then((res) => {
      setusers(res.data);
      console.log(users);
    });
  }, []);

  return (
    <div>
      <h1>Table</h1>

      <table id="table">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
        </tr>

        {users.map((p, i) => (
          <tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.username}</td>
            <td>{p.name}email</td>
            <td>{p.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Hero;
