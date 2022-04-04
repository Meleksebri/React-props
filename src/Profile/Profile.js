import React from "react";
import PropsTypes from "prop-types";

const Profile = (props) => {
  // decalring the Profile props
  let { fullName, bio, profession } = props;
  // --------------start of css styling -------------------//
  let style_for_card = {
    width: "300px",
    height: "400px",
    background: "white",
    borderRadius: " 15px",
    boxShadow: "0px 1px 10px 1px black",
  };

  let style_for_upper_container = {
    height: "100px",
    background: "linear-gradient(to left , blue , red)",
  };

  let style_for_image = {
    background: "white",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    padding: "5px",
    transform: "translate(95px , 45px)",
  };
  let style_for_lower_container = {
    marginTop: "60px",
    height: "auto",
    background: "white",
    textAlign: "center",
    fontFamily: "Roboto , sans-serif",
  };

  let style_for_button = {
    margin: "1rem",
    marginTop: "0",
    color: "#2f2d2e",
    font: "bold",
    backgroundColor: "white",
    border: "2px solid #8e00b9",
    padding: "0.6rem",
    borderRadius: "6px",
    transitionDuration: "0.5s",
    animation: "ease-in-out",
  };
  // ------------end of csss styling--------------//

  // the function that alerts the name of the user //
  function handleName() {
    return alert(`Your Name is ${fullName}`);
  }

  return (
    <div className="Card" style={style_for_card}>
      <div className="upper_container" style={style_for_upper_container}>
        <div className="image_container">
          <img
            src={props.children}
            alt=""
            width="100px"
            height="100px"
            style={style_for_image}
          />
        </div>
      </div>
      <div className="lower_container" style={style_for_lower_container}>
        <h3
          style={{
            margin: "0px",
            padding: "0px",
            color: "#8e00b9",
            fontWeight: "600px",
            fontSize: "1.5rem",
            marginBottom: "5px",
          }}
        >
          {fullName}
        </h3>
        <h4
          style={{
            margin: "0px",
            padding: "0px",
            color: "#2f2d2e",
            fontWeight: "700px",
            fontSize: "1.2rem",
          }}
        >
          {profession}
        </h4>
        <p
          style={{
            margin: "1rem",
            padding: "0px",
            color: "#2f2d2e",
            fontWeight: "300px",
            textAlign: "justify",
          }}
        >
          {bio}
        </p>
        <button style={style_for_button} onClick={() => handleName()}>
          Alert my name
        </button>
      </div>
    </div>
  );
};

// Defining the default props for Profile component.
Profile.defaultProps = {
  fullName: "Your Name",
  bio: "this is the default bio , if you want to customize it just enter your bio as a prop in the Profile component in the App.js file",
  profession: "Your Profession",
};

// Using PropsType to check props.
Profile.PropsTypes = {
  fullName: PropsTypes.string,
  bio: PropsTypes.string,
  profession: PropsTypes.string,
};

export default Profile;
