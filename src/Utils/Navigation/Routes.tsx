import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/Login';
import * as React from 'react';
import Dashboard from '../../Screens/Dashboard';
//   import { PrimaryTheme } from '../../styles/Themes';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ViewDiaryItem from '../../Screens/ViewdiaryItems';
import EditOrAddItems from '../../Screens/EditOrAddItems';


const Stack = createStackNavigator();

export enum ScreenNames {
    LOGIN = 'Login',
    DASHBOARD = 'Dashboard',
    VIEW_DIARY_ITEM = 'view diary item',
    EDIT_ADD_DIARY_ITEM = 'add or edit diary item',
}

export const authStack = () => {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.LOGIN}>
            <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        </Stack.Navigator>
    );
};

export const appStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.DASHBOARD}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "blue",
                    height: hp('7%'),
                },
                headerTitleStyle: {
                    color: 'white',
                },
                title: 'My Diary',
            }}>
            <Stack.Screen name={ScreenNames.DASHBOARD} component={Dashboard} />
            <Stack.Screen
                options={{ title: 'View', headerTintColor: 'white' }}
                name={ScreenNames.VIEW_DIARY_ITEM}
                component={ViewDiaryItem}
            />
            <Stack.Screen
                options={({ route }) => {
                    return {
                        title: (route.params as any).diaryItem ? 'Edit' : 'Add',
                        headerTintColor: 'white',
                    };
                }}
                name={ScreenNames.EDIT_ADD_DIARY_ITEM}
                component={EditOrAddItems}
            />
        </Stack.Navigator>
    );
};
