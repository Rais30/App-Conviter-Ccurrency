import React from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Home extends React.Component {
  state = {
    modalViible: false,
    modalVisible2: false,
    from: 'From',
    to: 'To',
    input: '',
    hasil: '',
    mataUang: ['Rupiah', 'Dolar', 'Ringgit'],
  };
 submitConverter = () => {
    const from = this.state.from;
    const to = this.state.to;
    const input = parseInt(this.state.input);

    if (from == 'Dolar' && to == 'Rupiah') {
      const hasil = input * 15000;
      this.setState({ hasil: hasil });
    } else if (from == 'Rupiah' && to == 'Dolar') {
      const hasil = input / 15000;
      this.setState({ hasil: hasil })
    } else if (from == 'Rupiah' && to == 'Ringgit') {
      const hasil = input / 4000
      this.setState({ hasil: hasil })
    } else if (from == 'Ringgit' && to == 'Rupiah') {
      const hasil = input * 4000
      this.setState({ hasil: hasil })
    } else if (from == 'Ringgit' && to == 'Dolar') {
      const hasil = input / 5;
      this.setState({ hasil: hasil })
    } else if (from == 'Dolar' && to == 'Ringgit') {
      const hasil = input * 5;
      this.setState({ hasil: hasil })
    }else if (from == 'Dolar' && to == 'Dolar') {
      const hasil = input;
      this.setState({ hasil: hasil })
    }else if (from == 'Ringgit' && to == 'Ringgit') {
      const hasil = input;
      this.setState({ hasil: hasil })
    }else if (from == 'Rupiah' && to == 'Rupiah') {
      const hasil = input;
      this.setState({ hasil: hasil })
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalViible}
          onRequestClose={() => this.setState({modalViible: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{width: '70%', backgroundColor: 'white', borderRadius: 5}}>
              {this.state.mataUang.map((value, key) => {
                return (
                  <Text
                  style={{fontSize:20,margin:10,padding:5}}
                    key={key}
                    onPress={() => {
                      this.setState({from: value, modalViible: false});
                    }}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible2}
          onRequestClose={() => this.setState({modalVisible2: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{width: '70%', backgroundColor: 'white', borderRadius: 5}}>
              {this.state.mataUang.map((value, key) => {
                return (
                  <Text
                  style={{fontSize:20,margin:10,padding:5}}
                    key={key}
                    onPress={() => {
                      this.setState({to: value, modalVisible2: false});
                    }}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
        </Modal>
        <View
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 5,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            ConviterCurrency
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            paddingVertical: 10,
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <View style={{width: '50%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                marginHorizontal: 10,
                borderRadius:10
              }}>
              <View
                style={{
                  height: 40,
                  width: '60%',
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:20,
                }}>
                <Text>{this.state.from}</Text>
              </View>
              <View
                style={{width: '29%', backgroundColor: 'green', height: 50,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Icon
                  name="chevron-down"
                  size={45}
                  onPress={() => this.setState({modalViible: true})}
                />
              </View>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                marginHorizontal: 10,
                borderRadius:10
              }}>
              <View
                style={{
                  height: 40,
                  width: '60%',
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{this.state.to}</Text>
              </View>
              <View
                style={{width: '29%', backgroundColor: 'green', height: 50,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Icon
                  name="chevron-down"
                  size={45}
                  onPress={() => this.setState({modalVisible2: true})}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{width:'98%',justifyContent:'center',alignItems:'center',marginVertical:10}}>
        <TextInput 
        style={{borderRadius:10,backgroundColor:'white',borderWidth:1,width:'95%'}}
          value={this.state.input}
          placeholder="Masukan Nominal"
          onChangeText={(text) => this.setState({input: text})}
        />
        </View>
        <View style={{ margin: 5, marginBottom: 20 }}>
          <Button
            title="submit"
            color="green"
            onPress={() => this.submitConverter()}
          />
        </View>
        <View style={{ height: 200, borderWidth: 1, margin: 5 }}>
          <View style={{ height: 40, width: '100%', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: 'bold',fontSize:20 }}>Hasil</Text>
          </View >
          <View style={{ height: 160, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{this.state.hasil}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Home;
