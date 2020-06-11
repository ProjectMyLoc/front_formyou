import React from "react";
import { useSelector } from "react-redux";
import { NewCourse } from "../components/Admin/NewCourse";

const AdminBoard = () => {
  const user = useSelector(state => state.auth.user);
  const { id, email } = user

  return (
    <>
      <div className="container mt-5">
        <h1>Welcome on admin board.</h1>
        <p>id : {id}</p>
        <p>mail : {email}</p>
      </div>
      <div>
        <NewCourse />
      </div>
    </>
  )
};

export default AdminBoard;
