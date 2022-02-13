import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Label, Modal, ModalHeader, ModalBody, Button, Row, Col} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

    function RenderDish({dish}){
        if (dish && dish != null) {
        return(
        <div className='col-12 col-md-5 m-1'>
        <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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

    function RenderComments({comments, addComment, dishId}){
        if (comments && comments !== null) {
        return (
            <div className='col-12 col-md-5 m-1'>
            <ul className='list-unstyled'>
            <h4>Comments</h4>
            {comments.map((comment) => (
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p> --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            ))}
            </ul>
            <CommentForm dishId={dishId}
                addComment={addComment}
                />
            </div>
        );
            } else {
                return <div></div>;
            }
    }

    class CommentForm extends Component {

        constructor(props) {
            super(props)

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

            this.state = {
                isNavOpen: false,
                isModalOpen: false,
            };

        }
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values) {
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
        }

        render() {
            return(
                <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col>
                                <Label htmlFor='author'>Your Name</Label>
                                <Control.text 
                                model='.author' 
                                id='author'
                                name='author'
                                className='form-control' 
                                placeholder='Your Name'
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(15),
                                }}/>
                                <Errors 
                                        className='text-danger'
                                        model='.author'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                       /> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment"
                                            rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" className="bg-primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                   </Modal>
                </div>
                );
        }

    }



    const DishDetail = (props) => {
        
        if (props.isLoading) {
            return (
                <div className='container'>
                    <div className='row'>
                        <Loading />
                    </div>
                </div>
            )
        } else if (props.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        } else if (props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }



export default DishDetail;
