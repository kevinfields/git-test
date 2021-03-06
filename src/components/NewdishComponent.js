import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button} from 'reactstrap';
// import {useState} from 'react';
import { Label, Col, Row} from 'reactstrap';
// import {Link} from 'react-router-dom';
// import { DISHES } from '../shared/dishes';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(Number(val));

class NewDish extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(details) {
        console.log('Current state is: ' + JSON.stringify(details));

        const newDish = {
            id: Math.floor(Math.random() * 99999999),
            name: details.dishname,
            image: '/images/vadonut.png',
            category: details.category,
            label: details.label,
            price: Number(details.price),
            featured: false,
            description: details.description,
        }
        this.props.postDish(newDish);
        this.props.resetDishForm();

    }

    render() {
        return (
            <div id='form-container' className='col-12 col-md-5'>
                <h3 id='dish-form-header'>New Dish Form</h3>
                <LocalForm onSubmit={(details) => this.handleSubmit(details)}>
                    <Row className='form-group'>
                    <Col>
                    <Label htmlFor='dishname'>Dish Name</Label>
                    <Control.text 
                    model='.dishname' 
                    id='dishname'
                    name='dishname'
                    className='form-control' 
                    placeholder='Dish Name'
                    />
                    </Col>
                    </Row>
                    {/* <Control.text
                    model='.dishimage'
                    id='dishimage'
                    name='dishimage'
                    className='form-control'
                    placeholder='Dish Image'
                    /> */}
                    <Row className='form-group'>
                    <Col>
                    <Label htmlFor='category'>Category</Label>
                    <Control.text
                    model='.category'
                    id='category'
                    name='category'
                    className='form-control'
                    placeholder='Category'
                    />
                    </Col>
                    </Row>
                    <Row className='form-group'>
                    <Col>
                    <Label htmlFor='label'>Label</Label>
                    <Control.text
                    model='.label'
                    id='label'
                    name='label'
                    className='form-control'
                    placeholder='Label'
                    />
                    </Col>
                    </Row>
                    <Row className='form-group'>
                    <Col>
                    <Label htmlFor='price'>Price</Label>
                    <Control.text
                    model='.price'
                    id='price'
                    name='price'
                    className='form-control'
                    placeholder='0.00'
                    />
                    <Errors 
                        className='text-danger'
                        model='.price'
                        show='touched'
                        messages={{
                            required: 'Required',
                            isNumber: 'Must be a number'
                        }}
                        />
                    </Col>
                    </Row>
                    <Row className='form-group'>
                    <Col>
                    <Label htmlFor='description'>Description</Label>
                    <Control.textarea
                    model='.description'
                    id='description'
                    name='description'
                    className='form-control'
                    placeholder='Description'
                    />
                    </Col>
                    </Row>
                    <Row className='form-group'>
                    <Col>
                    <Button type='submit'>
                        Add Dish
                    </Button>
                    </Col>
                    </Row>
                </LocalForm>
            </div>
        )
    }
}

export default NewDish;