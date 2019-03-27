import * as React from 'react';
import { RowItem } from './RowItem';
import { Client } from './commons/Client';
import {Table} from 'reactstrap';

export interface Props {
    clients: Array<Client>
}




interface State {
}

export class ListClients extends React.Component<Props,State> {

    constructor(props: Props){
        super(props);

        this.state = {
            selected: {}
        }

    }

    render() {
        return (

            <Table bordered striped hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Account Type</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.clients.map((client) => {
                  return (
                    <RowItem  client={client}/>
                  );
                })
              }
            </tbody>
          </Table>


        );
    }
}