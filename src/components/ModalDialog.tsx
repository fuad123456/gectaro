import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


type ModalDialogPropsType = {
    setOpen:(open:boolean)=>void
    opened:boolean
}

function ModalDialog(props:ModalDialogPropsType) {

    const handleClose = function(){
        props.setOpen(false)
    }

    return (
      <>
        <Modal show={props.opened} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить работу</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h1>Содержимое работы</h1>
              <Form.Control size="lg" type="text" placeholder="описание работы" />
              <Form.Control size="lg" type="text" placeholder="измерение" />
              <Form.Control size="lg" type="text" placeholder="стоимость" />
              <Form.Control size="lg" type="text" placeholder="срок" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default  ModalDialog;