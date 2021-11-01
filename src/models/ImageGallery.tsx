import React from "react";
import { TouchableOpacity, View, StyleSheet, Image, TouchableOpacityBase } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import ImageCropPicker from "react-native-image-crop-picker";
import ReactNativeModal from "react-native-modal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "../Components/Icon";
import ImageList from "../Components/ImageList";
import { Utils } from "../Utils/Utils";



export interface Props {
    isVisible: boolean;
    onDismiss: any;
    onImageDelete:any;
    images:any[];
    onImageSelect:any;
}
const data = [
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
    Utils.images.DIARY_THUMBNAIL,
];


const ImageGallery = (props: Props) => {
    // const selectImage =() =>{
    //     ImageCropPicker.openPicker({
    //         multiple:true,
    //     })
    //     .then(data=>{
    //         console.log(data);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     });
    // };
    return (
        <ReactNativeModal
            // style={{ backgroundColor: 'white' }}
            isVisible={props.isVisible}
            onBackButtonPress={props.onDismiss}
            onBackdropPress={props.onDismiss}
            onDismiss={props.onDismiss}>
          <View style={styles.container }>
            <TouchableOpacity onPress={props.onImageSelect}>
         <Image style ={styles.image} source={Utils.images.ADD_IMAGE}/>
         </TouchableOpacity>
        <ImageList onImageDelete={props.onImageDelete} images={props.images}/>
            </View>
        </ReactNativeModal>
    )
};


const styles = StyleSheet.create({
    container:{
        height:hp('40%'),
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        height:hp('20%'),
        width: wp('80%')
    },
})

ImageGallery.defaultProps = {};
export default ImageGallery;

