import React, {Component} from 'react';
import {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
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
            id: DISHES.length,
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
                <form onSubmit={(values) => this.handleSubmit(values)}>
                    <input type='text'
                        value={details.name}
                        onChange={(e) => setDetails({
                            ...details, name: e.target.value
                        })}
                        />
                    <input type='text'
                        value={details.image}
                        onChange={(e) => setDetails({
                            ...details, image: e.target.value
                        })}
                        />
                    <input type='text'
                        value={details.category}
                        onChange={(e) => setDetails({
                            ...details, category: e.target.value
                        })}
                        />
                    <input type='text'
                        value={details.label}
                        onChange={(e) => setDetails({
                            ...details, label: e.target.value
                        })}
                        />
                    <input type='number'
                        value={details.price}
                        onChange={(e) => setDetails({
                            ...details, price: e.target.value
                        })}
                        />
                    <input type='checkbox'
                        value={details.featured}
                        onChange={(e) => setDetails({
                            ...details, featured: e.target.value
                        })}
                        />
                    <input type='text'
                        value={details.description}
                        onChange={(e) => setDetails({
                            ...details, description: e.target.value
                        })}
                        />
                </form>
            </div>
        )
    }
}

export default NewDish;