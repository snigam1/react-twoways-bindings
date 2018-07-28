import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

 export  class Child1 extends React.Component {
    
    render() {
        let width = this.props.size + '%'
        let src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=" + this.props.size    + "&w=318&h=180"
        return (
            <div align="center">
            <Card>
              <CardImg style={{width:this.props.size + '%' }}  src={src} alt="Card image cap" />
              <CardBody>
                <CardTitle>Child Component</CardTitle>
                <CardText>Image Size changes by changing the size from Parent component.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        )
    } 
}

