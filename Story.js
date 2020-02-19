import Input from './Components/Input'

class Story extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <p>
            The {this.props.noun} {this.props.verb} to the {this.props.adj} {this.props.noun2}. They wanted to {this.props.verb2} the {this.props.adj2}.
            </p>
        )
    }
}
