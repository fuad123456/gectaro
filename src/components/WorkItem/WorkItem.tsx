
import { WorkItemType } from '../../store/WorkItemSlice';

export interface WorkItemProps {
  el:WorkItemType,
  index: number
}

export function WorkItem(props: WorkItemProps) {
	const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      } as const;
  return <tr>
	<td>{props.el.description}</td>
	<td>{props.el.measurement}</td>
	<td>{props.el.price}</td>
	<td>{props.el.amount}</td>
	<td>{props.el.percent}</td>
	<td>{props.el.time?.toLocaleDateString('ru-Ru',options)}</td>
	<td>{props.el.sumWork}</td>
  </tr>;
}
