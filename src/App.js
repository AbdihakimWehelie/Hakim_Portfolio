import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Projects from './components/Projects'
import Bottom from './components/bottom'
import NavBar from './components/navbar/index.js'
import './App.css';


function App() {
  return (
        <BrowserRouter>
          <NavBar/>
            <Switch>
                <Route component={Home} path='/' exact/>
                <Route component={About} path='/About'/>
                <Route component={SinglePost} path='/SinglePost/:slug'/>
                <Route component={Post} path='/Post'/>
                <Route component={Projects} path='/Projects'/>
            </Switch>
            <Bottom/>
        </BrowserRouter>
  );
}

export default App;
