import React, { Component } from 'react'
import axios from 'axios'

export class GetsData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         fail : ""
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts : response.data})
            })
            .catch(error =>{
                this.setState({fail : "there was an error"})
            })
    }
  render() {
    const { posts, fail } = this.state
    return (
      <div>
        {posts.length&&
            posts.map(data=><div key={data.id}>{data.title}</div>)
        }
        {fail && <div>{fail}</div>}
      </div>
    )
  }
}

export default GetsData