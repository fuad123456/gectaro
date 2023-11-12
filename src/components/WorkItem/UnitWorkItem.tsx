import { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../store/hooks';
import { updateWork } from '../../store/WorkItemSlice';
import { useAppSelector } from '../../store/hooks';
import DatePicker from 'react-datepicker'
import ru from 'date-fns/locale/ru';
type UnitWorkPropsType = {
    type: 'description' | 'id' | 'measurement' | 'time' | 'amount' | 'percent' | 'price' | 'sumWork',
    id:string
}

export default function UnitWorkItem(props:UnitWorkPropsType) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [updateMode, setUpdateMode] = useState<boolean>(false)
    const [value, setValue] = useState<number|string|Date|null>(null)
    const dispatch = useAppDispatch()
    const el = useAppSelector((state)=>state.works.list)
    const field = el.find(item=>item.id === props.id)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      } as const;
    function handleOnBlur(){
        if (props.type==='time'){
            dispatch(updateWork({type: props.type, value:startDate, id:props.id}))
        } else {
            dispatch(updateWork({type: props.type, value, id:props.id}))
        }
        setUpdateMode(false)
        console.log( props.type)
        console.log( value)
      }
  return (
    <td onDoubleClick={() => setUpdateMode(true)}>
    {updateMode ? (
        props.type === 'measurement' ? (
        <select
          value={value !== null ? value as string : ''}
          className='form-control form-control-md'
          autoFocus
          onBlur={handleOnBlur}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)}
        >
          {/* Вставьте опции для select */}
          <option>кв.М</option>
          <option>куб.М</option>
          <option>пог.М</option>
          <option>Шт</option>
        </select>
        ) : props.type === 'time' ? (
        <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          locale={ru}
          onBlur={handleOnBlur}
          dateFormat="dd MMMM yyyy"
        />
        ) : (
        <input
          value={value !== null ? value as string : ''}
          className='form-control form-control-md'
          type='text'
          autoFocus
          onBlur={handleOnBlur}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
        />
        )
        ) : (
  <span>{field ? (props.type==='time' ? field[props.type].toLocaleDateString('ru-Ru',options) : String(field[props.type])):''}</span>
    )}
  </td>

  )
}
