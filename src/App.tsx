import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddItem } from './components/AddItem.tsx'
import { useAppSelector } from './store/hooks.ts';

function App() {
    const works = useAppSelector((state)=>state.works.list)
  return (
    <div>
        <table>
            <tr>
                {works.map(el=><td>{el.description}</td>)}
                <AddItem/>
            </tr>
        </table>
    </div>
  )
}

export default App
