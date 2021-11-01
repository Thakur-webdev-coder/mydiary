import *as React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { color } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { DiaryItem as diaryItem } from '../models/DiaryItem';

import { Utils } from '../Utils/Utils'
import DateNTime from './DateNTime';



export interface Props {
    diaryItem: diaryItem;
    onPress: any;


}
const DiaryItem = (props: Props) => {
    const [imageExist, updateImageExist]=React.useState(true);
    return (
        <TouchableOpacity onPress={props.onPress}
            activeOpacity={0.6}
            style={{ marginBottom: hp('1%'), padding: 15 }}
        >
            {/* {date and time view} */}

            {/* <View style={{ marginBottom: hp('2%') }}>
                <Text style={styles.dateNTimeText}>
                    {props.diaryItem.date}
                </Text>
                <Text style={styles.dateNTimeText}>
                    {props.diaryItem.time}
                </Text>
            </View> */}
            <DateNTime
            timeStamp={props.diaryItem.timeStamp}
            />
            {/* {row view} */}
            <View style={{ flexDirection: 'row' }}>
                {/* {subject and description view} */}
                <View style={{ width: wp('70%'), marginRight: wp('3%') }}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>
                        {props.diaryItem.subject}
                    </Text>
                    <Text numberOfLines={3} style={{ marginRight: wp('2%') }}>
                        {props.diaryItem.description}
                    </Text>
                </View>
                <Image
                onError={() =>updateImageExist(false)}
                     style={{ width: wp('20%'), height: hp('10%') }}
                    source={
                        imageExist
                        ?{ uri:props.diaryItem.images ? props.diaryItem.images[0]:'no image saved'}
                        : Utils.images.DIARY_THUMBNAIL} />
                {/* // source={{ uri: "https://image.shutterstock.com/image-photo/blank-open-notebook-cup-coffee-260nw-697683811.jpg" }} /> */}
            </View >



        </TouchableOpacity>
    );
};
DiaryItem.defaultProps = {};

const styles = StyleSheet.create({
    dateNTimeText: { color: 'red', fontWeight: 'bold' }
});



export default DiaryItem;