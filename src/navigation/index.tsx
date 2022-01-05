import React from 'react';
import ReportFinishScreen from '@screens/Report/ReportFinishScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InitialReportScreen from '@screens/Report/InitialReportScreen';
import SignIn from '@screens/Auth/SignIn';
import colors from '@constants/colors';
import Home from '@screens/Home';
import UserSettings from '@screens/UserSettings';
import ReportSubcategoryScreen from '@screens/Report/ReportSubcategoryScreen/ReportSubcategoryScreen';
import SecondaryWorkReportScreen from '@screens/Report/SecondaryWorkReportScreen';
import ReportDurationStart from '@screens/Report/ReportDuration/ReportDurationStart';
import ReportDurationEnd from '@screens/Report/ReportDuration/ReportDurationEnd';
import SelectLocationsScreen from '@screens/Report/SelectLocationsScreen';
import SelectStaffScreen from '@screens/Report/SelectStaffScreen/SelectStaffScreen/SelectStaffScreen';
import SelectMachineScreenFinish from '@screens/Report/SelectMachineScreen/SelectMachineScreenFinish';
import SelectMachineScreen from '@screens/Report/SelectMachineScreen/SelectMachineScreen';
import SelectStaffScreen2 from '@screens/Report/SelectStaffScreen/SelectStaffScreenFinish';
import SummaryReportScreen from '@screens/Report/SummaryReportScreen';
import NotificationsScreen from '@screens/Notification/NotificationsScreen';
import GalleryScreen from '@screens/Gallery/GalleryScreen';
import PhotoImageScreen from '@screens/Gallery/PhotoImageScreen';
import ImageCreateScreen from '@screens/Gallery/ImageCreateScreen';
import SelectImageLocationScreen from '@screens/Gallery/SelectImageLocationScreen';
import ImageViewScreen from '@screens/Gallery/ImageViewScreen/ImageViewScreen';
import ImageEditScreen from '@screens/Gallery/ImageEditScreen';
import InitialHindranceReportScreen from '@screens/HindranceReport/InitialHindranceReportScreen';
import SelectHindranceLocationScreen from '@screens/HindranceReport/SelectHindranceLocationScreen';
import ReportHindranceDurationStart from '@screens/HindranceReport/ReportHindranceDuration/ReportHindranceDurationStart';
import ReportHindranceDurationEnd from '@screens/HindranceReport/ReportHindranceDuration/ReportHindranceDurationEnd';
import SelectHindranceMachineScreenFinish from '@screens/HindranceReport/SelectHindranceMachineScreen/SelectHindranceMachineScreenFinish/SelectMachineScreenFinish';
import SelectHindranceMachineScreen from '@screens/HindranceReport/SelectHindranceMachineScreen/SelectHindranceMachineScreen';
import ExternalInitialReportScreen from '@screens/SubContractor/ExternalInitialReportScreen';
import ExternalReportSubcategoryScreen from '@screens/SubContractor/ExternalReportSubcategoryScreen';
import ExternalLocationsScreen from '@screens/SubContractor/ExternalLocationsScreen';
import ExternalMachineScreen from '@screens/SubContractor/ExternalMachineScreen/ExternalMachineScreen';
import ExternalMachineScreenFinish from '@screens/SubContractor/ExternalMachineScreen/ExternalMachineScreenFinish';
import ExternalReportDurationEnd from '@screens/SubContractor/ExternalReportDuration/ExternalReportDurationEnd';
import ExternalReportDurationStart from '@screens/SubContractor/ExternalReportDuration/ExternalReportDurationStart';
import ExternalReportFinishScreen from '@screens/SubContractor/ExternalReportFinishScreen';
import ExternalStaffScreen from '@screens/SubContractor/ExternalStaffScreen/ExternalStaffScreen';
import ExternalStaffScreenFinish from '@screens/SubContractor/ExternalStaffScreen/ExternalStaffScreenFinish';
import ExternalSummaryScreen from '@screens/SubContractor/ExternalSummaryScreen';
import RequestOrdersStartScreen from '@screens/RequestOrders/RequestOrdersStartScreen'
import RequestOrdersFinancial from '@screens/RequestOrders/RequestOrdersFinancial';
const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
    RequestOrdersFinancial: undefined;
    RequestOrdersStartScreen: undefined;
    ExternalLocationsScreen: undefined;
    ExternalSummaryScreen: undefined;
    ExternalStaffScreenFinish: undefined;
    ExternalStaffScreen: undefined;
    ExternalReportFinishScreen: undefined;
    ExternalReportDurationStart: undefined;
    ExternalReportDurationEnd: undefined;
    ExternalMachineScreenFinish: undefined;
    ExternalMachineScreen: undefined;
    ExternalReportSubcategoryScreen: undefined;
    ExternalInitialReportScreen: undefined;
    SelectHindranceMachineScreenFinish: undefined;
    SelectHindranceMachineScreen: undefined;
    ReportHindranceDurationEnd: undefined;
    ReportHindranceDurationStart: undefined;
    SelectHindranceLocationScreen: undefined;
    InitialHindranceReportScreen: undefined;
    ImageEditScreen: undefined;
    ImageViewScreen: undefined;
    SelectImageLocationScreen: undefined;
    ImageCreateScreen: undefined;
    PhotoImageScreen: undefined;
    GalleryScreen: undefined;
    NotificationsScreen: undefined;
    ReportFinishScreen: undefined;
    SummaryReportScreen: undefined;
    SelectMachineScreen: undefined;
    SelectMachineScreenFinish: undefined;
    SelectStaffScreen2: undefined;
    SelectStaffScreen: undefined;
    ReportDurationEnd: undefined;
    ReportDurationStart: undefined;
    SelectLocationsScreen: undefined;
    AuthNavigation: undefined;
    SignIn: undefined;
    Home: undefined;
    UserSettings: undefined;
    InitialReportScreen: undefined;
    ReportSubcategoryScreen: undefined;
    SecondaryWorkReportScreen: undefined;
};

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerLeft: () => null, headerShown: false}} />
        </Stack.Navigator>
    );
};

