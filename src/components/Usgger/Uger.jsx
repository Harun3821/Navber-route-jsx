
import PropTypes  from "prop-types";

const Uger = ({uger}) => {

    const {id, name, phone, email, website } = uger;

   const usgerStyle ={
    border: '2px solid yellow',
    padding: '5px',
    borderRadius: '15px'
   }

    return (
        <div style={usgerStyle}>
            <p>UserId: {id}</p>
            <h2>Name: {name}</h2>
            <h4>Phone: {phone}</h4>
            <p><small>Email: {email}</small></p>
            <p><small>Websit: {website}</small></p>
        </div>
    );
};

Uger.propTypes = {
   uger: PropTypes.obj
    
   }

export default Uger;