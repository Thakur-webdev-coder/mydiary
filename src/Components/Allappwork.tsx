// 1st example
// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world! ravina Thakur welcome on this page</Text>
//     </View>
//   )
// }
//  export default HelloWorldApp;


//  export default App;

// 2nd example

// import * as React from "react";
// import { StyleSheet, View, Button, Text ,TextInput} from 'react-native';

// export default class App extends React.Component<any, any>{
//   state: { myText: string; };
//   setState: any;

//  constructor(){
//        super()
//       this.state = {
//         myText:'Hello world',
//       };
//   }

//   ChangeTextFunction =()=> {
//        this.setState({
//         myText: "Button was clicked"
//        })
//   }                       
//   // onClicke text will be updated

//   render(){
//       return(
//       <View style={styles.container}>
//            <Text style={{marginBottom: 20, fontSize: 20}}> {this.state.myText} </Text>
//            <TextInput onChangeText = {()=>this.updateText()}></TextInput>
//            <Button title="Change Component Text" onPress={this.ChangeTextFunction}/>

//       </View>
//       );
//   }
// }

// const styles = StyleSheet.create(
// {
//  container:
// {
//    justifyContent: 'center',
//    alignItems: 'center',
//    flex:1,
//  flexDirection: "column"
//    }

// }); 

// // 3rd exampe


