import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


    function RenderDish({dish}){
        if (dish && dish !== null) {
        return(
        <div className='col-12 col-md-5 m-1'>
        <Card>
        <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
        );
        } else {
            return <div></div>
        }
    }

    function RenderComments({comments}){
        if (comments && comments !== null) {
        return (
            <div className='col-12 col-md-5 m-1'>
            <Card>
            <ul className='list-unstyled'>
            <h4>Comments</h4>
            {comments.map((comment) => (
                <li key={comment.id}>
                <div key={comment.id}>
                <p>{comment.comment}</p>
                <p> --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
                </li>
            ))}
            </ul>
            </Card>
            </div>
        );
            } else {
                return <div></div>;
            }
    }
    const DishDetail = (props) => {

    if (props.dish) {
    return(
    <div className='container'>
        <div className='row'>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
        </div>
    </div>
    )
    } else {
        return <div></div>;
    }
    }



export default DishDetail;
