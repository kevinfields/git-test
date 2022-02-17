import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button} from 'reactstrap';
// import {useState} from 'react';
// import {Breadcrumb, BreadcrumbItem, Label, Col, Row} from 'reactstrap';
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
            <div id='form-container' className='col-12 col-md-9'>
                <LocalForm onSubmit={(details) => this.handleSubmit(details)}>
                    <Control.text 
                    model='.dishname' 
                    id='dishname'
                    name='dishname'
                    className='form-control' 
                    placeholder='Dish Name' 
                    />
                    {/* <Control.text
                    model='.dishimage'
                    id='dishimage'
                    name='dishimage'
                    className='form-control'
                    placeholder='Dish Image'
                    /> */}
                    <Control.text
                    model='.category'
                    id='category'
                    name='category'
                    className='form-control'
                    placeholder='Category'
                    />
                    <Control.text
                    model='.label'
                    id='label'
                    name='label'
                    className='form-control'
                    placeholder='Label'
                    />
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
                    <Control.textarea
                    model='.description'
                    id='description'
                    name='description'
                    className='form-control'
                    placeholder='description'
                    />
                    <Button type='submit'>
                        Add Dish
                    </Button>
                </LocalForm>
            </div>
        )
    }
}

export default NewDish;