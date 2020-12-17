import { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Avatar">
                <img width={this.props.width} route={this.props.route} />
            </div>
        );
    }
}









export default Avatar;