import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row, Table } from "react-bootstrap";
import Input from "../../components/UI/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../actions/product.action";
import ModalUI from "../../components/UI/Modal/modal";

/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [pictures, setPictures] = useState([]);
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleSave = () => {
    if (name && price && categoryId && quantity) {
      const form = new FormData();
      form.append("name", name);
      form.append("categoryId", categoryId);
      form.append("productPicture", pictures);
      form.append("description", description);
      form.append("price", price);
      form.append("quantity", quantity);
      dispatch(addProducts(form));
      setShow(false);
    }
  };

  const handleShow = () => setShow(true);

  const renderProducts = (products) => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Pictures</th>
          </tr>
        </thead>
        <tbody>
          {
            products? products.map((product, i) => {
              return (
                <tr key={i}>
                <td>{i}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td>Picture</td>
              </tr>
              )
            })
            : null
          }
        </tbody>
      </Table>
    );
  };

  const handleProductPictures = (e) => {
    setPictures([...pictures, e.target.files[0]]);
  };

  const createCatList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCatList(category.children, options);
      }
    }
    return options;
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>Products</h1>
              <button variant="primary" onClick={handleShow}>
                Add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>{renderProducts(productList)} </Col>
        </Row>
      </Container>

      <ModalUI
        show={show}
        handleClose={handleClose}
        title="Add New Products"
        handleSave={handleSave}
      >
        <Input
          className="form-control"
          value={name}
          placeholder={"Product Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="form-control"
          type="number"
          value={price}
          placeholder={"Price"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          className="form-control"
          type="number"
          value={quantity}
          placeholder={"Quanity"}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          className="form-control"
          value={description}
          placeholder={"Description"}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {createCatList(categoryList).map((option, i) => (
            <option value={option.value} key={i}>
              {option.name}
            </option>
          ))}
        </select>
        &nbsp;
        {pictures.length > 0
          ? pictures.map((pic, i) => <div key={i}>{pic.name}</div>)
          : ""}
        <input
          className="form-control"
          type="file"
          name="pictures"
          onChange={handleProductPictures}
        />
      </ModalUI>
    </Layout>
  );
};

export default Products;
