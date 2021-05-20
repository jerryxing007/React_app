import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/person';

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        this.props.addPerson(personObj)
        this.nameNode.value = ""
        this.ageNode.value = ""
    }

    render() {
        return (
            <div>
                <h2>Person Component, Count: {this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="Enter Name"></input>
                <input ref={c => this.ageNode = c}type="text" placeholder="Enter Age"></input>
                <button onClick={this.addPerson}>Add Person</button>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({persons: state.persons, count:state.count}),
    {addPerson},
)(Person)
