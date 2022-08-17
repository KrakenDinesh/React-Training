import React,{useState,useEffect} from 'react'

const Customer = () => {
    const [details,getDetails] = useState({username:'',password:''})
    
    const eventHandler = (e)=>{
        getDetails({...details,[e.target.name]: e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(details)
    }
    return (
        <div>
             <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div className = "card-body">
                            <form  onSubmit={submitHandler}>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Username :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter username"
                                        name = "username"
                                        className = "form-control"
                                        onChange={eventHandler}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                    <input
                                        type = "password"
                                        placeholder = "Enter password"
                                        name = "password"
                                        className = "form-control"
                                        onChange={eventHandler}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" >Submit </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default Customer
