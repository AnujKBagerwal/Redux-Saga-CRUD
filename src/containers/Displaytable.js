import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from '@material-ui/core';

const Displaytable = ({
  post,
  handleModalOpen,
  handleEditPost,
  handleDelete,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <th>ID</th>
          <th className="post-width">Title</th>
          <th style={{ width: '65%' }}>Description</th>
          <th>
            Actions
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '10px', backgroundColor: 'green' }}
              onClick={() => handleModalOpen()}
            >
              Add
            </Button>
          </th>
        </thead>
        <tbody>
          <>
            {post &&
              post.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td style={{ textAlign: 'left' }}>{data.title}</td>
                  <td style={{ textAlign: 'left' }}>{data.body}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditPost(data)}
                      size="small"
                      style={{ margin: '5px' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      style={{ margin: '5px' }}
                      onClick={() => handleDelete(data)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </>
        </tbody>
      </Table>
    </div>
  );
};

export default Displaytable;
