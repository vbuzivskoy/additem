import React from 'react'
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import { addItem } from '../reducers/data';
import { hideModal } from '../reducers/appUI';

const mapStateToProps = (state) => {
  const { appUI: { isModalShown } } = state;
  return { isModalShown };
};

const actionCreators = { addItem, hideModal };

const RemoveChannelModal = (props) => {
  const {
    isModalShown,
    addItem,
    hideModal,
  } = props;

  const addItemHandler = () => {
    addItem();
  };

  return (
    <Modal show={isModalShown} onHide={hideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add item</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <button onClick={addItemHandler}>Add Item</button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(mapStateToProps, actionCreators)(RemoveChannelModal);
