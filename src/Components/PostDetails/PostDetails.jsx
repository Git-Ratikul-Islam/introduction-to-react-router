import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
      const post = useLoaderData();
      const { postId } = useParams();
      const navigate = useNavigate();
      const { id, title, body } = post;

      console.log(postId);

      const handleGoBack = () => {
            navigate(-1);
      };
      return (
            <div>
                  <h4>Psot about: {title}</h4>
                  <p><small>{body}</small></p>
                  <button onClick={handleGoBack}>Go back</button>

            </div>
      );
};

export default PostDetails;