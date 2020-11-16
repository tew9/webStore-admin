import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, addCategories } from '../../actions/category.action';
import Input from '../../components/UI/Inputs'

/**
* @author
* @function Categories
**/

const Categories = (props) => {
  const dispatch = useDispatch();
  const {categoryList} = useSelector(state => state.category);
  const [catName, setCatName] = useState('');
  const [parentId, setParentId] = useState('');
  const [catImage, setCatImage] = useState('');
  const [show, setShow] = useState(false);

  

  useEffect(() => {
    dispatch(getAllCategories())
  }, []);

  const handleClose = () => {
    const form = new FormData();
    form.append("name", catName);
    form.append("parentId", parentId);
    form.append("categoryPicture", catImage);
    dispatch(addCategories(form, categoryList))
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    let categoryList = [];
    for(let category of categories){
      categoryList.push(
        <ul>
          <li key={category._id}>
            {category.name}
            {category.children.length > 0 ?
              (<ul key={category.children.name}>{renderCategories(category.children)}</ul>): null
            }
          </li>
        </ul>
      )
    }
    return categoryList;
  }

  const createCatList = (categories, options = []) => {
    for(let category of categories){
      options.push({value: category._id, name: category.name})
      if(category.children.length > 0){
        createCatList(category.children, options);
      }
    }
    return options;
  }

  const handleCatImage = (e) => {
    setCatImage(e.target.files[0])
  }

  return(
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h1>Category</h1>
              <button  variant="primary" onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {renderCategories(categoryList)}
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input className='form-control' 
            value={catName}
            placeholder={'Category Name'}
            onChange={(e)=> setCatName(e.target.value)}
          />&nbsp;

          <select className='form-control' onChange={(e) => setParentId(e.target.value)}>
            {createCatList(categoryList).map(option => 
              <option value={option.value} key={option.value}>
                {option.name}
              </option>)
            }
          </select>&nbsp;

          <input className='form-control' type="file" name="categoryImage"  onChange={handleCatImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
   )
 }
export default Categories