
import React, { useState } from 'react'
import axios from 'axios'

function NewsApi() {
    const [news, setNews] = useState([])
    const options = {
        method: 'GET',
        url: 'https://t20-cricket-news.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Key': '10729c5e46msh337dfd40b33f64dp101eb3jsnf1d2a850fad5',
          'X-RapidAPI-Host': 't20-cricket-news.p.rapidapi.com'
        }
      };
    const myFunction = () => {
        axios.request(options).then((response) => {
            setNews(response.data);
            console.log(response);
            console.log(response.data);
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={myFunction}>Click Here</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        news.map((value) => {
                            return (
                                <div className='col-4'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title"><b>{value.title}</b></h5>
                                            <p className="card-text">{value.description}</p>
                                            <p className="card-text">{value.source}</p>
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
};

export default NewsApi
