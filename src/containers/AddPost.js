import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal } from 'react-bootstrap';
import { Button, TextareaAutosize } from '@material-ui/core';

const AddPost = ({ modal, selectData, handleModalClose, handleAddData }) => {
  // use at time of Update if value is there let destructure and assign
  const { userId, id, title, body } = selectData;

  // initialValue when form is open
  const initialValues = {
    userId: userId || 1,
    id: id || null,
    title: title || '',
    body: body || '',
  };

  // Form validation is done here
  const validationSchema = Yup.object({
    id: Yup.string().nullable(),
    title: Yup.string()
      .required('Please Enter Title')
      .max(30, 'Title must be less than 30 letters'),
    body: Yup.string()
      .required('Please Enter Description')
      .max(300, 'Title must be less than 300 letters'),
  });

  // On Form Submit
  const onSubmit = (values) => {
    handleAddData(values);
  };

  return (
    <div>
      <Modal size="md" show={modal} onHide={() => handleModalClose()} centered>
        <Modal.Header closeButton>
          {selectData.id ? <span>Edit Post</span> : <span>Add Post</span>}
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div>
                  <label>Title:</label>
                  <br />
                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    className="form-control"
                  />
                  <span style={{ color: 'red' }}>
                    <ErrorMessage name="title" />
                  </span>
                  <br />
                </div>
                <div>
                  <label>Description:</label>
                  <br />
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={3}
                    style={{ width: '100%', color: '#495057' }}
                    value={values.body}
                    onChange={(e) => setFieldValue('body', e.target.value)}
                    placeholder="Minimum 3 rows"
                  />

                  <span style={{ color: 'red' }}>
                    <ErrorMessage name="body" />
                  </span>
                  <br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '10px' }}
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: '10px' }}
                    onClick={() => handleModalClose()}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPost;
