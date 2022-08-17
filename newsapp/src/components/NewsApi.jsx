import React, { useState } from 'react'
import axios from 'axios';
import { response } from 'express';
const NewsApi = () => {
    const [news, setNews] = useState();

    const fetchNews = ()=>{ 
        // axios.get("https://en.wikipedia.org/wiki/One_Piece").then((response)=>{
        //     console.log(response.data)
        // })
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={fetchNews}>Click</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsApi
