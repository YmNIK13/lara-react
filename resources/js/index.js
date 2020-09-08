import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Example from "./components/Example";
import Test from "./components/test";
import PostAdd from "./components/post/PostAdd";
import PostEdit from "./components/post/PostEdit";
import PostList from "./components/post/PostList";


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Example/>

            <Switch>
                <Route exact path='/test' component={Test}/>
                <Route exact path='/post/add' component={PostAdd}/>
                <Route exact path='/post/:id/edit' component={PostEdit}/>
                <Route exact path='/posts' component={PostList}/>
            </Switch>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
