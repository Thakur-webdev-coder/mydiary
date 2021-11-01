import * as React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import moment from 'moment';

export interface Props {
    timeStamp: Date;
    containerStyle?: ViewStyle | ViewStyle[];

}
const DateNTime = (props: Props) => {
    return (
        <View style={[{ marginBottom: 10 }, props.containerStyle,
        ]}>
            <Text style={styles.dateNTimeText}>
                {moment(props.timeStamp).format('MMM DD YYYY - ddd')}
            </Text>
            <Text
                style={styles.dateNTimeText}>
                {moment(props.timeStamp).format('h:mm a')}
            </Text>

        </View>
    );

};
const styles = StyleSheet.create({
    dateNTimeText: { color: 'blue', fontWeight: 'bold' }
});

export default DateNTime;