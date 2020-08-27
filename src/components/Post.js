import React, { Component } from 'react'
import axios from 'axios'

export class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('http://my-json-server.typicode.com/fred7francis/MIF/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })

    }
    render() {

        const post = this.state.post ? (
            <div class="post">
                <h4 class="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        )
            : (<div class="center">Loading post......</div>)
        return (
            <div className="container">
                {post}
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
            </div>
        )
    }
}

export default Post
