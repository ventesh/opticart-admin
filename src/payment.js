import React, { Component } from "react";
import { variables } from "./Variable.js";


export class Payment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payments: [],
            PaymentId: 0,
            modalTitle: "",
            PaymentType: "",
            Allowed: ""
        }

    }

    changepaymenttype = (p) => {
        this.setState({ PaymentType: p.target.value });
    }

    changeallowed = (a) => {
        this.setState({ Allowed: a.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: "Add Payment",
            PaymentId: 0,
            PaymentType: "",
            Allowed: ""
        });
    }

    editClick(dep) {
        this.setState({
            modalTitle: "Edit Payment",
            PaymentId: dep.PaymentId,
            PaymentType: dep.PaymentType,
            Allowed: dep.Allowed
        });
    }

    createClick() {
        fetch(variables.API_URL + 'PaymentTbls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PaymentType: this.state.PaymentType,
                Allowed: this.state.Allowed
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert('Data Inserted');
                this.refreshList();
            }, (error) => {
                alert('Data not Inserted');
            })
    }

    updateClick(id) {
        fetch(variables.API_URL + 'PaymentTbls/' + id, {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PaymentId: this.state.PaymentId,
                PaymentType: this.state.PaymentType,
                Allowed: this.state.Allowed
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Data Updated!!');
                this.refreshList();
            })
    }


    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'PaymentTbls/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }


    refreshList() {
        fetch(variables.API_URL + 'PaymentTbls')
            .then(responce => responce.json())
            .then(data => {
                this.setState({ payments: data });
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const {
            payments,
            modalTitle,
            PaymentType,
            Allowed,
            PaymentId
        } = this.state;

        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Payment
                </button>
                <table className="table table-striped">
                    <thead>
                        <th>
                            PaymentId
                        </th>
                        <th>
                            PaymentType
                        </th>
                        <th>
                            Allowed
                        </th>
                        <th>
                            Options
                        </th>
                    </thead>
                    <tbody>
                        {payments.map(dep =>
                            <tr key={dep.PaymentId}>
                                <td>{dep.PaymentId}</td>
                                <td>{dep.PaymentType}</td>
                                <td>{dep.Allowed}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(dep)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z" />
                                            <path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z" />
                                        </svg>
                                    </button>&nbsp;
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(dep.PaymentId)}>
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
                                    <span className="input-group-text">PaymentType</span>
                                    <input type="text" className="form-control"
                                        value={PaymentType}
                                        onChange={this.changepaymenttype} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Allowed</span>
                                    <input type="text" className="form-control"
                                        value={Allowed}
                                        onChange={this.changeallowed} />
                                </div>

                                {PaymentId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {PaymentId !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick(PaymentId)}
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