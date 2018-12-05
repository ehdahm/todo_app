import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Header extends React.Component {
    //This is stateful functional component
    constructor(props) { // Set state up
        super(props); // Run state
    // How we create properties
        this.textIwant = props.textIwant;
    // How we create state
    this.state = {
        number: 0
    };
    this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
}

componentDidMount() { //any state changed, run the function inside this
    console.log(this.set.number);
}

addNumberWhenPressed() {
const previousNumber = this.state.number;
this.setState({
    number: previousNumber + 1
});
}
    render() {
        return (
            <View>
            <Text onPress={this.addNumberWhenPressed}>{this.textIwant}</Text>
            </View>
        );
    }
}

export default Header;
