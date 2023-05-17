import React, { Component } from "react";
import { variables } from "./Variable.js";


export class Vendor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vnds: [],
            modalTitle: "",
            VendorId: 0,
            Name: "",
            Email: "",
            CompanyName: "",
            Contact: 0,
            City: "",
            State: "",
            Pin: 0,
            GoodsType: ""
        }

    }

    refreshList(){
        fetch(variables.API_URL+'VendorTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({vnds:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    changeName = (e) => {
        this.setState({ Name: e.target.value });
    }

    changeEmail = (e) => {
        this.setState({ Email: e.target.value});
    }

    changeCompanyName = (e) =>{
        this.setState({ CompanyName: e.target.value});
    }
    changeContact = (e) =>{
        this.setState({ Contact: e.target.value});
    }
    changeCity = (e) =>{
        this.setState({ City: e.target.value});
    }
    changeState = (e) =>{
        this.setState({ State: e.target.value});
    }
    changePin = (e) =>{
        this.setState({ Pin: e.target.value});
    }
    changegoodsType = (e) =>{
        this.setState({ GoodsType: e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle: "Add Vendores",
            VendorId: 0,
            Name: "",
            Email: "",
            CompanyName: "",
            Contact: 0,
            City: "",
            State: "",
            Pin: 0,
            GoodsType: ""
            
        });
    }

    createClick() {
        fetch(variables.API_URL + 'VendorTbls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                CompanyName: this.state.CompanyName,
                Contact: this.state.Contact,
                City: this.state.City,
                State: this.state.State,
                Pin: this.state.Pin,
                GoodsType: this.state.GoodsType
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
            fetch(variables.API_URL + 'VendorTbls/' + id, {
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
            vnds,
            modalTitle,
            VendorId,
            Name,
            Email,
            CompanyName,
            Contact,
            City,
            State,
            Pin,
            GoodsType

        }=this.state;

        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add vendors
                </button>
                <table className="table table-striped">
                    <thead border="2">
                        <th>
                            VendorId
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            email
                        </th>  
                        <th>
                            CompanyName
                        </th>  
                        <th>
                            Contact
                        </th>  
                        <th>
                            City
                        </th>  
                        <th>
                            State
                        </th>  
                        <th>
                            pin
                        </th>  
                        <th>
                            GoodsType
                        </th>                        
                        <th>
                            Options
                        </th>
                    </thead>
                    <tbody>
                        {vnds.map(dep =>
                            <tr key={dep.VendorId}>
                                <td>{dep.VendorId}</td>
                                <td>{dep.Name}</td>
                                <td>{dep.Email}</td>
                                <td>{dep.CompanyName}</td>
                                <td>{dep.Contact}</td>
                                <td>{dep.City}</td>
                                <td>{dep.State}</td>
                                <td>{dep.Pin}</td>
                                <td>{dep.GoodsType}</td>                             
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z" />
                                            <path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z" />
                                        </svg>
                                    </button>&nbsp;
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                         onClick={() => this.createClick()}>    
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
                                    <span className="input-group-text">Name</span>
                                    <input type="text" className="form-control"
                                        value={Name}
                                        onChange={this.changeName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Email</span>
                                    <input type="text" className="form-control"
                                        value={Email}
                                        onChange={this.changeEmail} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">CompanyName</span>
                                    <input type="text" className="form-control"
                                        value={CompanyName}
                                        onChange={this.changeCompanyName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Contact</span>
                                    <input type="text" className="form-control"
                                        value={Contact}
                                        onChange={this.changeContact} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">City</span>
                                    <input type="text" className="form-control"
                                        value={City}
                                        onChange={this.changeCity} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">State</span>
                                    <input type="text" className="form-control"
                                        value={State}
                                        onChange={this.changeState} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Pin</span>
                                    <input type="text" className="form-control"
                                        value={Pin}
                                        onChange={this.changePin} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">GoodsType</span>
                                    <input type="text" className="form-control"
                                        value={GoodsType}
                                        onChange={this.changegoodsType} />
                                </div>

                                {VendorId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {VendorId !== 0 ?
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