import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { getUsers, addUser, updateUser, deleteUser } from './api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await getUsers();
      const formattedUsers = data.map((user, index) => ({
        ...user,
        id: index + 1, // Ensure initial IDs are sequential
      }));
      setUsers(formattedUsers);
    } catch (error) {
      alert('Failed to fetch users');
    }
  };

  const handleAddUser = async (user) => {
    try {
      const newUser = { ...user, id: users.length + 1 };
      const { data } = await addUser(newUser);
      setUsers([...users, { ...data, id: newUser.id }]);
    } catch (error) {
      alert('Failed to add user');
    }
  };

  const handleEditUser = async (id, updatedUser) => {
    try {
      const { data } = await updateUser(id, updatedUser);
      setUsers(
        users.map((user) => (user.id === id ? { ...user, ...data } : user))
      );
      setCurrentUser(null); // Reset currentUser after editing
      setIsEditing(false);
    } catch (error) {
      alert('Failed to edit user');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      const updatedUsers = users
        .filter((user) => user.id !== id)
        .map((user, index) => ({
          ...user,
          id: index + 1,
        }));
      setUsers(updatedUsers);
      if (currentUser && currentUser.id === id) {
        setIsEditing(false);
        setCurrentUser(null);
      }
    } catch (error) {
      alert('Failed to delete user');
    }
  };

  return (
    <div className="container">
    <h1>User Management</h1>
    {isEditing ? (
      <UserForm
        initialData={currentUser}
        onSubmit={(data) => handleEditUser(currentUser.id, data)}
        onCancel={() => {
          setIsEditing(false);
          setCurrentUser(null);
        }}
      />
    ) : (
      <UserForm
        onSubmit={handleAddUser}
        key="add-form" // Add key to reset the form component
      />
    )}
    <div className="table-container">
      <UserList
        users={users}
        onEdit={(user) => {
          setCurrentUser(user);
          setIsEditing(true);
        }}
        onDelete={handleDeleteUser}
      />
    </div>
  </div>
  
  );
};

export default App;
