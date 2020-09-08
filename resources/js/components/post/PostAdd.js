import React from 'react';

export default class PostAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: '',
                description: '',
                author: '',
            },
            error: null,
        }

        this.setField = this.setField.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    setField(field, e) {
        this.setState({
            post: {...this.state.post, [field]: e.target.value}
        })
    }

    validate() {
        // const error
        return false
    }

    submitHandler(e) {
        e.preventDefault()

        const error = this.validate()

        if (error) {
            return
        }

        axios.post('/api/post/save', this.state.post)
            .then(
                (result) => {
                    console.log(result)
                    alert('пост был успешно добавлен')
                },
                (error) => {
                    console.log(error)
                },
            )

    }

    render() {
        const {title, description, author} = this.state.post

        return (
            <form onSubmit={this.submitHandler}>
                <label>Title:</label>
                <input className='form-control' type='text' placeholder='title'
                       value={title}
                       onChange={this.setField.bind(null, 'title')}/>

                <label>Description:</label>
                <input className='form-control' type='text' placeholder='description'
                       value={description}
                       onChange={this.setField.bind(null, 'description')}/>

                <label>Author:</label>
                <input className='form-control' type='text' placeholder='author'
                       value={author}
                       onChange={this.setField.bind(null, 'author')}/>

                <input className='btn btn-primary' type='submit' value='Create'/>

                <div className='error'>{this.state.error}</div>
            </form>
        );
    }
}
