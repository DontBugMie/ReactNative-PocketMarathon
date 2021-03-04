import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, } from 'react-native';
import CheckedRadioButton from '../assets/checkedRadioButton.png';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: ['Time', 'Km', 'Miles'],
            checked: 0
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.data.map((data, key) => {
                        return (
                            <View>
                                <Text>{data}</Text>
                                {this.state.checked == key ?
                                    <TouchableOpacity style={styles.btn}>
                                        <Image style={styles.img} source={{ uri: 'https://w7.pngwing.com/pngs/752/449/png-transparent-at-sign-computer-icons-radio-button-miscellaneous-monochrome-black-thumbnail.png' }} />
                                        <Text>{data}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={()=>{this.setState({checked:key})}} style={styles.btn}>
                                        <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zS3PRD_AJB8qnkWKF2xAQ_kqeO-SpwM4gQ&usqp=CAU' }} />
                                        <Text>{data}</Text>
                                    </TouchableOpacity>

                                }
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
        margin: 5,
    },
    img: {
        height: 20,
        width: 20,

    },
    btn:{
        flexDirection: 'column',
        alignItems: 'center'
    }
})

// export default RadioButton;