import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import RegisterComponent from '../../screens/Register';
import {
   View,
   Text,
   StyleSheet,
   Image,
   ScrollView,
   TextInput,
   Dimensions
} from 'react-native';
import ButtonIcon from '../components/ButtonIcon';
import { Button } from 'react-native-material-kit/lib/mdl';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Register extends PureComponent {

   renderUserName = () => {
      return (
         <View style={styles.perInforStyle}>
            <Text style={styles.textInInfor}>USERNAME</Text>
            <View >
               <TextInput
                  style={{ height: 45, width: '80%', color: 'white', fontSize: 14 }}
                  placeholder='Username'
                  placeholderTextColor='rgba(255, 255, 255, 0.5)'
                  // onChangeText={(text) => this.setState({ text })}
                  // value={this.state.text}
                  // style={styles.typeMusicText}
                  returnKeyType='done'
                  autoCorrect={false}
                  selectionColor='white'
                  // onSubmitEditing={() => {
                  //    if (this.state.text === '') {
                  //       //  alert('Vui lòng nhập tên thiết bị!')
                  //    }
                  //    else {
                  //       WifiAudio.rename(this.props.ip, this.state.text)
                  //       this.props.onBack(this.state.text)
                  //       Actions.pop()
                  //    }
                  // }}
                  maxLength={25}
               />
            </View>
            <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></View>
         </View>
      )
   }

   renderEmail = () => {
      return (
         <View style={[styles.perInforStyle, { marginTop: 5 }]}>
            <Text style={styles.textInInfor}>EMAIL</Text>
            <View >
               <TextInput
                  style={{ height: 45, width: '80%', color: 'white', fontSize: 14 }}
                  placeholder='Email'
                  placeholderTextColor='rgba(255, 255, 255, 0.5)'
                  // onChangeText={(text) => this.setState({ text })}
                  // value={this.state.text}
                  // style={styles.typeMusicText}
                  returnKeyType='done'
                  keyboardType='email-address'
                  autoCorrect={false}
                  selectionColor='white'
                  // onSubmitEditing={() => {
                  //    if (this.state.text === '') {
                  //       //  alert('Vui lòng nhập tên thiết bị!')
                  //    }
                  //    else {
                  //       WifiAudio.rename(this.props.ip, this.state.text)
                  //       this.props.onBack(this.state.text)
                  //       Actions.pop()
                  //    }
                  // }}
                  maxLength={25}
               />
            </View>
            <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></View>
         </View>
      )
   }

   renderPassword = () => {
      return (
         <View style={[styles.perInforStyle, { marginTop: 5 }]}>
            <Text style={styles.textInInfor}>PASSWORD</Text>
            <View >
               <TextInput
                  style={{ height: 45, width: '80%', color: 'white', fontSize: 14 }}
                  placeholder='Password'
                  placeholderTextColor='rgba(255, 255, 255, 0.5)'
                  // onChangeText={(text) => this.setState({ text })}
                  // value={this.state.text}
                  // style={styles.typeMusicText}
                  returnKeyType='done'
                  autoCorrect={false}
                  selectionColor='white'
                  secureTextEntry={true}
                  // onSubmitEditing={() => {
                  //    if (this.state.text === '') {
                  //       //  alert('Vui lòng nhập tên thiết bị!')
                  //    }
                  //    else {
                  //       WifiAudio.rename(this.props.ip, this.state.text)
                  //       this.props.onBack(this.state.text)
                  //       Actions.pop()
                  //    }
                  // }}
                  maxLength={25}
               />
            </View>
            <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></View>
         </View>
      )
   }

   renderConfirmPassword = () => {
      return (
         <View style={[styles.perInforStyle, { marginTop: 5 }]}>
            <Text style={styles.textInInfor}>CONFIRM PASSWORD</Text>
            <View >
               <TextInput
                  style={{ height: 45, width: '80%', color: 'white', fontSize: 14 }}
                  placeholder='Confirm Password'
                  placeholderTextColor='rgba(255, 255, 255, 0.5)'
                  // onChangeText={(text) => this.setState({ text })}
                  // value={this.state.text}
                  // style={styles.typeMusicText}
                  returnKeyType='done'
                  autoCorrect={false}
                  selectionColor='white'
                  secureTextEntry={true}
                  // onSubmitEditing={() => {
                  //    if (this.state.text === '') {
                  //       //  alert('Vui lòng nhập tên thiết bị!')
                  //    }
                  //    else {
                  //       WifiAudio.rename(this.props.ip, this.state.text)
                  //       this.props.onBack(this.state.text)
                  //       Actions.pop()
                  //    }
                  // }}
                  maxLength={25}
               />
            </View>
            <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></View>
         </View>
      )
   }

   render() {
      return (
         <View style={styles.container}>
            {/* <View style={styles.backgroundImage}>
               <Image source={require('../assets/registerBG.jpg')} style={{ flex: 1, width: null, height: null }} resizeMode='cover' />
            </View> */}
            <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, backgroundColor: 'rgb(115, 168, 37)' }}>

            </View>
            <ScrollView style={{ flex: 1, zIndex: 300, paddingTop: 20, }} scrollEnabled={false}>
               <View style={styles.headerView}>
                  <Text style={styles.textHeader}>REGISTER</Text>
                  <ButtonIcon iconName='highlight-off' iconColor='white' size={24} style={styles.hideRegister}
                     onPress={this.props.hideRegister}
                  />
               </View>
               <View style={styles.logo}>
                  <Image source={require('../assets/logo.png')}
                     style={{ height: 40, width: 40 }}
                     resizeMode='contain'
                  />
                  <Text style={styles.logoText}>JobSolutions</Text>
               </View>
               <View style={{ height: 50, width: '100%' }}></View>
               {
                  this.renderUserName()
               }
               {
                  this.renderEmail()
               }
               {
                  this.renderPassword()
               }
               {
                  this.renderConfirmPassword()
               }
               <Button style={[styles.viewTxtInput, { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(46, 76, 1)', overflow: 'hidden' }]}
                  // onPress={() => Actions.listField()}
               >
                  <Text style={{ color: "white", fontSize: 18, }}>Sign in</Text>
               </Button>
            </ScrollView>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },

   backgroundImage: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 100
   },

   headerView: {
      height: 45,
      width: '100%',
      alignItems: "center",
      justifyContent: "center"
   },

   textHeader: {
      color: "white",
      fontSize: 18
   },

   hideRegister: {
      position: "absolute",
      right: 15,
   },

   perInforStyle: {
      height: 70,
      width: "100%",
      paddingLeft: 25,
      paddingRight: 25
   },

   textInInfor: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500'
   },

   logo: {
      height: 80,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
   },

   logoText: {
      color: 'white',
      fontSize: 28,
      paddingLeft: 5
   },
   
   viewTxtInput: {
      height: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 23,
      alignItems: 'center',
      marginLeft: 25,
      flexDirection: 'row',
      marginRight: 25,
      marginTop: 65
   },
})

const mapDispathToProps = {

}

const mapStateToProps = (state) => {
   return {
      // language: state.config.language
   }
}

export default connect(mapStateToProps, mapDispathToProps)(Register);