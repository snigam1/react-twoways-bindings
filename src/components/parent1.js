import React from 'react';
import {Child1} from './child1';
import { Container, Row, Col,Button } from 'reactstrap';
import { Progress } from 'reactstrap';


export class Parent1 extends  React.Component {

    constructor(props){
        super(props);
        this.state = {
            size : 25
        }
     
    }

    increase = () =>  {
        this.setState(
            {size: this.state.size +1}
        )
    }

    decrease = () =>  {
        this.setState(
            {size: this.state.size -1}
        )
    }


    render() {
        return (
           <Container> 
                <Row>
                    <Col>Parent Component</Col>
                </Row>
                <Row>
                    <Col> &nbsp; </Col>
                </Row>
                <Row>
                    <Col> 
                        
                        <Button color="primary" onClick={this.decrease} > - </Button>{' '}
                            <span className="text-center"> {this.state.size}% </span> 
                         
                         <Button color="primary" onClick={this.increase} > + </Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col> &nbsp; </Col>
                </Row>
                <Row>
                <Col>
                    <Child1 size={this.state.size}/>
                </Col>
                    
                </Row>
                
            </Container>
        )
    }

   
}
