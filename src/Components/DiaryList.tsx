import *as React from 'react';
// import DiaryItem from './DiaryItems';
import { FlatList } from 'react-native';
import { DiaryItem as diaryItem } from '../models/DiaryItem';
import DiaryItem from './DiaryItems';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

// import { Utils } from '../Utils/Utils'



export interface Props {
    diaryItems: diaryItem[];
    onPress: any;
    onRefresh: any;
    refreshing: boolean;



}
const DiaryList = (props: Props) => {
    return (
        <FlatList

            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => index.toString()}
            data={props.diaryItems}
            renderItem={data => {
                return <DiaryItem
                    onPress={() => props.onPress(data.item)}
                    diaryItem={data.item} />

            }}
        />
    );
};

//         <>
//             {props.diaryItems.map((diaryItem, index) => {
//                 return <DiaryItem diaryItem={diaryItem} index={index} />;
//             })}
//         </>
//     );
// };
DiaryList.defaultProps = {};
export default DiaryList;