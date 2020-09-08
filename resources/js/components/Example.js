import React from 'react';
import {Link} from "react-router-dom";

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoader: false,
            items: []
        }
    }

    componentDidMount() {
        // $.ajax({
        //     url: '/api/test',
        //     type: 'GET',
        //     success: function (data) {
        //         console.log(data);
        //     },
        //     error: function (data) {
        //
        //     },
        // })
    }

    render() {
        return (
            <div>
                <div>
                    <Link to='/test'>Test 12</Link>
                </div>
                <div>
                    <Link to='/post/add'>Post Add</Link>
                </div>
                <div>
                    <Link to='/post/1/edit'>Edit post</Link>
                </div>
                <div>
                    <Link to='/posts'>All post</Link>
                </div>
            </div>
        );
    }
}
