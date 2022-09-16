import { Component } from "react";
import '../sass/css/main.min.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 5
        }
    }
    render () {
        
            const decCount = () => {
                this.setState({
                    count : this.state.count - 1
                })
            }
            const resCount = () => {
                this.setState ({
                    count : 0
                })
            }
            const incCount = () => {
                this.setState ({
                    count : this.state.count + 1
                })
            }

        return (
            <div className="container-sm bg-primary rounded text-center py-5 mt-4 text-light">
                <p className="display-6">Counter App</p>
                <h2 className="h1">{this.state.count}</h2>
                <div className="btn-group btn-group-lg mt-2">
                    <button 
                        onClick={incCount} 
                        id='pls' 
                        className="btn btn-sm btn-success text-light"
                    >
                        <i 
                            className="bi bi-patch-plus"
                        >
                        </i>
                    </button>
                    {
                        this.state.count !== 0 &&
                        <button 
                            onClick={resCount} 
                            id='res' 
                            className="btn btn-lg btn-danger" 
                            disabled = {this.state.count <= 0}
                        >Reset
                        </button>
                    }
                    {
                        this.state.count !== 0 && 
                        <button 
                            onClick={decCount} 
                            id='min' 
                            className="btn btn-sm btn-warning text-light" 
                            disabled = {this.state.count <= 0}
                        >
                            <i 
                                className="bi bi-patch-minus"
                            >
                            </i>
                        </button>
                    }
                </div>
            </div>
        );
    }
}