import axios from 'axios';
import React, { Component } from 'react';

import Project from '../components/Project';

class projects extends Component {
    state = {
        projects: null
    }
    componentDidMount(){
        axios.get('/projects')
            .then(res => {
                console.log(res.data)
                this.setState({
                    projects: res.data
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        let recentProjectsMarkup = this.state.projects ? (
            // this.state.projects.map(project => <p>{project.address}</p>)
            this.state.projects.map(project => <Project key={project.projectId} project={project}/>)
        ) : (
        <p>Loading...</p>
        );
        return (
            <div>
                {recentProjectsMarkup}
            </div>
        )
    }
}

export default projects
