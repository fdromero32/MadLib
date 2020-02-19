import React, { Component } from 'react'

const Story = (props) =>{

        return(
            <p>
            The {props.noun} {props.verb} to the {props.adj} {props.noun2}. They wanted to {props.verb2} the {props.adj2}.
            </p>
        )
    }

export default Story
