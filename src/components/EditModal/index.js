import React, { useState, useEffect } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';

import { PROBLEM_STRING } from 'constants/strings';

const EditModal = ({
  close,
  data = {},
  open,
  size,
  type,
  updateOption,
  updateProblem
}) => {
  const [id, setId] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    data.parent ? setText(data.child.text) : setText(data.text);
    data.parent ? setLink(data.child.link) : setLink(data.link);
    data.parent ? setId(data.child.id) : setId(data.id);
  }, [data]);

  const index = data.parent ? data.parent._listIndex : data._listIndex;
  const childIndex = data.child ? data.child._listIndex : null;

  return (
    <Modal
      size={size}
      open={open}
      onClose={close}
      style={{
        position: 'absolute',
        height: 'fit-content',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Modal.Content>
        <Input
          fluid
          value={text || ''}
          onChange={e => {
            setText(e.target.value);
          }}
        ></Input>
        <Input
          fluid
          style={{ marginTop: '12px' }}
          value={link || ''}
          onChange={e => setLink(e.target.value)}
        ></Input>
      </Modal.Content>
      <Modal.Actions>
        <Button basic content="Cancel" onClick={close} />
        <Button
          basic
          content="Done"
          onClick={() => {
            type === PROBLEM_STRING
              ? updateProblem(index, { text, link, id })
              : updateOption(type, index, childIndex, { text, link, id });
            close();
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditModal;
