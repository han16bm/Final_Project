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
