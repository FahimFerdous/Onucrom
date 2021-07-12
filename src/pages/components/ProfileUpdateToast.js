import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

const ProfileUpdateToast = (props) => {
  return (
    <div>
      <Toast
        style={{
          position: "absolute",
          top: 100,
          right: 50,
          width: "50%",
          height: "80px",
        }}
        show={props.show}
        onClose={props.close}>
        <Toast.Header>
          <h4>
            <strong>Onucrom</strong>
          </h4>
        </Toast.Header>
        <Toast.Body>
          <p style={{ color: "#ff5500", fontWeight: "bold", fontSize: "14px" }}>
            {props.toastText}
          </p>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ProfileUpdateToast;
