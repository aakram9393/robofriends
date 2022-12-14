import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../containers/App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            Searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({ robots: users }));
         
    }

    onSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value });
    }

    render () {
        const {robots, Searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase())
        });
        return !robots.length ? 
        <h1>Loading</h1>:
        (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>           
                </div>
        );
        
    }
   
}

export default App;