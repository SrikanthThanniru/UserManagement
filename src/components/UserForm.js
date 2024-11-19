import React, { useState, useEffect } from 'react';

const UserForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    if (initialData.id && (
      initialData.name !== formData.name ||
      initialData.email !== formData.email ||
      initialData.department !== formData.department
    )) {
      setFormData({
        name: initialData.name || '',
        email: initialData.email || '',
        department: initialData.department || '',
      });
    }
  }, [initialData]); // Dependency array only includes `initialData` now

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', department: '' }); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{initialData.id ? 'Update' : 'Add'}</button>
      {onCancel && <button type="button" onClick={onCancel} className="cancel-btn">
        Cancel
      </button>
      }
    </form>
  );
};

export default UserForm;
