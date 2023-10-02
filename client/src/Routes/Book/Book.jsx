import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Book = () => {

    const baseUrl = 'http://localhost:8000/api/book';
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(baseUrl)
                if (!response.ok) {
                    throw new Error("Failed to fetch data!")
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setError("Error fetching data. Please try agian later.");
                setIsLoading(false);
            }
        }


        fetchData();
    }, [])

    return (
        <div>
            <h1>Books</h1>
            <p>This is where we use Nodejs, Exoress & MongoDB to grab some data, The data below is pulled from a MongoDB database</p>

            <h2>Fetch Example</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (

                <ul className="books">
                    {data.map((indiBook) => (
                        <li key={indiBook.id}>

                            <Link to={`/book/${indiBook.slug}`}>
                                <img src={`http://localhost:8000/uploads/${indiBook.thumbnail}`} alt={indiBook.title} />
                                <h3>{indiBook.title}</h3>
                            </Link>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Book