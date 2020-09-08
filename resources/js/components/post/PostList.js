import React from 'react';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            error: null,
            isLoader: false,
        }
    }

    componentDidMount() {
        axios.get('/api/posts')
            // .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result.data,
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

    render() {
        const {error, isLoaded, posts} = this.state

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else if (posts.length > 0) {
            return (
                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        } else {
            return (
                <div>Нет записей</div>
            )
        }
    }
}
