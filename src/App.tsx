import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddItem } from './components/AddItem.tsx'
import { useAppSelector } from './store/hooks.ts';
import {Table} from 'react-bootstrap'
function App() {
    const works = useAppSelector((state)=>state.works.list)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      } as const;
  return (
    <div>
         <Table striped bordered hover>
            <tbody>
                <tr>
                    <th>Название работы</th>
                    <th>Измерение работы</th>
                    <th>Количество работы</th>
                    <th>Процент работы</th>
                    <th>дата работы</th>
                </tr>
            {works.map(function(el){
                return (
                <tr>
                    <td>{el.description}</td>
                    <td>{el.measurement}</td>
                    <td>{el.amount}</td>
                    <td>{el.percent+'%'}</td>
                    <td>{el.time.toLocaleDateString('ru-Ru',options)}</td>
                </tr>
               )
            })}
            </tbody>
         </Table>
        <AddItem/>
    </div>
  )
}

export default App
