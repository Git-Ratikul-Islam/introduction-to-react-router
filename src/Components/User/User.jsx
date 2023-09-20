
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
            </div>
      );
};

export default User;