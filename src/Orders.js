import React, { Component } from "react";
import { variables } from "./Variable.js";

export class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prds: [],
            cust: [],
            payments: [],
            orders: [],
            modalTitle: "",
            orders: [],
            OrderId: 0,
            ProductId: 0,
            CustomerId: 0,
            Paymentid: 0,
            OrderDate: "",
            Shipdate: "",
            PaymentDate: ""
        }

    }

    changeProductid = (p) => {
        this.setState({ ProductId: p.target.value });
    }

    changecustomerid = (c) => {
        this.setState({ CustomerId: c.target.value });
    }

    changePaymentid = (py) => {
        this.setState({ Paymentid: py.target.value });
    }

    changeOrderdate = (o) => {
        this.setState({ OrderDate: o.target.value });
    }

    changeShipdate = (s) => {
        this.setState({ Shipdate: s.target.value });
    }

    changePaymentdate = (pd) => {
        this.setState({ PaymentDate: pd.target.value });
    }


    addClick() {
        this.setState({
            modalTitle: "Add Order",
            OrderId: 0,
            ProductId: 0,
            CustomerId: 0,
            Paymentid: 0,
            OrderDate: "",
            Shipdate: "",
            PaymentDate: ""
        });
    }

    createClick() {
        fetch(variables.API_URL + 'OrdersTbls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductId: this.state.ProductId,
                CustomerId: this.state.CustomerId,
                Paymentid: this.state.Paymentid,
                OrderDate: this.state.OrderDate,
                Shipdate: this.state.Shipdate,
                PaymentDate: this.state.PaymentDate
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert('Data Inserted');
                this.refreshList();
            }, (error) => {
                alert('Data Inserted');
            })
    }

    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + 'OrdersTbls/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert('data inserted');
                    this.refreshList();
                }, (error) => {
                    alert('Data deleted!!')
                })
        }
    }

    refreshList(){
        fetch(variables.API_URL+'OrdersTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({orders:data});
        })

        fetch(variables.API_URL + 'ProductTbls')
            .then(responce => responce.json())
            .then(data => {
                this.setState({ prds: data });
        })

        fetch(variables.API_URL+'CustomerTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({cust:data});
        })  

        fetch(variables.API_URL+'PaymentTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({payments:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    changeCustomerId = (e) => {
        this.setState({ CustomerId: e.target.value });
    }
    
    changeProductId = (e) => {
        this.setState({ ProductId: e.target.value });
    }

    changePaymentid = (e) => {
        this.setState({ Paymentid: e.target.value });
    }

    changeOrderDate = (e) => {
        this.setState({ OrderDate: e.target.value });
    }
    changeShipdate = (e) => {
        this.setState({ Shipdate: e.target.value });
    }
    changePaymentDate = (e) => {
        this.setState({ PaymentDate: e.target.value });
    }

    addClick(){
        this.setState({
            modalTitle: "Add Orders",
            OrderId: 0,
            ProductId: 0,
            CustomerId: 0,
            Paymentid: 0,
            OrderDate: "",
            Shipdate: "",
            PaymentDate: ""
        });
    }

    
    createClick() {
        fetch(variables.API_URL + 'OrdersTbls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductId: this.state.ProductId,
                CustomerId: this.state.CustomerId,
                Paymentid: this.state.Paymentid,
                OrderDate: this.state.OrderDate,
                Shipdate: this.state.Shipdate,
                PaymentDate: this.state.PaymentDate
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert('Data Inserted');
                this.refreshList();
            }, (error) => {
                alert('Data Inserted');
            })
    }

    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + 'OrdersTbls/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert('data inserted');
                    this.refreshList();
                }, (error) => {
                    alert('Data deleted!!')
                })
        }
    }

    render() {
        const {
            prds,
            cust,
            payments,
            orders,
            modalTitle,
            OrderId,
            ProductId,
            CustomerId,
            Paymentid,
            OrderDate,
            Shipdate,
            PaymentDate
        }=this.state;

        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Orders
                </button>
                <table className="table table-stripped">
                    <thead>
                        <th>
                            OrderId
                        </th>
                        <th>
                            ProductId
                        </th>
                        <th>
                            CustomerId
                        </th>
                        <th>
                            Paymentid
                        </th>
                        <th>
                            OrderDate
                        </th>
                        <th>
                            Shipdate
                        </th>
                        <th>
                            PaymentDate
                        </th>                        
                        <th>
                             Operations
                        </th>
                    </thead>
                    <tbody>
                        {orders.map(ord =>
                            <tr key={ord.OrderId}>
                                <td>{ord.OrderId}</td>
                                <td>{ord.ProductId}</td>
                                <td>{ord.CustomerId}</td>
                                <td>{ord.Paymentid}</td>
                                <td>{ord.OrderDate}</td>
                                <td>{ord.Shipdate}</td>
                                <td>{ord.PaymentDate}</td>                                
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z" />
                                            <path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(ord.OrderId)}>
                                        onClick={this.deleteClick(dep.OrderId)}>
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
                                    <span className="input-group-text">Product</span>
                                    <select className="form-select"
                                        onChange={this.changeProductId}
                                        value={ProductId}>{prds.map(pr=><option key={pr.ProductId}>
                                                {pr.ProductName}
                                            </option>)}
                                        </select>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Shipdate</span>
                                    <select className="form-select"
                                        onChange={this.changeCustomerId}
                                        value={CustomerId}>{cust.map(ab=><option key={ab.CustomerId}>
                                                {ab.CustomerFname}
                                            </option>)}
                                        </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Paymentid</span>
                                    <select className="form-select"
                                        onChange={this.changePaymentid}
                                        value={Paymentid}>{payments.map(dep=><option key={dep.Paymentid}>
                                                {dep.PaymentType}
                                            </option>)}
                                        </select>
                                </div>
                                

                                <div className="input-group mb-3">
                                    <span className="input-group-text">OrderDate</span>
                                    <input type="date" className="form-control"
                                        value={OrderDate}
                                        onChange={this.changeOrderDate} />
                                </div>
                               
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Shipdate</span>
                                    <input type="date" className="form-control"
                                        value={Shipdate}
                                        onChange={this.changeShipdate} />
                                </div>
                                
                                <div className="input-group mb-3">
                                    <span className="input-group-text">PaymentDate</span>
                                    <input type="date" className="form-control"
                                        value={PaymentDate}
                                        onChange={this.changePaymentDate} />
                                </div>
                                
                            
                                {OrderId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}  
                                <div className="input-group mb-3">
                                    <span className="input-group-text">ProductId</span>
                                    <input type="number" className="form-control"
                                        value={ProductId}
                                        onChange={this.changeProductid} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">CustomerId</span>
                                    <input type="number" className="form-control"
                                        value={CustomerId}
                                        onChange={this.changecustomerid} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="   input-group-text">Paymentid</span>
                                    <input type="number" className="form-control"
                                        value={Paymentid}
                                        onChange={this.changePaymentid} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">OrderDate</span>
                                    <input type="text" className="form-control"
                                        value={OrderDate}
                                        onChange={this.changeOrderdate} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Shipdate</span>
                                    <input type="text" className="form-control"
                                        value={Shipdate}
                                        onChange={this.changeShipdate} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">PaymentDate</span>
                                    <input type="text" className="form-control"
                                        value={PaymentDate}
                                        onChange={this.changePaymentdate} />
                                </div>
                                {OrderId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {OrderId !== 0 ?
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