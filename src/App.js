import React, { Component } from 'react';
import photodeprofil from './images/photodeprofil.webp';
import Profile from "./Profile"
class App extends Component {
    state = {
        // person: {
        //     fullName: 'Ahmed Chachia',
        //     bio: 'A web developer with less than 1 year of experience.',
        //     imgSrc: photodeprofil,
        //     profession: 'Web Developer',
        // },
        show: false,
        // time: 0,
        // interval : null

    };

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         this.setState({
    //             time: this.state.time + 1
    //         });
    //     }, 1000);
        
    // }

    // componentWillUnmount() {
    //     clearInterval(this.state.interval);
    // }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>Toggle Show</button>
                {this.state.show &&
                    <Profile />
                }
                
            </div>
        );
    }
}

export default App;
