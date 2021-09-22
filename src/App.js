import { Route, Switch } from 'react-router'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'

function App() {
  const Topics = (props) => {
    console.log(props)
    return <h2>Topics</h2>
  }
  // const TopicDetail = (props) => {
  //   console.log(props)
  //   return (
  //     <div>
  //       <h1> {props.match.params.topicId}</h1>
  //     </div>
  //   )
  // }
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Topics} />
      </Switch>
      {/* <Route exact path='/' component={Homepage} />
      <Route path='/topic' component={Topics} />
      <Route path='/topic/:topicId' component={TopicDetail} /> */}
    </div>
  )
}

export default App
