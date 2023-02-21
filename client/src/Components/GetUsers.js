import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import Form from "./Form";

function GetUsers() {
  const { data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  function getUser(){
    if (data) {
      let user = [...data.getAllUsersFromMongo]
      user = user.reverse()
      setUsers(user);
    }
  }

  useEffect(() => {
    getUser()
  }, []);
  return (
    <div>
       <Form userQuery={getUser}/>
       <br/>
       <table>
         <thead>
         <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
         </thead>
       <tbody>
       {users.map((val,i) => {
          return (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.email}</td>
              <td>{val.password}</td>
            </tr>
          )
        })}
       </tbody>
        
      </table>
    </div>
  );
}

export default GetUsers;
