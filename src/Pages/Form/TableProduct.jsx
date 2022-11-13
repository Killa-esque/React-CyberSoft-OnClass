import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    const { arrProduct, handleDelProduct } = this.props;
    return (
      <table className='table'>
        <thead className='bg-dark text-white w-100'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Product Type</th>
            <th>Description</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map(({ id, name, price, image, productType, description }, index) => {
            return <tr key={index}>
              <td>{ id }</td>
              <td>{ name }</td>
              <td><img src={ image } alt="" width={50} height={50} /></td>
              <td>{ price }</td>
              <td>{ productType }</td>
              <td>{ description }</td>
              <td>
                <button className='btn btn-danger mx-2' onClick={() => {
                  this.props.handleDelProduct(id);
                }}>
                  <i className='fa fa-trash'></i>
                </button>
                <button className='btn btn-primary mx-2'>
                  <i className='fa fa-edit'></i>
                </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}
