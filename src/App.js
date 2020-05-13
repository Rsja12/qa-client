import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import QuestionsIndex from './questions/QuestionsIndex'
import QuestionShow from './questions/QuestionShow'
import { Callback } from './Callback'

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path='/' component={QuestionsIndex} />
            <Route exact path='/question/:id' component={QuestionShow} />
            <Route exact path='/callback' component={Callback} />
        </div>
    )
}

export default App
