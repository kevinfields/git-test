import React, {Component} from 'react';
import {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
import { DISHES } from '../shared/dishes';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class NewDish extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        console.log('Current state is: ' + JSON.stringify(details));

        const newDish = {
            id: DISHES.length + 1,
            name: details.dishname,
            image: '/images/cereal.png',
            category: details.category,
            label: details.label,
            price: details.price,
            featured: details.featured,
            description: details.description,
        }
        this.props.resetDishForm();
        this.props.postDish(newDish);
        
    }

    render() {
        return (
            <div id='form-container' className='col-12 col-md-9'>
                <Form onSubmit={() => this.handleSubmit()}>

                </Form>
            </div>
        )
    }
}

export default NewDish;