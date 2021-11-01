import * as React from 'react';
import {
    Text,

    TextStyle,
    TouchableOpacity,
    ViewStyle,
    StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import If from './if';

export interface Props {
    title: string;
    disabled?: boolean;
    buttonStyle?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    onPress: any;

    useIcon: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;

}

const CustomButton = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[props.disabled ? { ...styles.buttonStyle, backgroundColor: 'grey' ,
        } 
        : styles.buttonStyle,
            props.buttonStyle]}

            disabled={props.disabled}>
            <If show={props.useIcon}>
                <Icons
                    name={props.iconName}
                    size={props.iconSize}
                    color={props.iconColor}>

                </Icons>

            </If>
            <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
            {/* <Text style={[styles.textStyle, props.textStyle]}>{props.Icons}</Text> */}



            {/* <Text style={[styles.textStyle, props.textStyle]}>{props.Icons}<Icons name={'md-add-circle'} alignItem={'center'}
        justifyContent={'center'} color={'black'} backgroundColor="gray" size={50} >
      </Icons></Text> */}


        </TouchableOpacity>
    );
};

CustomButton.defaultProps = {
    disabled: false,
    useIcon: false,
    iconSize: 25,
    iconcolor: 'yellow'
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'blue',
        borderRadius: 5,
        width: 120,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        padding: 10
    },
});
export default CustomButton;