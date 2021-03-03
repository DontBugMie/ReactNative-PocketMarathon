// import React from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Animated, TextInput } from 'react-native';
import Colors from '../constants/Colours';
import Svg, { G, Circle } from 'react-native-svg';



const IntervalItem = props => {

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedInput = Animated.createAnimatedComponent(TextInput);


    let percentage = 100;
    let radius = 65;
    let strokeWidth = 10;
    let duration = 1000;
    let color = 'pink';
    let delay = 10;
    let textColor;
    let max = 100;

    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef();
    const inputRef = React.useRef();
    const halfCircle = radius + strokeWidth;
    const circleCircumferance = 2 * Math.PI * radius;
    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration, 
            delay,
            useNativeDriver: true,
        }).start(()=>{
            // animation( toValue === 0 ? percentage : 0 );
        });
    }

    React.useEffect(()=>{
        animation(percentage);

        animatedValue.addListener(val => {
            if(circleRef ?. current){
                const maxPercentage = ( 100 * val.value ) / max;
                const strokeDashoffset = circleCircumferance - (circleCircumferance * maxPercentage) /100;
                circleRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
            if (inputRef ?. current){
                inputRef.current.setNativeProps({
                    text: `${Math.round(val.value)}`
                })
            }
        });

        return () => {
            animatedValue.removeAllListeners();
        };
    }, [max, percentage]);
    return (
        <View style={styles.intervalItem}>
        <Svg width = {radius*2} height={radius*2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
            <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                <Circle
                cx='50%'
                cy='50%'
                stroke={color}
                strokeWidth={strokeWidth}
                r = {radius}
                fill='transparent'
                strokeOpacity ={0.2}
                />
                <AnimatedCircle
                ref={circleRef}
                cx='50%'
                cy='50%'
                stroke={color}
                strokeWidth={strokeWidth}
                r = {radius}
                fill='transparent'
                strokeDasharray ={circleCircumferance}
                strokeDashoffset={circleCircumferance}
                strokeLinecap='round'
                />
            </G>
        </Svg>
        <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable="false"
        defaultValue="00:00:00"
        style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radius/3, color: 'pink' ?? color },
            { frontWeight: '900', textAlign: 'center' },
        ]}
        />
        {/* <TextInput
        underlineColorAndroid="transparent"
        editable="false"
        defaultValue="00:00:00"
        style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radius/4, color: 'pink' ?? color },
            { frontWeight: '900', textAlign: 'center' },
        ]}
        /> */}
        
    </View>

    );
};

const styles = StyleSheet.create({
    intervalItem:{
        justifyContent:'center',
        alignContent:'center',
        
        // borderColor: 'black',
        display:'flex',
        // borderWidth: 2,
        // backgroundColor: 'yellow',
        padding: 5,
        flexDirection: 'column',
       
        // height:'100%'
    },

});

export default IntervalItem;



























 //  <TouchableOpacity onPress={props.onSelect} style={styles.intervalItem}>
    //         <Image style={styles.image} source = {{ uri: props.image }} />
    //         <View style={styles.infoContainer}>
    //             <Text style={styles.title}>{props.title}</Text>
    //             <Text style={styles.address}> {props.address}</Text>
    //             {/* <Donut/> */}
    //         </View>
    {/* <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}> {props.address}</Text>
        <Text>hello</Text>
      </View> */}
          

           

    //     </TouchableOpacity>
        // <View style={styles.infoContainer}>
        // <Text style={styles.title}>{props.title}</Text>
        // <Text style={styles.address}> {props.address}</Text>
        // <Text>hello</Text>
        // </View>


        // image: {
        //     width: 70,
        //     height: 70,
        //     backgroundColor: 'purple',
        // },
        // infoContainer: {
        //     justifyContent: 'center',
        //     alignItems: 'flex-start',
        // },
        // title: {
        //     color: 'blue'
        // },
        // address:{
        //     color: 'red'
        // }