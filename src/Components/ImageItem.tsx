import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from './Icon';


export interface Props {
    image: any;
    onImageDelete: any
}
const ImageItem = (props: Props) => {
    return (
        <View style={{ margin: 2 }}>
            <Image style={styles.image} source={{uri:props.image }} />
            <TouchableOpacity
                onPress={props.onImageDelete}
                style={styles.deleteIconContainer}>
                <Icon name={'remove-circle'} color={'red'} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        height: hp('20%'),
        width: wp('40%')
    },
    deleteIconContainer: {
        position: 'absolute', alignSelf: 'flex-end'
    }

});
ImageItem.defaultProps = {};
export default ImageItem
