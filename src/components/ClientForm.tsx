import * as React from 'react';
import { Form, FormGroup, Label, Input, Button, Col} from 'reactstrap';
import { ListClients } from './ListClients';
import axios from 'axios';
import { Client, Type} from './commons/Client';
// import { Notify} from './commons/Notify';

export interface Props { }
interface State {
  clients: Array<Client>;
  notify: boolean;
  firstName: string;
  lastName: string;
  type: Type;

}

class ClientForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      notify: false,
      clients: [],
      firstName: '',
      lastName: '',
      type: 'Business'

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    axios.get(`http://localhost:8080/client`).then((res) => {
      const clientList = res.data._embedded.client;

      res.data._embedded.client.map(function (item: any, index: number) {
        clientList.push(new Client(item));
      });

      this.setState({
        clients: clientList,
      });
    });
  }

  handleChange(event: React.SyntheticEvent) {
    let target = event.target as HTMLInputElement;
    const eventName = target.name;
    switch(eventName){
      case "firstName": {
        this.setState({ 
          firstName: target.value,
        });
      }
      case "lastName": {
        this.setState({ 
          lastName: target.value,
        });
      }
      case "type": {
        this.setState({ 
          type: target.value == 'Business' ? 'Business' : 'Individual' 
        });
      }

    }
   
  }

  handleSubmit(event: React.SyntheticEvent) {
    const data = { firstName: this.state.firstName, lastName: this.state.lastName, type: this.state.type }
    var headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/client`, data, { headers: headers })
      .then((response) => {
        const  client = new Client(response.data);
        this.setState({clients: [...this.state.clients, client]});
        this.setState({notify: true});
        this.setState({firstName: '', lastName: '', type: 'Business'});
      })
      .catch((error) => {
        console.log('failed....');
      })
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header">
              <h1>Intuit Craft Demo - Plano Accounting</h1>
        </div>
        <Form onSubmit={this.handleSubmit} marginWidth={20}>
          <FormGroup row> 
            <Label for="firstName" sm={2} size="lg">First Name:</Label>
            <Col sm={10}>
            <Input name="firstName" id="firstName"  onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row> 
            <Label for="lastName" sm={2} size="lg" >Last Name:</Label>
            <Col sm={10}>
            <Input name="lastName" id="lastName" onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row> 
            <Label for="type" sm={2} size="lg">Account Type:</Label>
            <Col sm={10}>
            <Input type="select" name="type" id="type" onChange={this.handleChange}>
              <option>Business</option>
              <option>Individual</option>
            </Input>
            </Col>
          </FormGroup>                    
          <FormGroup>                    
          <Button>Add</Button>
          {/* { (this.state.notify) && <Notify alertType="info" msg="Client added" isOpen={this.state.notify}></Notify> } */}
          </FormGroup>  
        </Form>
        <ListClients clients={this.state.clients} />

      </React.Fragment>
    );
  }
}

export default ClientForm;
