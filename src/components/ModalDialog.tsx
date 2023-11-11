import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {ChangeEvent, useState} from 'react'
import { useAppDispatch } from '../store/hooks';
import { addWork, } from '../store/WorkItemSlice';
import ru from 'date-fns/locale/ru';

type ModalDialogPropsType = {
    setOpen:(open:boolean)=>void
    opened:boolean
}

function ModalDialog(props:ModalDialogPropsType) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [description, setDescription] = useState<string>('')
    const [measurement, setMeasurement] = useState<string>('')
    const [percent, setPercent] = useState<number>(20)
    const [amount, setAmount] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)


    const handleClose = function(){
        props.setOpen(false)
    }
    const value = {
        id:'fgfgf',
        description,
        measurement,
        amount,
        percent,
        time:startDate,
        price,
        sumWork:0
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
              <Form.Control size="lg" type="number" className='mb-2' placeholder="количество" 
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>setAmount(Number(e.currentTarget.value))}
              />
              <Form.Control size="lg" type="number" className='mb-2' placeholder="цена" 
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>setPrice(Number(e.currentTarget.value))}
              />
              <Form.Control size="lg" type="number" className='mb-2' placeholder="процент" 
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>setPercent(Number(e.currentTarget.value))}
              />
               <Form.Select 
                    aria-label="Default select example" className='mb-2'
                    onChange={(e:ChangeEvent<HTMLSelectElement>)=>setMeasurement(e.currentTarget.value)}
               >
                  <option>измерение</option>
                  <option value="кв.М">кв.М</option>
                  <option value="куб.М">куб.М</option>
                  <option value="пог.М">пог.М</option>
                  <option value="штук">штук</option>
               </Form.Select>
              <DatePicker 
                  selected={startDate} 
                  onChange={(date) => setStartDate(date)} 
                  locale={ru}
                  dateFormat="dd MMMM yyyy"
                  />
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