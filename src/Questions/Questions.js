import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Questions extends Component {

    state = {
        questions: null
    }

    async componentDidMount() {
        const questions = ( await axios.get('http://localhost:8081/') ).data
        this.setState({
            questions
        })
    }

    renderCards() {
        if( this.state.questions === null ) return <div>Loading...</div>

        return this.state.questions.map( question => (

            <div key={question.id} className='col-sm-12 col-md-4 col-lg-3'>
               <Link to={`/question/${question.id}`}>
                   <div className='card text-white bg-success mb-3'>

                       <div className='card-header'>Answers: {question.answers}</div>
                       <div className='card-body'>
                           <h4 className='card-title'>{question.title}</h4>
                           <p className='card-text'>{question.description}</p>
                       </div>

                   </div>
               </Link>
           </div>

       ) )
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    { this.renderCards() }
                </div>
            </div>
        )
    }

}

export default Questions