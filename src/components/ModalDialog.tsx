import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {ChangeEvent, useState} from 'react'
import { useAppDispatch } from '../store/hooks';
import { addWork, } from '../store/WorkItemSlice';

type ModalDialogPropsType = {
    setOpen:(open:boolean)=>void
    opened:boolean
}

function ModalDialog(props:ModalDialogPropsType) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [description, setDescription] = useState<string>('')
    const [measurement, setMeasurement] = useState<string>('')
    const [amount, setAmount] = useState<number>(0)


    const handleClose = function(){
        props.setOpen(false)
    }
    const value = {
        id:'fgfgf',
        description,
        measurement,
        amount,
        time:startDate
    }
    const dispatch = useAppDispatch()
    const saveChanges = ()=>{
        dispatch(addWork(value))
        handleClose()
    }
    return (
      <>
        <Modal show={props.opened} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить работу</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h3>Содержимое работы</h3>
              <Form.Control 
                  size="lg" type="text" className='mb-2' placeholder="описание работы" 
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>setDescription(e.currentTarget.value)}
              />
              <Form.Control 
                  size="lg" type="text" className='mb-2' placeholder="измерение" 
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>setMeasurement(e.currentTarget.value)}
              />
              <Form.Control size="lg" type="text" className='mb-2' placeholder="стоимость" 
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>setAmount(Number(e.currentTarget.value))}
              />
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default  ModalDialog;