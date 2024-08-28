import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error('Error fetching user:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/user/${id}`, user)
      .then(() => {
        navigate('/read'); // Redirect to the user list after successful update
      })
      .catch(err => console.error('Error updating user:', err));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit User</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
