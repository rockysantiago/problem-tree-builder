import React from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';

const CreateModal = ({ close, open, size }) => {
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
        <Input fluid placeholder="Input your own"></Input>
        <Input
          fluid
          placeholder="Paste link here"
          style={{ marginTop: '12px' }}
        ></Input>
      </Modal.Content>
      <Modal.Actions>
        <Button basic content="Cancel" onClick={close} />
        <Button basic content="Done" onClick={() => close()} />
      </Modal.Actions>
    </Modal>
  );
};

export default CreateModal;
