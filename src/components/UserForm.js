import React, { useState, useEffect } from 'react';

const UserForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  });

  // Synchronize formData with initialData when initialData changes
  useEffect(() => {
    if (initialData.id) {
      setFormData({
        name: initialData.name || '',
        email: initialData.email || '',
        department: initialData.department || '',
      });
    }
  }, [initialData.name, initialData.email, initialData.department, initialData.id]);

  // Handle input changes
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
    // Reset the form only if it's a new submission, not an update
    if (!initialData.id) {
      setFormData({ name: '', email: '', department: '' });
    }
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
      {onCancel && (
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;
