import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import TableTask from './TableTask/TableTask.js';
import Loading from '../shared/Loading/Loading';

class Task extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            task: [],
            error: null
        }
    }

    componentDidMount() {
        this.fetchTask();
    }

    fetchTask() {
        this.setState({ loading: true });
        fetch(`${API_URL}/task/`, {
            method: "GET",
            crossDomain: true
        })
            .then(handleResponse)
            .then((data) => {
                const task  = data
                this.setState({
                    task,
                    loading: false
                });
            })
            .catch((error) => {
                this.setState({ error : error.errorMessage, loading: false });
            });
    }


    render() {
        const {loading, error, task} = this.state;
        if(loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if(error) {
            return <div className="error">{error}</div>
        }
        return (
            <div>
                <TableTask task={task} />
            </div>
        )
    }
}

export default Task;