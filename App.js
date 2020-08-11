import React from 'react';
import { Linking, Alert, TouchableOpacity, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends React.Component{

  ifScaned= e=>{
    Linking.openURL(e.data).catch(err=>
      Alert.alert("QR Code Invalido", e.data))
  }

  render(){
    return(
      <QRCodeScanner
      containerStyle={{backgroundColor:"#FFF"}}
      onRead={this.ifScaned}
      reactivate={true}
      permissionDialogMessage="Preciso acessar sua camera"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{borderColor:"#FFF", borderRadius:10}}
      bottomContent={
        <TouchableOpacity>
          <Text>Scan QR Code</Text>
        </TouchableOpacity>
      }/>
    )
  }
}