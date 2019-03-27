import * as React from 'react';

import { Client } from './commons/Client'

interface Props {
    client: Client;
}

interface State { }

export class RowItem extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>
                        {this.props.client.firstName}, {this.props.client.lastName}
                    </td>
                    <td>{this.props.client.type}</td>
                </tr>
      </React.Fragment>
        );
    }
}
