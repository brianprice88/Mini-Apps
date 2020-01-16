import React from 'React';

class Rows extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                {/* {this.props.name} */}
                <td name = '1' fillIn = {this.props.fillIn} style={{ backgroundColor: 'red'}} >{this.props.name}</td>
                <td name = '2' fillIn = {this.props.fillIn} >{this.props.name}</td>
                <td name = '3' fillIn = {this.props.fillIn} >{this.props.name}</td>
                <td name = '4' fillIn = {this.props.fillIn} >{this.props.name}</td>
                <td name = '5' fillIn = {this.props.fillIn} >{this.props.name}</td>
                <td name = '6' fillIn = {this.props.fillIn} >{this.props.name}</td>
                <td name = '7' fillIn = {this.props.fillIn} >{this.props.name}</td>
            </tr>
        )
    }


}



export default Rows;