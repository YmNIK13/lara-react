import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoader: false,
            items: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: '/api/test',
            type: 'GET',
            success: function (data) {
                console.log(data);
            },
            error: function (data) {

            },
        })
    }

    render() {
        return (
            <div className="container">
                TEST
            </div>
        );
    }
}
