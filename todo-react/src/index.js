import React ,{ Component }from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todo/TodoApp';
import './index.css';
import './bootstrap.css';


class App extends Component {
    render() {
        return (
            <div>
                <TodoApp/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));

