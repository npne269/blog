import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetails from './components/BlogDetails';
import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AllTags from './components/AllTags';
import Error from './Error';

import './App.css';

import { data } from './data';


function App() {
  const [isDark, setDark] = useState('darkTheme');
  const handleTheme = () => {
    if (isDark === 'darkTheme') {
      setDark('lightTheme');
      localStorage.setItem('currentTheme', 'lightTheme');
    } else {
      setDark('darkTheme');
      localStorage.setItem('currentTheme', 'darkTheme');
    }

  }
  useEffect(() => {
    // Update the document title using the browser API
    let isMounted = true;
    const theme = localStorage.getItem('currentTheme');
    if (isMounted) {
      setDark(theme)
    }
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div className={"app " + isDark} >
      <Router>
        <Header theme={isDark} handleTheme={handleTheme} />
        <Switch>
          
          <Route path='/blogs/:blogId' exact render={(props) => {
            const id = props.match.params.blogId;
            const blog = data.find(blog => { return blog.id === Number(id) });
            return blog?<BlogDetails blog={blog}/>:<Error/>
          }} />
          
          <Route path='/blogs' exact component={BlogList} />

          <Route path='/addblog' exact component={AddBlog} />
          
          <Route path='/tags' exact component={AllTags}/>
          
          <Route path='/' exact component={Home} />
          
          <Route component={Error} />
        
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
