import React, { useState } from 'react';
import '../css/UserManagement.css'; // Import CSS file for UserManagement styling

const UserManagement = () => {
  const [content, setContent] = useState(
    <div>
      <h1>User Management</h1>
    </div>
  );

  const handleAction = (e) => {
    const selectedAction = e.target.value;
    if (selectedAction === 'Edit') {
      handleEdit();
    } else if (selectedAction === 'Delete') {
      handleDelete();
    }
  };

  const handleEdit = () => {
    console.log('Edit action');
  };

  const handleDelete = () => {
    console.log('Delete action');
  };

  return (
    <div className='table-container'>
      {content}
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Render user data here */}
          <tr className='gray-row'>
            <td>Carlo Cruz</td>
            <td>Marc Carlo Bryan Cruz</td>
            <td>mcbcruz@tspi.com.ph</td>
            <td>
              <select id="userType" onChange={handleAction}>
                <option value="Action">Option</option>
                <option value="Edit">Edit</option>
                <option value="Delete">Delete</option>
              </select>
            </td>
          </tr>
          {/* Add more user rows as needed */}
          <tr className='white-row'>
            <td>John Doe</td>
            <td>John Smith</td>
            <td>john.doe@example.com</td>
            <td>
              <select id="userType" onChange={handleAction}>
                <option value="Action">Option</option>
                <option value="Edit">Edit</option>
                <option value="Delete">Delete</option>
              </select>
            </td>
          </tr>
          <tr className='gray-row'>
            <td>Carlo Cruz</td>
            <td>Marc Carlo Bryan Cruz</td>
            <td>mcbcruz@tspi.com.ph</td>
            <td>
              <select id="userType" onChange={handleAction}>
                <option value="Action">Option</option>
                <option value="Edit">Edit</option>
                <option value="Delete">Delete</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
