import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../app/features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import BookDetails from "./BookDetails";

const AddBook = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    // console.log(users);
  };

  // send data to userDetailSlice

  const submitData = (e) => {
    e.preventDefault();
    console.log("users....", users);

    dispatch(createUser(users));
    navigate("/home");
  };

  return (
    <div>
      <form className=" w-50 mx-auto my-5" onSubmit={submitData}>
        <h2 className="mb-4">Add New Book</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            name="title"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Language
          </label>
          <input
            type="text"
            name="language"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="country"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Link
          </label>
          <input
            type="text"
            name="link"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            total Edition
          </label>
          <input
            type="text"
            name="totalEdition"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Published Year
          </label>
          <input
            type="text"
            name="year"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            onChange={userData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Pages
          </label>
          <input
            type="text"
            name="pages"
            onChange={userData}
            className="form-control w-75"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
