import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

/* import HomePage from './pages/homepage/homepage.component' */

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to='/topics'>Topics</Link>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1> HATS PAGE </h1>
    </div>
  );
};

const TopicsList = props => {
  return(
    <div>
      <h1> TOPIC LIST PAGE </h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  return(
    <div>
      <h1> TOPIC DETAIL PAGE { props.match.params.topicId }</h1>
    </div>
  );
};

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/topics' component={TopicsList}></Route>
      <Route path='/topics/:topicId' component={TopicDetail}></Route>
    </Switch>
    {/* <HomePage></HomePage> */}
  </div>;
}

export default App;
