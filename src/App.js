import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import ExerciceList from './components/ExerciceList'
import EditExercice from './components/EditExercice'
import CreateExercice from './components/CreateExercice'
import CreateUser from './components/CreateUser' 


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciceList} />
        <Route path="/edit/:id" component={EditExercice} />
        <Route path="/create" component={CreateExercice} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
