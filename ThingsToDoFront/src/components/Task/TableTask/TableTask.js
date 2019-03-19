import React from 'react';
import './TableTask.css';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const TableTask = (props) => {
    const {task, history} = props;
    let compteur = 0;
    return (<div className="table-container">
        <div className="h2 text-center">Your Tasks</div>
        <div className="row">
            <div className="col-md-12 pad-10">
                <button onClick={()=> history.push(`/ajout`)} type="submit" className="btn btn-primary">
                    Add Task
                </button>
            </div>
        </div>
        <br/>
        <br/>
        <table className="table table-striped">
            <thead className="Table-head">
            <tr>
                <th>Numero</th>
                <th>Task</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>Start End</th>
            </tr>
            </thead>
            <tbody>

            {task.map((tasks) => (
                <tr key={compteur}>
                    {compteur=compteur+1}
                    <td>
                        <span>{tasks.name}</span>
                    </td>
                    <td>
                        <span>{tasks.description}</span>
                    </td>
                    <td>
                        <span>{tasks.priority}</span>
                    </td>
                    <td>
                        <span>{tasks.start_date}</span>
                    </td>
                    <td>
                        <span>{tasks.end_date}</span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
};

TableTask.propTypes = {
    task: PropTypes.array.isRequired,
};

export default withRouter(TableTask);