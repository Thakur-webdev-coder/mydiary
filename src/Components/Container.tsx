import * as React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

interface Props {
    children: any;
    containerStyles?: ViewStyle | ViewStyle[];
}
const Container = (props: Props) => {
    return <View style={[styles.container, props.containerStyles]}>
        {props.children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "stretch",

    }
});

export default Container;