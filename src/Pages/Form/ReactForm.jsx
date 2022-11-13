import React, { Component } from "react";
import TableProduct from "./TableProduct";

export default class ReactForm extends Component {
  state = {
    formValue: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
      productType: "phone",
    },
    formError: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
      productType: "",
    },
    valid: false,
    arrProduct: [
      { id: '1', name: 'iPhone X', image: 'https://i.pravatar.cc?u=1', price: 1000, productType: 'phone' },
      { id: '2', name: 'ROG ZEPHYRUS', image: 'https://i.pravatar.cc?u=2', price: 2000, productType: 'laptop' }
    ]
  };

  handleSubmit = (e) => {
    // Ngăn sự kiện reload trên browser
    e.preventDefault();
    if (!this.checkFormValid()) {
      alert('Form is invalid')
      return;
    }

    // Thêm sản phẩm vào arrProduct => cập nhật state arrProduct
    let arrProduct = this.state.arrProduct;

    // Push
    arrProduct.push({ ...this.state.formValue });

    // Set State
    this.setState({
      arrProduct: arrProduct
    })

    console.log("submit", this.state.formValue);
  };

  checkFormValid = () => {
    // return True | False: true khi valid, false khi invalid
    /*
      Form hợp lệ khi: các trường formError = null, và các trường value tương ứng phải khác rỗng
    */
    let { formError, formValue } = this.state;
    for (let key in formError) {
      if (formError[key] !== '' || formValue[key] === '') {
        return false;
      }
    }
    return true;
  }

  handleChangeInput = (e) => {
    /*
      Trên 1 thẻ HTML sẽ có 2 dạng thuộc tính properties : là các thuộc tính có sẵn của thẻ như id, className, name, value, style ... 
      attribute (thuộc tính mở rộng do mình tự định nghĩa): do mình thêm vào -> không thể dùng dom.tenTHuocTinh mà phải dùng dom.getAttribute('ten__Attributes')
    */

    let { value, name } = e.target;
    let dataType = e.target.getAttribute('data-type');
    let dataMaxLength = e.target.getAttribute('data-max-length');

    // Lấy object formValue ra xử lí riêng
    let newFormValue = this.state.formValue;
    newFormValue[name] = value;

    // Xử lý cho formError
    let newFormError = this.state.formError;
    let messasge = '';
    if (value.trim() === '') {
      messasge = name + ' cannot be blank !'
    }
    else {
      if (dataType === 'number') {
        let regexNumber = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
        if (!regexNumber.test(value)) {
          messasge = name + ' is not valid !'
        }
      }
      if (value.length >= dataMaxLength && dataMaxLength !== null) {
        messasge = name + ` no more than ${dataMaxLength} characters`
      }
    }
    newFormError[name] = messasge;

    // Lấy ra thì setState() lại
    this.setState(
      {
        formValue: newFormValue,
        formError: newFormError,
      }, () => {
        // Gọi hàm check lỗi sau mỗi lần cập nhật value và error từ người dùng nhập
        this.setState({
          valid: this.checkFormValid()
        })
      }
    );
    console.log(name, value);
  };

  handleDelProduct = (idClick) => {
    let arrProduct = this.state.arrProduct.filter(product => product.id != idClick);
    // Cập nhật lại
    this.setState({
      arrProduct: arrProduct
    })
  }

  render() {
    return (
      <>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Create Product</h3>
          <div className="card">
            <div className="card-header">Product info</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>id</p>
                    <input
                      data-max-length="10"
                      type="text"
                      name="id"
                      className="form-control"
                      onInput={this.handleChangeInput}
                    />
                    {
                      this.state.formError.id &&
                      <p className="alert alert-danger mt-2">
                        {this.state.formError.id}
                      </p>
                    }
                  </div>
                  <div className="form-group">
                    <p>name</p>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onInput={this.handleChangeInput}
                    />
                    {
                      this.state.formError.name &&
                      <p className="alert alert-danger mt-2">
                        {this.state.formError.name}
                      </p>
                    }
                  </div>
                  <div className="form-group">
                    <p>price</p>
                    <input
                      data-type="number"
                      type="text"
                      name="price"
                      className="form-control"
                      onInput={this.handleChangeInput}
                    />
                    {
                      this.state.formError.price &&
                      <p className="alert alert-danger mt-2">
                        {this.state.formError.price}
                      </p>
                    }
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>image</p>
                    <input
                      className="form-control"
                      name="image"
                      onInput={this.handleChangeInput}
                    />
                    {
                      this.state.formError.image &&
                      <p className="alert alert-danger mt-2">
                        {this.state.formError.image}
                      </p>
                    }
                  </div>
                  <div className="form-group">
                    <p>productType</p>
                    <select
                      name="productType"
                      className="form-control"
                      onInput={this.handleChangeInput}
                    >
                      <option value="phone">phone</option>
                      <option value="tablet">tablet</option>
                      <option value="laptop">laptop</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>description</p>
                    <input
                      className="form-control"
                      name="description"
                      onInput={this.handleChangeInput}
                    />
                    {
                      this.state.formError.description &&
                      <p className="alert alert-danger mt-2">
                        {this.state.formError.description}
                      </p>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success m-2" disabled={!this.state.valid}>
                Create
              </button>
            </div>
          </div>
        </form>
        <div className="container mt-2 w-100">
          <TableProduct arrProduct={this.state.arrProduct} handleDelProduct={this.handleDelProduct} />
        </div>
      </>
    );
  }
}
