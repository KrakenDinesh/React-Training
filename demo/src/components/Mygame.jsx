import React, { useState, useEffect } from 'react'
const testData = [
    { name: "Dan Abramov", url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
const Mygame = () => {
   
    const [data,useData] = useState(testData)
    const Fun = ()=> useData(data)
    return (
        <div>
             <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={Fun}>Click Here</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        data.map((value) => {
                            return (
                                <div className='col-4'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>{value.name}</b></h5>
                                            <p className="card-text">{value.company}</p>
                                            <a href={value.url} className="btn btn-primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Mygame;
