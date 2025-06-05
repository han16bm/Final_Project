 /*start edit comment
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

const handleUpdate = async (photoId, commentId) => {
  const token = localStorage.getItem("token");
  await fetch(`http://localhost:8081/api/photo/${photoId}/comment/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ newComment: editText })
  });
  setEditing(null);
  setTrigger((pre) => !pre); // gọi lại ảnh để reload comment mới
};
end edit */


 /* start delete comment
 const handleDelete = async (photoId, commentId) => {
  const confirm = window.confirm("Bạn có chắc muốn xóa comment này?");
  if (!confirm) return;
  try {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:8081/api/photo/${photoId}/comment/${commentId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    setTrigger(pre => !pre); // reload lại comment
  } catch (err) {
    console.error("Error deleting comment:", err);
  }
};
*/


/* start delete photo
const handleDeletePhoto = async (photoId) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`http://localhost:8081/api/photo/${photoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setTrigger((prev) => !prev); // Reload danh sách ảnh
  } catch (error) {
    console.log(error);
  }
};
*/

{/*delete photo */}
{/*
{user_id === photo.user_id && (
  <button onClick={() => handleDeletePhoto(photo._id)}>Delete Photo</button>
)}
*/}

{/*edit comment*/}
 {/* start edit comment 
                  {user_id === comment.user_id && (
                  <button onClick={() => setEditing(comment._id)}>Edit</button>
                  )}
                  {editing === comment._id ? (
                  <div>
                  <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(photo._id,comment._id)}>Save</button>
                  </div>
                  ) : (
                  <p>{comment.comment}</p> 
                  )}
 end edit comment */}



{/*delete comment*/} 
 {/*
             {user_id === comment.user_id && (
               <>
               <button onClick={() => handleDelete(photo._id, comment._id)}>Delete</button>
              </>
             )}
 */}


// start liet ke
/*
const [showUsersWithPhotos, setShowUsersWithPhotos] = useState(false);
const [usersWithPhotos, setUsersWithPhotos] = useState([]);

const fetchUsersWithPhotos = async () => {
  try {
    const res = await fetch("http://localhost:8081/api/photo/users-with-many-photos", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setUsersWithPhotos(data);
    setShowUsersWithPhotos(true);
  } catch (error) {
    console.error("Failed to fetch users with ≥2 photos", error);
  }
};
*/


{/*liet ke */}
{/*
      <button onClick={fetchUsersWithPhotos}>Hiện người dùng có ≥2 ảnh</button>
{showUsersWithPhotos && (
  <List component="nav" className="user-list" style={{ marginTop: "10px" }}>
    {usersWithPhotos.map((user) => (
      <div key={user._id} className="user-list-item-wrapper">
        <ListItem
          component={Link}
          to={`/users/${user._id}`}
          className="user-list-item"
        >
          <ListItemText primary={` ${user.last_name}`} />
        </ListItem>
        <Divider />
      </div>
    ))}
  </List>
)}
*/}


/* edit thông tin người dùng 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'; // nhớ viết CSS căn giữa tại đây

function EditUser() {
  const user_id = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");
  const nav = useNavigate();

  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    location: "",
    description: "",
    occupation: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:8081/api/user/${user_id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
      setUser(data);
      setFormData({
        first_name: data.first_name || "",
        last_name: data.last_name || "",
        location: data.location || "",
        description: data.description || "",
        occupation: data.occupation || ""
      });
    };
    fetchUser();
  }, [user_id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {
    await fetch(`http://localhost:8081/api/user/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });
    nav(`/users/${user_id}`);
  };

  return (
    <div className="edit-user-page">
      <h2>Edit Your Info</h2>
      <div className="edit-user-form">
        <input type="text" name="first_name" placeholder="First name" value={formData.first_name} onChange={handleChange} />
        <input type="text" name="last_name" placeholder="Last name" value={formData.last_name} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} />
        <button onClick={handleSave}>Lưu</button>
      </div>
    </div>
  );
}

export default EditUser;
*/
/* css edit thông tin người dùng
.edit-user-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}

.edit-user-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}
.edit-user-form input {
  padding: 8px;
  font-size: 14px;
}
.edit-user-form button {
  padding: 8px;
  font-size: 14px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;
}
*/
