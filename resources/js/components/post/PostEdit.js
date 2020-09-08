import React from 'react';

export default class PostEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                id: props.match.params.id,
                title: '',
                description: '',
                author: '',
            },
            error: null,
        }

        this.setField = this.setField.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }


    componentDidMount() {
        const id = this.state.post.id

        axios.get('/api/post/' + id )
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        post: result.data,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    })
                }
            );
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

        axios.post('/api/post/update', this.state.post)
            .then(
                (result) => {
                    console.log(result)
                    alert('пост был успешно обновлен')
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

                <input className='btn btn-info' type='submit' value='Update'/>

                <div className='error'>{this.state.error}</div>
            </form>
        );
    }
}
