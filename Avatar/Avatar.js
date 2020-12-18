import { Component } from 'react';
import logo from '../assets/avatarIMG.jpg';
import './Avatar.css';

class Avatar extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        isSquere: false
    };

    changeShape = () =>{
        this.setState({isSquere: !this.state.isSquere});
    }

    render() {
        const classname = this.state.isSquere ? 'squere' : 'circle';
    
        return (
            <div className="Avatar">
                <img className={classname} width={this.props.width} src={logo} width={150} height={150} />
                <button onClick={this.changeShape}>cahnge shape</button>
            </div>
        );
    }
}









export default Avatar;