const AppNavigator = (props) => {
    return (
        <NavigationContainer
            theme={{
                dark: true,
                colors: {
                    primary: colors.lightGrey,
                    background: colors.darkColor,
                    card: colors.lightGrey,
                    text: colors.lightGrey,
                    border: colors.darkGrey,
                    notification: colors.lightGrey
                }
            }}>
            <Stack.Navigator initialRouteName="AuthNavigation">
                <Stack.Screen
                    name="AuthNavigation"
                    component={AuthNavigation}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen name="Home" component={Home} options={{headerLeft: () => null, headerShown: false}} />
                <Stack.Screen
                    name="UserSettings"
                    component={UserSettings}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="InitialReportScreen"
                    component={InitialReportScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ReportSubcategoryScreen"
                    component={ReportSubcategoryScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SecondaryWorkReportScreen"
                    component={SecondaryWorkReportScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectLocationsScreen"
                    component={SelectLocationsScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ReportDurationStart"
                    component={ReportDurationStart}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ReportDurationEnd"
                    component={ReportDurationEnd}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectStaffScreen"
                    component={SelectStaffScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectStaffScreen2"
                    component={SelectStaffScreen2}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectMachineScreen"
                    component={SelectMachineScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectMachineScreenFinish"
                    component={SelectMachineScreenFinish}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SummaryReportScreen"
                    component={SummaryReportScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ReportFinishScreen"
                    component={ReportFinishScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="NotificationsScreen"
                    component={NotificationsScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="GalleryScreen"
                    component={GalleryScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="PhotoImageScreen"
                    component={PhotoImageScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ImageCreateScreen"
                    component={ImageCreateScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectImageLocationScreen"
                    component={SelectImageLocationScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ImageViewScreen"
                    component={ImageViewScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ImageEditScreen"
                    component={ImageEditScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="InitialHindranceReportScreen"
                    component={InitialHindranceReportScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectHindranceLocationScreen"
                    component={SelectHindranceLocationScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ReportHindranceDurationStart"
                    component={ReportHindranceDurationStart}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ReportHindranceDurationEnd"
                    component={ReportHindranceDurationEnd}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectHindranceMachineScreen"
                    component={SelectHindranceMachineScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="SelectHindranceMachineScreenFinish"
                    component={SelectHindranceMachineScreenFinish}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalInitialReportScreen"
                    component={ExternalInitialReportScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalLocationsScreen"
                    component={ExternalLocationsScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalMachineScreen"
                    component={ExternalMachineScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalMachineScreenFinish"
                    component={ExternalMachineScreenFinish}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalStaffScreen"
                    component={ExternalStaffScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalStaffScreenFinish"
                    component={ExternalStaffScreenFinish}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalReportDurationStart"
                    component={ExternalReportDurationStart}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalReportDurationEnd"
                    component={ExternalReportDurationEnd}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalSummaryScreen"
                    component={ExternalSummaryScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalReportSubcategoryScreen"
                    component={ExternalReportSubcategoryScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="ExternalReportFinishScreen"
                    component={ExternalReportFinishScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                 <Stack.Screen
                    name="RequestOrdersStartScreen"
                    component={RequestOrdersStartScreen}
                    options={{headerLeft: () => null, headerShown: false}}
                />
                <Stack.Screen
                    name="RequestOrdersFinancial"
                    component={RequestOrdersFinancial}
                    options={{headerLeft: () => null, headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
