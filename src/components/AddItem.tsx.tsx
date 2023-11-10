import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalDialog from './ModalDialog';
import Container from 'react-bootstrap/Container';


export interface AddItem {
//   prop?: string;
}

export function AddItem() {
    const [open, setOpen] = useState<boolean>(false)

    // function addItem(){
    //   setItems([...items, 'hello'])
    // }
    function openModal(){
        setOpen(!open)
    }
    return (
      <>
          <Container>
              <ModalDialog setOpen={openModal} opened={open}/>
                <ul>
                    {items.map((el,i)=><td key={el+i}>{el}</td>)}
               </ul>
               <Button 
                    type='button' 
                    variant="primary" 
                    size="lg"
                    onClick={openModal}
                    >Добавить работу
               </Button>
          </Container>
      </>
    )
}
