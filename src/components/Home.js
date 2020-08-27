import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

export class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/fred7francis/MIF/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data.slice(0, 5)
                })

            })
    }
    render() {

        const { posts } = this.state;
        const postList = posts.length ? (posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A Pokeball" />
                    <Link to={'/' + post.id}>
                        <div className="card-content">
                            <h4 className="red-text">{post.title}</h4>
                            <h5 className="black-text">{post.speaker}</h5>
                            <p className="grey-text">{post.dept}</p>
                        </div>
                    </Link>

                </div>
            )
        })) : (<div className="center">No posts yet</div>)

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home