import * as React from 'react';
import { Component } from 'react';
// importing here all components we required
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Container from "../components/Container";
import CustomButton from "../components/CustomButton";
import { Formik } from 'formik';
import Validators from '../Utils/Validators';
import { widthPercentageToDP as wp, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';




interface State {
    // decleration
    form: {
        // inputName: string;
        inputEmail: string
        inputPassword: string;
    }
}

interface Props {
}

// enum InputType {
//   NAME = 'name',
//   PASSWORD = 'password'
// }
{/* <Button title="send" onPress()> */ }
// title =  input
// onPress = output
// Props

class App extends React.Component<Props, State>{

    private passwordInputRef;
    constructor(props: string) {
        super(props)
        this.state = {
            form: {
                //initialize
                inputEmail: '',
                inputPassword: '',
            },
        };
    }
    componentDidMount(): void {
        listenOrientationChange(this)
        // it will generate value
    }
    componentWillUnmount(): void {
        removeOrientationListener()
    }
    // updateInputText = (val, type) => {
    //   console.log(val)
    //   switch (type) {
    //     case InputType.NAME:
    //       this.setState({ form: { ...this.state.form, inputName: val } });
    //       break;
    //     case InputType.PASSWORD:
    //       this.setState({ form: { ...this.state.form, inputPassword: val } });
    //       break;
    //   }
    // }

    handleFuction() {
        console.log("Login");
    }
    render() {
        console.log(this.state);
        return (
            // <View>
            <Container
                containerStyles={{ alignItems: "center", backgroundColor: 'green' }}>
                {/* <TextInput onChangeText = {()=>this.updateText()}> */}
                {/* Text, TextInput */}
                <Text style={{ fontSize: 44, color: 'black', fontWeight: 'bold' }}>Login</Text>

                {/* formik has three states/* three states :-is toucgable,is dirty, isvalid*/}

                <Formik
                    initialValues={this.state.form}
                    validateOnMount={true}
                    // isInitialValid={false}
                    validateOnChange={true}
                    onSubmit={() => {
                        console.log('on submit')
                    }}
                    validationSchema={Validators.loginValidators}
                >

                    {/* render={props => { */}
                    {props => {
                        // console.log(props)

                        return (
                            <View style={{ alignItems: 'center' }}>

                                <TextInput onSubmitEditing={() => this.passwordInputRef.focus()}
                                    returnKeyType={'next'}
                                    onBlur={() => props.setFieldTouched('inputEmail')}

                                    // onChangeText={(val) => this.updateInputText(val, InputType.NAME)}
                                    onChangeText={props.handleChange('inputEmail')}
                                    style={styles.textInputStyle}
                                    placeholder={'Enter your name '}
                                    value={props.values.inputEmail} />
                                {props.dirty && props.touched.inputEmail ? (
                                    <Text style={{ color: 'red' }}>{props.errors.inputEmail}</Text>
                                ) : null}

                                <TextInput onSubmitEditing={() => {
                                    if (props.isValid) {

                                    } else {
                                        console.log('form is valid')
                                    }
                                }
                                }
                                    onBlur={() => props.setFieldTouched('inputPassword')}
                                    // this.handleFuction}
                                    ref={ref => this.passwordInputRef = ref} returnKeyType={'done'}

                                    // onChangeText={(val) => this.updateInputText(val, InputType.PASSWORD)}
                                    onChangeText={props.handleChange('inputPassword')}
                                    style={styles.textInputStyle}
                                    placeholder={'Enter your text'}
                                    value={props.values.inputPassword}
                                />
                                {props.dirty && props.touched.inputPassword ? (
                                    <Text style={{ color: 'red' }}>{props.errors.inputPassword}</Text>
                                ) : null}



                                <CustomButton disabled={!props.isValid} onPress={() => {
                                    if (props.isValid) {
                                        console.log("is valid")
                                        return props.handleSubmit();
                                    }
                                    else {
                                        console.log('form is not valid')
                                    }
                                }} title={'Login'} />


                                {/* <Text style={{width:300, borderWidth:1}}> 
                {this.state.inputName}  
             </Text>*/}

                            </View>
                        )
                    }}




                </Formik>

            </Container>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    textInputStyle: {
        width: wp('70%'),
        height: wp('10'),
        // width: 300,
        borderWidth: 1,
        marginBottom: 10,
        color: 'black'

    }

})
// style={{flex:1, justifyContent:"center", alignItems:"center"}}


// // 4th example

// import * as React from "react";
// // importing here all components we required
// import { View, Text, TextInput, Button } from 'react-native';
// import Container from "./src/components/Container";
// import CustomButton from "./src/components/CustomButton";
// import { Alert } from 'react-native';





// interface State {
//   // decleration
//   inputName: string;
//   inputPassword: string;
//   test: string;
// }

// interface Props {
// }

// enum InputType {
//   NAME = 'name',
//   PASSWORD = 'password'
// }
// {/* <Button title="send" onPress()> */ }
// // title =  input
// // onPress = output
// // Props

// class App extends React.Component<Props, State>{
//   constructor(props: string) {
//     super(props)
//     this.state = {
//       //initialize
//       inputName: '',
//       inputPassword: '',
//       test: '',
//     };
//   }
//   updateInputText = (val, type) => {
//     console.log(val)
//     switch (type) {
//       case InputType.NAME:
//         this.setState({ inputName: val });
//         break;
//       case InputType.PASSWORD:
//         this.setState({ inputPassword: val });
//         break;
//     }
//   }

//   handleFuction = () => {

//     // Alert.alert("you had submitted your data")
//     // this.setState({test:this.state.inputName + this.state.inputPassword});
//     // console.log("Login");
//     this.setState({
//       test: this.state.inputName &&
//         this.state.inputPassword ? this.state.inputName +
//       this.state.inputPassword : null
//     });


//   }
//   render() {
//     return (
//       // <View>
//       <Container
//         containerStyles={{ alignItems: "center", backgroundColor: 'cyan' }}>
//         {/* <TextInput onChangeText = {()=>this.updateText()}> */}
//         {/* Text, TextInput */}
//         <Text style={{ fontSize: 24, color: "Black" }}>Login</Text>
//         <TextInput
//           onChangeText={(val) => this.updateInputText(val, InputType.NAME)}
//           style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
//           placeholder={'Enter your name  '}
//           value={this.state.inputName}
//         />

//         <TextInput
//           onChangeText={(val) => this.updateInputText(val, InputType.PASSWORD)}
//           style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
//           placeholder={'Enter your Password'}
//           value={this.state.inputPassword}
//         />

//         <CustomButton onPress={this.handleFuction} title={'Button'} />

//         <TextInput
//           onChangeText={(val) => this.handleFuction}
//           style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
//           placeholder={' Text'}
//           value={this.state.test}
//         />

//         {/* <Text style={{width:300, borderWidth:1}}> 
//                 {this.state.inputName}  
//              </Text>*/}

//       </Container>
//     );
//   }
// }


// export default App;

// import React, { Component } from 'react'
// import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
// import styles from "./src/components/styles";
// import CustomButton from "./src/components/CustomButton";


// interface State {
//   // decleration
//   first: string;
//   second: string;
//   Result: number;
// }
// // interface Props{
// // }

// enum InputType {
//   first = 'num',
//   second = 'num'
// }

// // const App = () => {
// //   state = {
// //     name:"",
// //   }

// class App extends Component<any, State> {

//   constructor(props: any) {
//     super(props);
//     this.state = {
//       first: "0",
//       second: "0",
//       Result: 0,


//     };

//   }

//   onPressButton = () => {
//     //  Alert.alert('You clicked the button!'+ Result)
//     this.setState({ Result: Number(this.state.first) + Number(this.state.second) });

//     //  this.setState({Result:  parseInt(this.state.first) + 
//     //   parseInt( this.state.second)}); 

//     // this.setState({result: this.state.first && this.state.second ? 
//     // this.state.first + this.state.second : null});

//     //  var N1 =parseInt(this.state.first);
//     // var N2 =parseInt(this.state.second);

//     // let fesult = N1+N2
//     // alert( " Result is"   + fesult);
//   }

//   onCustom = () => {
//     console.log("custom button")
//   }
//   render() {
//     return (
//       <View style={styles.container}>

//         <Text style={{ fontSize: 30 }}> WELCOME </Text>
//         <View style={styles.inputContanier}>
//           <Text>Name</Text>
//           <TextInput style={styles.input} placeholder="num1" onChangeText={first => this.setState({ first })} ></TextInput>
//           <Text>Last Name</Text>
//           <TextInput style={styles.input} placeholder="num2" onChangeText={second => this.setState({ second })}></TextInput>
//         </View>


//         <Button onPress={this.onPressButton}
//           title="Submit"></Button>
//         <View>
//           <Text>Result</Text>
//           {/* <TextInput style={styles.input} value={this.state.Result} ></TextInput> */}
//           <TextInput style={styles.input} placeholder="0">{this.state.Result}</TextInput>
//         </View>


//         <CustomButton onPress={this.onCustom} title={'button'} />

//       </View >
//     );
//   }
// }
// export default App;








// calculator
// import React, { Component } from 'react'
// import {
//   View,
//   Text,
//   StyleSheet
// } from 'react-native'

// import InputNumberButton from './src/components/InputNumberButton'

// const buttons = [
//   ['CLEAR', 'DEL'],
//   ["7", "8", "9", '/'],
//   ["4", "5", "6", "x"],
//   ["1", "2", "3", "-"],
//   ["0", ".", "=", "+"]
// ];

// export default class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       displayValue: '0',
//       operator: null,
//       firstValue: '',
//       secondValue: '',
//       nextValue: false
//     }
//   }
//   renderButtons() {
//     let layouts = buttons.map((buttonRows, index) => {
//       let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
//         return <InputNumberButton
//           value={buttonItems}
//           handleOnPress={this.handleInput.bind(this, buttonItems)}
//           key={'btn-' + buttonIndex}
//         />

//       });
//       return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
//     });

//     return layouts
//   }

//   handleInput = (input) => {
//     const { displayValue, operator, firstValue, secondValue, nextValue } = this.state
//     switch (input) {
//       case '0':
//       case '1':
//       case '2':
//       case '3':
//       case '4':
//       case '5':
//       case '6':
//       case '7':
//       case '8':
//       case '9':
//         this.setState({
//           displayValue: displayValue === "0" ? input : displayValue + input
//         })

//         if (!nextValue) {
//           this.setState({
//             firstValue: firstValue + input
//           })
//         } else {
//           this.setState({
//             secondValue: secondValue + input
//           })

//         }
//         break;
//       case '+':
//       case '-':
//       case 'x':
//       case '/':
//         this.setState({
//           operator: input,
//           displayValue: (operator !== null ? displayValue.substr(0, displayValue.length - 1) : displayValue) + input,
//           nextValue: true
//         })
//         break;
//       case '=':
//         let formatOperator = (operator == 'x') ? '*' : operator
//         let result = eval(firstValue + formatOperator + secondValue)
//         this.setState({
//           displayValue: result % 1 === 0 ? result : result.toFixed(2),
//           firstValue: result % 1 === 0 ? result : result.toFixed(2),
//           secondValue: '',
//           operator: null,
//           nextValue: false,
//         })
//         break;
//       case 'CLEAR':
//         this.setState({
//           operator: null,
//           displayValue: '0'
//         })
//         break;
//       case 'DEL':
//         let string = displayValue.toString();
//         let length = string.length
//         this.setState({
//           displayValue: length == 1 ? "0" : displayValue.slice(0, -1),
//           firstValue: length == 1 ? "" : displayValue.slice(0, -1),

//         })
//         break;
//       case '.':
//         let dot = displayValue.toString().slice(-1)
//         this.setState({
//           displayValue: dot !== "." ? displayValue + input : displayValue,
//         })
//         break;
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.resultContainer}>
//           <Text style={styles.resultText}>
//             {this.state.displayValue}
//           </Text>
//         </View>
//         <View style={styles.inputContainer}>
//           {this.renderButtons()}
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   resultContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     backgroundColor: '#1E1240',
//   },
//   inputContainer: {
//     flex: 8,
//     backgroundColor: '#3D0075',
//   },
//   resultText: {
//     color: 'white',
//     fontSize: 80,
//     fontWeight: 'bold',
//     padding: 20,
//     textAlign: 'right',
//   },
//   inputRow: {
//     flex: 1,
//     flexDirection: 'row',
//   }
// })