import { Link, useNavigate } from "react-router-dom";



const Post = ({ post }) => {

      const navigate = useNavigate();

      const { id, title } = post;
      const postStyle = {
            border: '2px solid yellow',
            padding: '10px',
            borderRadius: '20px',

      };
      const handleShowDetails = () => {
            navigate(`/post/${id}`);

      };
      return (
            <div style={postStyle}>
                  <h4>Post of Id:{id}</h4>
                  <h4>{title}</h4>
                  <Link to={`/post/${id}`}>See psot</Link>
                  <button onClick={handleShowDetails}>Click to see details</button>

            </div>
      );
};

export default Post;