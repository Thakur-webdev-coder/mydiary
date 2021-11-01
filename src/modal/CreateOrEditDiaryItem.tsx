// import React from 'react';
// import ReactNativeModal from 'react-native-modal';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { StyleSheet, View, Text, TextInput, ToastAndroid } from 'react-native';
// import { KeyboardAvoidingView } from 'react-native';
// import { FloatingAction } from 'react-native-floating-action';
// import Icon from '../Components/Icon';
// import { DiaryItem } from '../models/DiaryItem';




// export interface Props {
//     isVisible: boolean;
//     onDismiss: any;
//     onSave: any;
//     diaryItem?: DiaryItem;
//     onUpdate: any;
// }


// const CreateOrEditDiaryItem = (props: Props) => {
//     const [subjectTextInput, updateSubjectTextInput] = React.useState('');
//     const [descriptionTextInput, updatedescriptionTextInput] = React.useState('');

//     // const actions = [
//     //     {
//     //         text: 'Add',
//     //         name: 'add',
//     //         icon: <Icon name={'checkmark'} />,
//     //         posiotion: 1
//     //     },
//     // ];

//     const actions = [{
//         text: props.diaryItem ? 'Update' : 'Add',
//         name: props.diaryItem ? 'update' : 'add',
//         icon: <Icon name={'checkmark'} />,
//         position: 1,
//     },
//     ];
//     // const onSave = () => {
//     //     if (subjectTextInput === '' && descriptionTextInput === '') {
//     //         return ToastAndroid.show('Subject and Description is Needed', ToastAndroid.LONG,
//     //         );
//     //     }
//     //     const data = {
//     //         subject: subjectTextInput,
//     //         description: descriptionTextInput,
//     //     };
//     //     return props.onSave(data);
//     // };

//     React.useEffect(() => {
//         if (props.diaryItem) {
//             updatedescriptionTextInput(props.diaryItem.description);
//             updateSubjectTextInput(props.diaryItem.subject);
//         }
//         else {
//             updatedescriptionTextInput('');
//             updateSubjectTextInput('');
//         }
//     }, [props.diaryItem]

//     );

//     const onSaveOrUpdate = () => {
//         if (subjectTextInput === '' && descriptionTextInput === '') {
//             return ToastAndroid.show('Subject and description is needed', ToastAndroid.LONG,
//             );
//         }
//         const data = {
//             id: props.diaryItem ? props.diaryItem.id : Math.random(),
//             subject: subjectTextInput,
//             description: descriptionTextInput,
//         };
//         if (props.diaryItem) {
//             return props.onUpdate(data);

//         }
//         return props.onSave(data);
//     }
//     return (
//         <ReactNativeModal
//             style={{ backgroundColor: 'gray', margin: 0 }}
//             isVisible={props.isVisible}
//             onBackButtonPress={props.onDismiss}
//             onDismiss={props.onDismiss}>
//             <View style={{ flex: 1 }}>
//                 <TextInput
//                     value={subjectTextInput}
//                     onChangeText={val => updateSubjectTextInput(val)}
//                     style={[styles.textInput, { borderBottomWidth: 1 }]}
//                     placeholder={'Enter Subject'}


//                 />
//                 <KeyboardAvoidingView>
//                     <TextInput
//                         value={descriptionTextInput}
//                         onChangeText={val => updatedescriptionTextInput(val)}
//                         multiline={true}
//                         scrollEnabled={true}
//                         style={styles.textInput}
//                         placeholder={'start writing your Diary'}
//                     />
//                 </KeyboardAvoidingView>


//             </View>
//             <FloatingAction
//                 actions={actions}
//                 onPressItem={onSaveOrUpdate}
//             // const data = { subject: subjectTextInput, description: descriptionTextInput }
//             // return props.onSave(data);




//             />
//         </ReactNativeModal>
//     )
//         ;
// };
// const styles = StyleSheet.create({
//     textInput: {
//         width: wp('100%'),
//         paddingBottom: 10,
//         color: 'black'
//     },
// });
// CreateOrEditDiaryItem.defaultprops = {};
// export default CreateOrEditDiaryItem;