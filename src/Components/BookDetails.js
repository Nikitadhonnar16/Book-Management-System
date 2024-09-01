import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../assets/css/BookDetail.css";
import { Button, Card } from "react-bootstrap"; // Import Card component

const BookDetails = () => {
  const { id } = useParams();
  //   console.log(id);

  const allData = useSelector((state) => state.app.users);

  const singleUser = allData.filter((cur, i) => cur.id === Number(id)); //here useParams return as string so need to convert into Number === checking type also

  console.log("SingleUser", singleUser);

  return (
    <div className=" text-start">
      <div className="row custom-style ">
        <div className="col-4">
          <img src={singleUser[0].image} className="img-style " alt="" />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-5">
              <h2>{singleUser[0].title}</h2>
              <h5>Author: {singleUser[0].author}</h5>
              <h5>Price: ₹ {singleUser[0].price}</h5>
              <h5>Language: {singleUser[0].language}</h5>
              <h5>Total Edition: {singleUser[0].totalEdition}</h5>
              <h5>Publish Year: {singleUser[0].year}</h5>
              <h5>Country: {singleUser[0].country}</h5>
              <h5>Pages: {singleUser[0].pages}</h5>
              <h5 className="flex-wrap link">Link: {singleUser[0].link}</h5>
              <h5>Description: </h5>
              <p className="fs-5">{singleUser[0].description}</p>
            </div>

            <div className="col-lg-4 d-flex  col-md-12 col-sm-12  slider align-items-center">
              <div
                className="card border-0 shadow-sm"
                style={{ width: "100%", maxWidth: "400px" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Book Details</h5>
                  <h6>{singleUser[0].title}</h6>
                  <h6 className="mb-3">Author: {singleUser[0].author}</h6>

                  <h6 className="mb-3">Language: {singleUser[0].language}</h6>

                  <h6 className="card-subtitle mb-4 text-muted">
                    Price: ₹ {singleUser[0].price}
                  </h6>
                  <div className="d-grid gap-3">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
