import axios from 'axios';
import React, { Component } from 'react';
import Container from '@mui/material/Container';

import Project from '../components/Project';
import CircularProgress from '@mui/material/CircularProgress';

//TODO
//Convert the whole project form into the form to send the update function on the Edit button

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
            this.state.projects.map(project => <Project key={project.projectId} project={project}/>)
        ) : (
            <CircularProgress size={100} style={{position: 'absolute', left: '45%', right: '55%'}} />
        );
        return (
            <Container maxWidth="sm">
                {recentProjectsMarkup}
            </Container>
        )
    }
}

export default projects
