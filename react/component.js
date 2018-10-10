class App extends React.Component {
    constructor (props) {
        super(props); //Call to the constructor of the base class
        this.state = {
            name: props.name,
            elements: [],
            message: ''
        };
    }

    changeName() {
        this.setState({
            name: 'Anna'
        });
    }

    addElement() {
        const oldElements = this.state.elements;
        this.setState({
            elements: oldElements.concat(oldElements.length + 1)
        });
    }

    changeMessageInput(event){
        this.setState({
            message: event.target.value
        });
    }

    render() {
        // Equivalent to v-if in Vue or ng-if on Angular
        let updatedParagraph = '';
        let nameParagraphClass = '';
        if (this.state.name != this.props.name){
            updatedParagraph = <p>Name updated!</p>;
            nameParagraphClass = 'updated';
        }
        // Equivalent to v-for in Vue or ng-for on Angular
        let list = this.state.elements.map( (el) => {
            const liStyle = {
                backgroundColor: el%2===0?'green':'red'
            };
            return <li key={el} style={liStyle}>{el}</li>
        });

        return (
            <div>
                <p className={nameParagraphClass}>{this.state.name}</p>
                {updatedParagraph}
                <button onClick={this.changeName.bind(this)}>Change Name</button>
                <button onClick={this.addElement.bind(this)}>New Element</button>
                <ul>
                    {list}
                </ul>
                <input type="text" value={this.state.message} 
                onChange={this.changeMessageInput.bind(this)}></input>
                <p>{this.state.message}</p>
            </div>
	    );
    }
}

//const element = React.createElement('p', null, 'Max');
ReactDOM.render(<App name="Max" />, document.querySelector('#app'));
