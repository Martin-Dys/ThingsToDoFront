import React from 'react';
import './AjoutTask.css';
import { API_URL } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class AjoutTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            priority: '',
            start_date: '',
            end_date: '',
        };
        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangePriority = this.handleChangePriority.bind(this);
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    }

    notify = () => {
        toast.success("Success !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    createTask() {

        let data = {
            "name": this.state.name,
            "description": this.state.description,
            "start_date": this.state.start_date,
            "end_date": this.state.end_date,
            "priority": this.state.priority,
        };

        fetch(`${API_URL}/task/`, {
            method: "POST",
            crossDomain: true,
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);

            this.notify();

            this.props.history.push('/');


        }).catch((err) => {
            console.log(err);
        });
    }

    handleCreateTask = (event) => {
        event.preventDefault();
        confirmAlert({
            title: 'Confirmation',
            message: 'Etes-vous sûr?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.createTask()
                },
                {
                    label: 'Non',
                    onClick: () => console.log('Click No')
                }
            ]
        })
    };

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    handleChangePriority(event) {
        this.setState({priority: event.target.value});
    }

    handleChangeStartDate(event) {
        this.setState({start_date: event.target.value});
    }

    handleChangeEndDate(event) {
        this.setState({end_date: event.target.value});
    }

    render() {

        return (
            <div className="form-horizontal pad-10">
                <ToastContainer />
                <div className="h2 text-center">Ajout Task</div>
                <br/>
                <form className="row pad-10" onSubmit={this.handleCreateTask}>
                    
                    <div className="col-md-6 form-group">
                        <label htmlFor="nom"  className="control-label">Name</label>
                        <div className="col-md-12 no-padding">
                            <input name="nom" value={this.state.nom} onChange={this.handleChangeName} id="nom" className="form-control" placeholder="" type="text" required />
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="description" className="control-label">Description</label>
                        <div className="col-md-12 no-padding">
                            <input value={this.state.description} onChange={this.handleChangeDescription} name="description" id="description" className="form-control" placeholder="" type="text" required />
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="priority"  classpriority="control-label">Priority</label>
                        <div classpriority="col-md-12 no-padding">
                            <input value={this.state.priority} onChange={this.handleChangePriority} id="priority" className="form-control" placeholder="" type="number" required />
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="start date"  classpriority="control-label">Start Date</label>
                        <div classpriority="col-md-12 no-padding">
                            <input value={this.state.start_date} onChange={this.handleChangeStartDate} id="start_date" className="form-control" placeholder="" type="date" required />
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="end date"  classpriority="control-label">End Date</label>
                        <div classpriority="col-md-12 no-padding">
                            <input value={this.state.end_date} onChange={this.handleChangeEndDate} id="end_date" className="form-control" placeholder="" type="date" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <button type="submit" className="btn btn-save btn-primary">Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default AjoutTask;