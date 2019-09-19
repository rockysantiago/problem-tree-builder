import React, { useState } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';

const CreateModal = ({ done, close, open, size }) => {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');

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
          placeholder="Input your own"
          onChange={e => {
            setText(e.target.value);
          }}
        ></Input>
        <Input
          fluid
          placeholder="Paste link here"
          style={{ marginTop: '12px' }}
          onChange={e => {
            setLink(e.target.value);
          }}
        ></Input>
      </Modal.Content>
      <Modal.Actions>
        <Button basic content="Cancel" onClick={close} />
        <Button
          basic
          content="Done"
          onClick={() =>
            done({
              text,
              link
            })
          }
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CreateModal;
