import React, {Component} from 'react';
import {Card, CardImg, CardBlock, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{

    renderDish(dish){
        return(
        <Card>
        <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        );
    }

    fixDate(date){
        const dateString = date.substring(0, 10);
        const dateArray = dateString.split('-');
        return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0]
        
    }
    renderComments(comments){
        return (
            <Card>
            <ul className='unstyled-list'>
            <h4>Comments</h4>
            {comments.map((comment) => (
                <li>
                <div key={comment.id}>
                <p>{comment.comment}</p>
                <p> --{comment.author}, {this.fixDate(comment.date)}</p>
                </div>
                </li>
            ))}
            </ul>
            </Card>
        );
    }
    render(){

    
    return(
    <div>
        <div className='col-12 md-col-5 m-1'>
        {this.renderDish(this.props.dish)}
        </div>
        <div className='col-12 md-col-5 m-1'>
        {this.renderComments(this.props.dish.comments)}
        </div>
    </div>
    )
    }

}


export default DishDetail;
