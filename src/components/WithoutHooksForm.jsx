import React, { useState } from 'react'

const WithoutHooksForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '' // Default value for city select 
      });

      const handleInputChange = (e) => {
        console.log('event value', e);
        const { name, value } = e.target; // Destructure the event object
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Handle form submission logic here, e.g., send data to the server
        console.log('Form submitted with data:', formData);
      };
    
  return (
    <div>
    <div>withoutHooksForm</div>
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <select name='city' onChange={handleInputChange} value={formData.city} required>
                <option value="" disabled>Select City</option>
                <option value="pune">Pune</option>
                <option value="mumbai">mumbai</option>
                <option value="nashik">Nashik</option>
              </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>

  )
}

export default WithoutHooksForm