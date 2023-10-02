import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleBook = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const baseUrl = `https://mern-book-app-api-ten.vercel.app/api/books/${slug}`;


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
  }, [slug]);

  function StarRating({ numberOfStars }) {
    const stars = [];
    for (let index = 0; index < numberOfStars; index++) {
        stars.push(<span key={index}>⭐</span>)
    }
  
    return <div>Rating: {stars}</div>;
  }

  return <div>

      <Link to={"/books"}>👈 Books</Link>

      {data.map((indiBook) => (
        <div className="bookdetails" key={indiBook._id}>
          <div className="col-1">
            <img
              src={`https://mern-book-app-api-ten.vercel.app/uploads/${indiBook.thumbnail}`}
              alt={indiBook.title}
            />
            <br/>
            <Link to={`/editbook/${indiBook.slug}`}>✏️ Edit</Link>
          </div>
          <div className="col-2">
            <h1>{indiBook.title}</h1>
            <p>{indiBook.description}</p>
            <StarRating numberOfStars={indiBook.stars} />
            <p>Category</p> 
            <ul>
                {indiBook.category.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
}

export default SingleBook;
