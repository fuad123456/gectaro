import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddItem } from './components/AddItem.tsx'
import { useAppSelector } from './store/hooks.ts';
import {Table} from 'react-bootstrap'
import { WorkItem } from './components/WorkItem/index.ts';
function App() {
    const works = useAppSelector((state)=>state.works.list)
    
  return (
    <div>
         <Table striped bordered hover>
            <tbody>
                <tr>
                    <th>Название работы</th>
                    <th>Измерение работы</th>
                    <th>Количество работы</th>
                    <th>Цена работы</th>
                    <th>Процент работы</th>
                    <th>дата работы</th>
                    <th>Выручка за работу</th>
                </tr>
            {works.map(function(el,i){
                return (
               <WorkItem
               el={el}
               index={i}
               />
               )
            })}
            </tbody>
         </Table>
        <AddItem/>
    </div>
  )
}

export default App
