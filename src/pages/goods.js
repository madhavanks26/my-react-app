import React, { useState, useEffect } from "react";
import axios from "axios";
import { addGoods } from "../util/api";
import { showSuccessAlert, showFailureAlert } from "../util/alert";

const Goods = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(""); // selected value
  const [goodsNameOptions, setgoodsNameOptions] = useState([
    { value: "PP COVER", label: "PP COVER" },
    { value: "MUDICHU COVER", label: "MUDICHU COVER" },
    { value: "SUTLI", label: "SUTLI" },
  ]);
  const [goodsBrandOptions, setgoodsBrandOptions] = useState([
    { value: "THANGARATHAM", label: "THANGARATHAM" },
    { value: "ROYAL", label: "ROYAL" },
    { value: "MARUTHI", label: "MARUTHI" },
  ]);
  const [goodsFormData, setFormData] = useState([
    {
      goodsName: "",
      goodsBrand: "",
      goodsSize: "",
      goodsDesc: "",
      goodsUnitOfMeasurement: "",
      availableStock: "0",
      qtySold: "0",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedGoods = [...goodsFormData];
    updatedGoods[index][name] = value;
    setFormData(updatedGoods);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(JSON.stringify(goodsFormData));
      const response = await addGoods(goodsFormData);
      console.log(response.data);
      // const res = await fetch("/addGoods", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify([goodsFormData]),
      // })

      // const data = await res.json();
      // console.log(data);
      // setResponse(data);
      showSuccessAlert("Goods Added Successfully");
    } catch (error) {
      console.error("Status:", error.response?.status);
      console.error("Message:", error.response?.data?.error);
      //alert("Failed to submit form");
      const html =
        "<h3>" +
        error.response?.status +
        "</h3><br/><h4>" +
        error.response?.data?.error +
        "</h4>";
      showFailureAlert(html);
    }
  };

  useEffect(() => {
    axios
      .get("/listGoods")
      .then((response) => {
        console.log(response);
        setPosts(response.data[0]);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th>Goods Name</th>
                <th>Goods Brand</th>
                <th>Goods Size</th>
                <th>Goods Description</th>
                <th>Goods Available</th>
                <th>Goods Sold</th>
                <th>Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  className={
                    post["goodsStatus"] === "ACTIVE"
                      ? "table-success"
                      : "table-danger"
                  }
                  key={index}
                >
                  <td>{post["goodsName"]}</td>
                  <td>{post["goodsBrand"]}</td>
                  <td>{post["goodsSize"]}</td>
                  <td>{post["goodsDesc"]}</td>
                  <td>
                    {post["availableStock"]}
                    {post["goodsUnitOfMeasurement"]}
                  </td>
                  <td>
                    {post["qtySold"]}
                    {post["goodsUnitOfMeasurement"]}
                  </td>
                  <td>
                    <i className="bi bi-pencil"></i>&nbsp;
                    {/* <p>{post['goodsId']}</p> */}
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <div className="floating-button">
            <i
              data-bs-toggle="modal"
              data-bs-target="#formModal"
              className="bi bi-plus-circle"
            ></i>
          </div>
          <div
            className="modal modal-lg"
            id="formModal"
            tabIndex="-1"
            aria-labelledby="formModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="formModalLabel">
                    Add Goods Form
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form id="modalForm" onSubmit={handleSubmit}>
                    {goodsFormData.map((good, index) => (
                      <div key={index}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">
                                Good Name
                              </label>
                              <select
                                type="text"
                                className="form-control"
                                id="goodsName"
                                name="goodsName"
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Enter your good name"
                                required>
                                  <option value="" disabled selected>Select Goods Name</option>
                                {goodsNameOptions.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                                </select>
                              
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">
                                Good Brand
                              </label>
                              <select
                                type="text"
                                className="form-control"
                                id="goodsBrand"
                                name="goodsBrand"
                                value={good.goodsBrand}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Enter your good brand name"
                                required
                              >
                                <option value="" disabled selected>Select Goods Brand</option>
                                {goodsBrandOptions.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </select>                              
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label htmlFor="goodsSize" className="form-label">
                                Good Size
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="goodsSize"
                                name="goodsSize"
                                value={good.goodsSize}
                                onChange={(e) => handleChange(e, index)}
                                pattern='^\d{1,2}[X]\d{1,2}$'
                                title='Allowed numeric single or double digit and letter X with format as 3X3 or 12X12'
                                placeholder="Enter your good size"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label
                                htmlFor="goodsUnitOfMeasurement"
                                className="form-label"
                              >
                                Good Unit
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="goodsUnitOfMeasurement"
                                name="goodsUnitOfMeasurement"
                                value={good.goodsUnitOfMeasurement}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Enter your good unit"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12"></div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="goodsDesc" className="form-label">
                            Good Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="goodsDesc"
                            name="goodsDesc"
                            value={good.goodsDesc}
                            onChange={(e) => handleChange(e, index)}
                            placeholder="Enter your good description"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <input
                            type="hidden"
                            className="form-control"
                            id="availableStock"
                            name="availableStock"
                            value={good.availableStock}
                            placeholder="Enter Available Stock"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="hidden"
                            className="form-control"
                            id="qtySold"
                            name="goodsSize"
                            value={good.goodsSize}
                            placeholder="Enter your good size"
                            required
                          />
                        </div>
                      </div>
                    ))}

                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
