import { Component } from "react";

export class ToDoList extends Component {
    state = {
        myInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState ({ myInput: e });
    }

    addItem (input) {
        if (input === '') {
            alert ('Pleace, enter an item');
        }
        else {
        let listArrey = this.state.toDoList;
        listArrey.push(input);
        this.setState ({ toDoList: listArrey, myInput: ''});
        }
        console.log(input);
    }

    deleteItem () {
        let listArrey = this.state.toDoList;
        listArrey = [];
        this.setState({toDoList: listArrey});
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle ('crossed');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <input type= "text" 
                    placeholder="Write your task" 
                    onChange={ (e) => {this.onChangeEvent(e.target.value)} } 
                    value={ this.state.myInput }/>
                </div>
                <div className="container">
                    <button className="btn btn-add" onClick={() => this.addItem(this.state.myInput)}>ADD</button>
                </div>
                <ul>
                    { this.state.toDoList.map((item, index) => (
                        <li onClick={ this.crossedWord } key={ index }>{ item }</li>
                    ))}
                </ul>
                <div className="container">
                    <button className="btn btn-delete" onClick={() => this.deleteItem()}>DELETE</button>
                </div>
            </div>
        )
    }
}