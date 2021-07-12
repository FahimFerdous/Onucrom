<div className="row">
  <div className="col-md-4 form-group">
    <label for="firstName">Name</label>
    <input
      type="text"
      name="firstName"
      className="form-control"
      placeholder="Award Title"
      onBlur={handleBlur}
      value={values.firstName}
      onChange={handleChange}
    />
  </div>
  <div className="col-md-4 form-group">
    <label for="lastName">Awarding Body</label>
    <input
      type="text"
      name="lastName"
      className="form-control"
      placeholder="Organization"
      onBlur={handleBlur}
      value={values.lastName}
      onChange={handleChange}
    />
  </div>
  <div className="col-md-4 form-group">
    <label for="Phone">From </label>
    <input
      type="text"
      name="phone"
      className="form-control"
      placeholder="Issue Date"
      value={values.phone}
      onChange={handleChange}
    />
  </div>
</div>;

<Modal
  show={showAccountModal}
  onHide={() => {
    setshowAccountModal(false);
  }}
>
  <Modal.Header closeButton>
    <Modal.Title>Account Type</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>
      Current Subscription:{" "}
      <span className="updateprofilebutton">Bigenner</span>
    </p>
  </Modal.Body>
  <Modal.Footer>
    <Button
      variant="primary"
      onClick={() => {
        setshowAccountChangeModal(true);
      }}
    >
      Upgrade
    </Button>
  </Modal.Footer>
</Modal>;
