import React, { Component } from "react";
import { variables } from "./Variable.js";
import { Customer } from "./Customer.js";


export class Feedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Customer: [],
            Catgory: [],
            Product: [],
            feedbacks: [],
            modalTitle: "",
            FdId: 0,
            FeedbackTitle: "",
            Description: "",
            Ratings: 0,
            FeedbackDate: "",
            CustomerId: 0,
            CatgoryId: 0,
            ProductId: 0
        }

    }



    refreshList(){
        fetch(variables.API_URL+'FeedbackTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({feedbacks:data});
        })
        
        fetch(variables.API_URL+'CustomerTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({feedbacks:data});
        })

        fetch(variables.API_URL+'CategoryTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({feedbacks:data});
        })

        fetch(variables.API_URL+'ProductTbls')
        .then(responce=>responce.json())
        .then(data=>{
            this.setState({feedbacks:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    changeFeedbackTitle = (e) => {
        this.setState({ FeedbackTitle: e.target.value });
    }
    changeDescription = (e) => {
        this.setState({ Description: e.target.value });
    }
    changeRatings = (e) => {
        this.setState({ Ratings: e.target.value });
    }
    changeFeedbackDate = (e) => {
        this.setState({ FeedbackDate: e.target.value });
    }
    changeCustomerId = (e) => {
        this.setState({ CustomerId: e.target.value });
    }
    changeCatgoryId = (e) => {
        this.setState({ CatgoryId: e.target.value });
    }
    changeProductId = (e) => {
        this.setState({ ProductId: e.target.value });
    }
    
    addClick(){
        this.setState({
            modalTitle: "Add FeedBacks",
            FdId: 0,
            FeedbackTitle: "",
            Description: "",
            Ratings: 0,
            FeedbackDate: "",
            CustomerId: 0,
            CatgoryId: 0,
            ProductId: 0
        });
    }


    createClick() {
        fetch(variables.API_URL + 'FeedbackTbls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FeedbackTitle: this.state.FeedbackTitle,
                Description: this.state.Description,
                Ratings: this.state.Ratings,
                FeedbackDate: this.state.FeedbackDate,
                CustomerId: this.state.CustomerId,
                CatgoryId: this.state.CatgoryId,
                ProductId: this.state.ProductId
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
            fetch(variables.API_URL + 'FeedbackTbls/' + id, {
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
            Customer,
            Catgory,
            Product,
            feedbacks,
            modalTitle,
            FdId,
            FeedbackTitle,
            Description,
            Ratings,
            FeedbackDate,
            CustomerId,
            CatgoryId,
            ProductId
        }=this.state;

        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Feedbacks
                </button>
                <table className="table table-stripped">
                    <thead>
                        <th>
                            FdId
                        </th>
                        <th>
                            FeedbackTitle
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Ratings
                        </th>
                        <th>
                            FeedbackDate
                        </th>
                        <th>
                            CustomerId
                        </th>
                        <th>
                            CatgoryId
                        </th>
                        <th>
                            ProductId
                        </th>
                        <th>
                            Options
                        </th>
                    </thead>
                    <tbody>
                        {feedbacks.map(fd =>
                            <tr key={fd.FdId}>
                                <td>{fd.FdId}</td>
                                <td>{fd.FeedbackTitle}</td>
                                <td>{fd.Description}</td>
                                <td>{fd.Ratings}</td>
                                <td>{fd.FeedbackDate}</td>
                                <td>{fd.CustomerId}</td>
                                <td>{fd.CatgoryId}</td>
                                <td>{fd.ProductId}</td>
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
                                        onClick={() => this.deleteClick(fd.FdId)}>
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
                                    <span className="input-group-text">FeedbackTitle</span>
                                    <input type="text" className="form-control"
                                        value={FeedbackTitle}
                                        onChange={this.changeFeedbackTitle} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Description</span>
                                    <input type="text" className="form-control"
                                        value={Description}
                                        onChange={this.changeDescription} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Ratings</span>
                                    <input type="text" className="form-control"
                                        value={Ratings}
                                        onChange={this.changeRatings} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">FeedbackDate</span>
                                    <input type="date" className="form-control"
                                        value={FeedbackDate}
                                        onChange={this.changeFeedbackDate} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Customer</span>
                                    <select className="form-control"
                                        onChange={this.changeCustomerId}
                                        value={CustomerId}>{Customer.map(ab=><option key={ab.CustomerId}>
                                                {ab.Cu}
                                            </option>)}
                                        </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Catgory</span>
                                    <select className="form-control"
                                        onChange={this.changeProductId}
                                        value={CatgoryId}>{Catgory.map(dep=><option key={dep.CatgoryId}>
                                                {dep.Categoryname}
                                            </option>)}
                                        </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Product</span>
                                    <select className="form-control"
                                        onChange={this.changeCustomerId}
                                        value={CustomerId}>{Customer.map(ab=><option key={ab.CustomerId}>
                                                {ab.Cu}
                                            </option>)}
                                        </select>
                                </div>
                            
                                {FdId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}  
                                    >Create</button>
                                    : null}

                                {FdId !== 0 ?
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