import * as React from 'react';
import { UncontrolledAlert } from 'reactstrap';

export interface Props {
    alertType: NotifyType,
    msg: string,
    isOpen: boolean
}
export type NotifyType = 'info' | 'success' | 'danger';

export function Notify(props: Props) {
  return (
    <UncontrolledAlert color={props.alertType} isOpen={props.isOpen}>
      {props.msg}
    </UncontrolledAlert>
  );
}
