import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AccountChangeModal = (props) => {
  const [showModal, setshowModal] = useState(false);

  const UpdateAccountype = () => {};
  return (
    <div>
      <Modal
        size="lg"
        show={props.showAcountChange}
        onHide={props.HideAccountModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Account Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="cart-table-area">
            <table class="cart-table">
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Price</th>
                  <th>Features</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="name">Free</span>
                  </td>
                  <td>$0.00</td>

                  <td>
                    <span>Limited Access</span>
                  </td>
                  <td>
                    <Button variant="primary" onClick={UpdateAccountype}>
                      Upgrade
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="name">Basic</span>
                  </td>
                  <td>$5.00</td>

                  <td>
                    <span>Full Access to limited Page</span>
                  </td>
                  <td>
                    <Button variant="secondary" onClick={UpdateAccountype}>
                      Upgrade
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="name">Pro</span>
                  </td>
                  <td>$10.00</td>

                  <td>
                    <span>Full Access to the feature</span>
                  </td>
                  <td>
                    <Button variant="secondary" onClick={UpdateAccountype}>
                      Upgrade
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AccountChangeModal;
