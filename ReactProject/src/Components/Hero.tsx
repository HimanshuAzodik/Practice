import { useCallback, useEffect, useState } from "react";
import "./CSS/hero.css";
import axios from "axios";

type Objuser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  adress: never;
  website: string;
  company: never;
};

const Hero = () => {
  const [users, setusers] = useState([]);

  const fetchUser = useCallback(async () => {
    const respo = await axios.get("https://jsonplaceholder.typicode.com/Users");
    const resData = await respo.data;
    console.log(resData);

    setusers(resData);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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

        {users.map((u: Objuser, i: number) => (
          <tr key={i}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.name}email</td>
            <td>{u.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Hero;
