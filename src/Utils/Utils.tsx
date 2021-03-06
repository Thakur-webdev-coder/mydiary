import { ImageStyle, Platform, TextStyle, ViewStyle } from "react-native"


export class Utils {
    static dynamicStyles(
        portraitStyles:
            ViewStyle
            | ViewStyle[]
            | TextStyle
            | TextStyle[]
            | ImageStyle
            | ImageStyle[],
        landScapeStyles:
            ViewStyle
            | ViewStyle[]
            | TextStyle
            | TextStyle[]
            | ImageStyle
            | ImageStyle[],
        orientation: string) {
        return orientation === 'portrait' ? portraitStyles : landScapeStyles;
    }
    static isIos() {
        return Platform.OS === 'ios';
    }

    static images = {
        
        DIARY_THUMBNAIL: require('../assets/dp.jpg'),
        // SET_THUMBNAIL: require('../assets/nat.jpg'),

        ADD_IMAGE: require('../assets/md.jpg')

    }
}