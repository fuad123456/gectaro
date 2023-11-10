import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useState} from 'react'
type ModalDialogPropsType = {
    setOpen:(open:boolean)=>void
    opened:boolean
}

function ModalDialog(props:ModalDialogPropsType) {
const [startDate, setStartDate] = useState<Date | null>(new Date());

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
              <Form.Control size="lg" type="text" className='mb-2' placeholder="описание работы" />
              <Form.Control size="lg" type="text" className='mb-2' placeholder="измерение" />
              <Form.Control size="lg" type="text" className='mb-2' placeholder="стоимость" />
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
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