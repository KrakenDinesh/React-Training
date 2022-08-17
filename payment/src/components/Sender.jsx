import React, { useState,useEffect } from 'react'


const Sender = () => {
    const [sender, getSender] = useState({ name: '', acc_no: '', amount: '' })
    const [receiver, getReceiver] = useState({ name: '', acc_no: '', amount: '' })
    
    const eventHandlerSender = (e) => {
        getSender({ ...sender, [e.target.name]: e.target.value })
    }
    const eventHandlerReceiver = (e) => {
        getReceiver({ ...receiver, [e.target.name]: e.target.value })
    }
   
    const print = (e) => {
        e.preventDefault()
        console.log(sender)
        console.log(receiver)
       
    }
    return (
        <div>
            <br /><br />
            <div className="container">
                <form >
                    <div className="row ">
                        <div className="card col-sm-4 offset-sm-1 offset-sm-1">
                            <div className="card-body">

                                <div className="form-group mb-2">
                                    <label className="form-label"> Sender</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={eventHandlerSender}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Account Number </label>
                                    <input
                                        type="text"
                                        pattern="^[0-9]{12}$"
                                        name="acc_no"
                                        className="form-control"
                                        onChange={eventHandlerSender}
                                        required
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm-4 offset-sm-2 offset-sm-2">
                            <div className="card-body">
                                <div className="form-group mb-2">
                                    <label className="form-label"> Receiver</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={eventHandlerReceiver}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Account Number </label>
                                    <input
                                        type="text"
                                        pattern='^[0-9]{12}$'
                                        name="acc_no"
                                        className="form-control"
                                        onChange={eventHandlerReceiver}
                                        required
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group mb-6">
                        <label className="form-label"> Amount</label>
                        <input
                            type="text"
                            name="amount"
                            className="form-control input-sm-4"
                            onChange={e=>{eventHandlerSender(e);eventHandlerReceiver(e)}}
                            required
                        >
                        </input>
                        <br></br>
                    </div>
                    <button className="btn btn-success mb-6" onClick={print} >Submit </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </form>
            </div>


        </div>
    )
}

export default Sender