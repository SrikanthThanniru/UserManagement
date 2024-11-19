import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name.split(' ')[0]}</td>
          <td>{user.name.split(' ')[1]}</td>
          <td>{user.email}</td>
          <td>{user.department || 'N/A'}</td>
          <td>
            <div className="button-container">
              <button onClick={() => onEdit(user)} className="edit-btn">Edit</button>
              <button onClick={() => onDelete(user.id)} className="delete-btn">Delete</button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserList;
