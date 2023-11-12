
import { WorkItemType} from '../../store/WorkItemSlice';
import UnitWorkItem from './UnitWorkItem';

export interface WorkItemProps {
  el:WorkItemType,
  index: number
}

export function WorkItem(props: WorkItemProps) {
  return <tr>
    {/* <td>{props.el.description}</td>
    <td>{props.el.measurement}</td>
    <td>{props.el.amount}</td> */}
	<UnitWorkItem
		type={'description'}
		id={props.el.id}
	/>
	<UnitWorkItem
		type={'measurement'}
		id={props.el.id}
	/>
	<UnitWorkItem
		type={'amount'}
		id={props.el.id}
	/>
	<UnitWorkItem
		type={'price'}
		id={props.el.id}
	/>
	<UnitWorkItem
		type={'percent'}
		id={props.el.id}
	/>
	<UnitWorkItem
		type={'time'}
		id={props.el.id}
	/>
	<UnitWorkItem
		type={'sumWork'}
		id={props.el.id}
	/>
    {/* <td>{props.el.percent}</td>
    <td>{props.el.time?.toLocaleDateString('ru-Ru',options)}</td>
    <td>{props.el.sumWork}</td> */}
  </tr>;
}
