import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
} from "react-native";
import Liste from "./screens/Liste";
import Login from "./screens/Login";
import AjouterMateriel from "./screens/AjouterMateriel";
import UpdateMateriel from "./screens/UpdateMateriel"

const Stack = createStackNavigator();

export default function App() {
  // navigationOptions =
  // {
  //   title: 'MainActivity',
  // };

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     TextInput_Student_Name: '',
  //     TextInput_Student_Class: '',
  //     TextInput_Student_PhoneNumber: '',
  //     TextInput_Student_Email: '',
  //   }
  // }
  // InsertStudentRecordsToServer = () => {
  //   fetch('https://reactnativecode.000webhostapp.com/Student/InsertStudentData.php', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       student_name: this.state.TextInput_Student_Name,
  //       student_class: this.state.TextInput_Student_Class,
  //       student_phone_number: this.state.TextInput_Student_PhoneNumber,
  //       student_email: this.state.TextInput_Student_Email
  //     })
  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       // Showing response message coming from server after inserting records.
  //       Alert.alert(responseJson);
  //     }).catch((error) => {
  //       console.error(error);
  //     });
  // }
  // GoTo_Show_StudentList_Activity_Function() {
  //   this.props.navigation.navigate('Second');
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AjouterMateriel" component={AjouterMateriel} />
        <Stack.Screen name="UpdateMateriel" component={UpdateMateriel}/>
        <Stack.Screen name="Liste" component={Liste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
