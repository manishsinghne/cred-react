import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((res) => {
        const responseData = res.data;
        if (Array.isArray(responseData)) {
          setData(responseData);
        } else {
          console.error('Expected an array but got:', responseData);
          setData([]); // Set an empty array if the response isn't an array
        }
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setData([]); // Set an empty array if there's an error
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(item => item.id !== id));
      })
      .catch(err => console.error('Error deleting data:', err));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>

      {data.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Name</th>
              <th className="py-2 px-4 bg-gray-200">Email</th>
              <th className="py-2 px-4 bg-gray-200">Phone Number</th>
              <th className="py-2 px-4 bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr className="border-b" key={i}>
                <td className="py-2 px-4 text-center">{item.name}</td>
                <td className="py-2 px-4 text-center">{item.email}</td>
                <td className="py-2 px-4 text-center">{item.phone}</td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600" onClick={()=>navigate(`/edit/${item.id}`)} >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No data available</p>
      )}

      <div className="mt-6 text-center">
        <Link to="/" className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Read;
