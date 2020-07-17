import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from '../store/action';
import Displaytable from './Displaytable';
import AddPost from './AddPost';
import { pickBy } from 'lodash';

const Post = (props) => {
  const [modal, setModal] = useState(false);
  const [selectData, setSelectedDate] = useState({});

  // Load data when Page Load
  useEffect(() => {
    props.getUserPost();
  }, []);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleEditPost = (row) => {
    setModal(true);
    setSelectedDate(row);
  };

  const handleAddData = (values) => {
    if (values.id) {
      props.getUpdatePost(values);
    } else {
      // using pickBy from Lodash
      // it remove all key value which is null or empty string
      const data = pickBy(values, (val, key) => {
        return !(val === null || val === '');
      });
      props.getAddPost(data);
    }
    setModal(false);
  };

  const handleDelete = (row) => {
    props.getDeletePost(row);
  };

  return (
    <div>
      <Displaytable
        post={props.user}
        handleModalOpen={handleModalOpen}
        handleEditPost={handleEditPost}
        handleDelete={handleDelete}
      />

      {modal && (
        <AddPost
          modal={modal}
          selectData={selectData}
          handleModalClose={handleModalClose}
          handleAddData={handleAddData}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserPost: () => dispatch({ type: GET_USER }),
    getAddPost: (payload) => dispatch({ type: ADD_USER, payload: payload }),
    getUpdatePost: (payload) =>
      dispatch({ type: UPDATE_USER, payload: payload }),
    getDeletePost: (payload) =>
      dispatch({ type: DELETE_USER, payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
