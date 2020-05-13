import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import QuestionsIndex from './questions/QuestionsIndex'
import QuestionShow from './questions/QuestionShow'

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path='/' component={QuestionsIndex} />
            <Route exact path='/question/:id' component={QuestionShow} />
        </div>
    )
}

export default App
