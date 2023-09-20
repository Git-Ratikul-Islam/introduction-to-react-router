import { Link } from "react-router-dom";

const User = ({ user }) => {
      const userStyle = {
            border: '2px solid yellow',
            padding: '10px',
            borderRadius: '20px',

      };
      const { id, name, email, phone } = user;
      return (
            <div style={userStyle}>
                  <h2>{name}</h2>
                  <p>email:{email}</p>
                  <p>phone: {phone}</p>
                  <Link to={`/user/${id}`}>Show details</Link>
                  <Link to={`/user/${id}`}>
                        <button>Show details</button>
                  </Link>
            </div>
      );
};

export default User;