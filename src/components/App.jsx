import React from 'react'
import { connect } from 'react-redux';

import { showModal } from '../reducers/appUI';
import AddItemModal from './AddItemModal';

const actionCreators = { showModal };

const App = (props) => {
  const { showModal } = props;

  return (
    <>
    <div className="App">
      <button onClick={showModal}>
        Add item
      </button>
    </div>
    <AddItemModal />
    </>
  );
};

export default connect(null, actionCreators)(App);
