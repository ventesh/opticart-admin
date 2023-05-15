import React, { Component } from "react";
import { variables } from "./Variable.js";

export class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prds: [],
            ProductId: 0,
            ProductName: "",
            Description: "",
            VendorId: 0,
            CategoryId: 0,
            Quantity: 0,
            ProductPrice: 0,
            Size: 0,
            Color: "",
            InStockProductNumber: 0,
            ProductImage: ""
        }

    }


    changeProductName = (e) => {
        this.setState({ ProductName: e.target.value });
    }

    changeDescription = (d) => {
        this.setState({ Description: d.target.value });
    }

    changeVendorId = (v) => {
        this.setState({ VendorId: v.target.value });
    }

    changeCategoryId = (c) => {
        this.setState({ CategoryId: c.target.value });
    }

    changeQuantity = (q) => {
        this.setState({ Quantity: q.target.value });
    }

    changeProductPrize = (pr) => {
        this.setState({ ProductPrice: pr.target.value });
    }

    changeSize = (s) => {
        this.setState({ Size: s.target.value });
    }

    changeColor = (cl) => {
        this.setState({ Color: cl.target.value });
    }

    changeInStockNumber = (isn) => {
        this.setState({ InStockProductNumber: isn.target.value });
    }

    changeProductIamge = (pi) => {
        this.setState({ ProductImage: pi.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: "Add Product",
            ProductId: 0,
            ProductName: "",
            Description: "",
            VendorId: 0,
            CategoryId: 0,
            Quantity: 0,
            ProductPrice: 0,
            Size: 0,
            Color: "",
            InStockProductNumber: 0,
            ProductImage: ""
        });
    }

    createClick() {
        fetch(variables.API_URL + 'ProductTbls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductName: this.state.ProductName,
                Description: this.state.Description,
                VendorId: this.state.VendorId,
                CategoryId: this.state.CategoryId,
                Quantity: this.state.Quantity,
                ProductPrice: this.state.ProductPrice,
                Size: this.state.Size,
                Color: this.state.Color,
                InStockProductNumber: this.state.InStockProductNumber,
                ProductImage: this.state.ProductImage
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert("Data inserted Successfully");
                this.refreshList();
            }, (error) => {
                alert(error);
            })
    }

    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + 'ProductTbls/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert('data Deleted!!');
                    this.refreshList();
                }, (error) => {
                    alert('Data deleted!!')
                })
        }
    }

    refreshList() {
        fetch(variables.API_URL + 'ProductTbls')
            .then(responce => responce.json())
            .then(data => {
                this.setState({ prds: data });
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const {
            prds,
            modalTitle, 
            ProductId,           
            ProductName,
            Description,
            VendorId,
            CategoryId,
            Quantity,
            ProductPrice,
            Size,
            Color,
            InStockProductNumber,
            ProductImage
        } = this.state;

        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Product
                </button>
                <table className="table table-stripped">
                    <thead>
                        <th>
                            ProductId
                        </th>
                        <th>
                            ProductName
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            VendorId
                        </th>
                        <th>
                            CategoryId
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            ProductPrice
                        </th>
                        <th>
                            Size
                        </th>
                        <th>
                            Color
                        </th>
                        <th>
                            InStockProductNumber
                        </th>
                        <th>
                            ProductImage
                        </th>
                        <th>
                            Options
                        </th>
                    </thead>
                    <tbody>
                        {prds.map(dep =>
                            <tr key={dep.ProductId}>
                                <td>{dep.ProductId}</td>
                                <td>{dep.ProductName}</td>
                                <td>{dep.Description}</td>
                                <td>{dep.VendorId}</td>
                                <td>{dep.CategoryId}</td>
                                <td>{dep.Quantity}</td>
                                <td>{dep.ProductPrice}</td>
                                <td>{dep.Size}</td>
                                <td>{dep.Color}</td>
                                <td align="center">{dep.InStockProductNumber}</td>
                                <td>{dep.ProductImage}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z" />
                                            <path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z" />
                                        </svg>
                                    </button>&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(dep.ProductId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Product Name</span>
                                    <input type="text" className="form-control"
                                        value={ProductName}
                                        onChange={this.changeProductName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Description</span>
                                    <input type="text" className="form-control"
                                        value={Description}
                                        onChange={this.changeDescription} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Vendor</span>
                                    <input type="number" className="form-control"
                                        value={VendorId}
                                        onChange={this.changeVendorId} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Category</span>
                                    <input type="number" className="form-control"
                                        value={CategoryId}
                                        onChange={this.changeCategoryId} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Quantity</span>
                                    <input type="number" className="form-control"
                                        value={Quantity}
                                        onChange={this.changeQuantity} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Product Prize</span>
                                    <input type="number" className="form-control"
                                        value={ProductPrice}
                                        onChange={this.changeProductPrize} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Size</span>
                                    <input type="number" className="form-control"
                                        value={Size}
                                        onChange={this.changeSize} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Color</span>
                                    <input type="text" className="form-control"
                                        value={Color}
                                        onChange={this.changeColor} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">In Stock Product</span>
                                    <input type="number" className="form-control"
                                        value={InStockProductNumber}
                                        onChange={this.changeInStockNumber} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Product Image</span>
                                    <input type="text" className="form-control"
                                        value={ProductImage}
                                        onChange={this.changeProductIamge} />
                                </div>
                                {ProductId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {ProductId !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}
                                    >Update</button>
                                    : null}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}