import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleBook = () => {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    const baseUrl = `http://localhost:8000/api/books/${slug}`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(baseUrl);
                if (!response.ok) {
                    throw new Error("Failed to fetch data!")
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [slug])

    return <div>

    <Link to={"/books"}>👈 Books</Link>

    {data.map((indiBook) => (
       <div className="bookdetails">
        <div className="col-1">
            <img src={`http://localhost:8000/uploads/${indiBook.thumbnail}`} alt="" />
            <br />
            {/*Edit button*/}
            </div>
        <div className="col-2">
            <h1>{indiBook.title}</h1>
            <p>{indiBook.description}</p>
            {/*stars*/}
            <p>Category</p>
            <ul>
                {indiBook.category.map((indiCat, index) => (
                    <li key={index}>{indiCat}</li>
                ))}
            </ul>
        </div>
       </div>
    ))}
        </div>
}

export default SingleBook