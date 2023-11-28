


import { StyleSheet,Text,TextInput,View} from "react-native";
import React,{useState} from "react";
import { RadioButton } from "react-native-paper";
import { Dropdown } from 'react-native-element-dropdown';


const [radioButtons, setRadioButtons] = useState([
  { label: 'Fathersname', value: 'Fathersname' },
  { label: 'Mothersname', value: 'Mothersname' },
]);
const onPressRadioButton = (radioButtonsArray) => {
  setRadioButtons(radioButtonsArray);
};
const [selectedOption, setSelectedOption] = useState(null);
const handleSelect = (option) => {
  setSelectedOption(option);
};
const data=[{
    label:'Business',
    value:'1',
    
  },
  {
    label:'Job',
    value:'2',
  }];



const App = () =>{
  const [text, setText] = useState('');
  const [value,setValue]=useState('');
return(
  <View style={styles.container}>

          <Text style={styles.text}>
            Let's start by providing <Text style={styles.coloredText}>your personal</Text>{'\n'}
            Details
          </Text>

          <View style={styles.rectangle}>
            
            <Text style={styles.boldText}>Name on your PRAN Card <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}> 
              <Text style={styles.label}>Occupation<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select your Education Qulification"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }} 
         />
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Income Range <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Educational Qualification<Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Father's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Mother's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

           
            <View style={styles.radioButtonsView}>
                    <Text style={styles.boldText}>What do You want to print on your Card?</Text>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <RadioButton.Android
                            value="option1"
                            status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option1')}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            Fathersname
                        </Text>
                        <RadioButton.Android
                            value="option2"
                            status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option2')}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>
                            Mothersname
                        </Text>
                    </View>
                    </View>
                
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Material Status <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Spouse's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            </View>  
                 

);}

 
 
 const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#E6F3FF',
      marginTop: 20,
      
      
  },
  
  asterisk:{
    color:'red',

  },
  text: {
    fontSize: 18,
    color: '#74739E',
    fontWeight: 'bold',
    marginTop: 10
},
coloredText: {
    color: 'red',
    color: '#0F0F5C',
    fontWeight: 'bold',
},
boldText: {
    fontWeight: 'bold',
    marginTop: 5,
    padding: 5,
},
rectangle: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:2,
    marginTop:10,
    borderRadius:5,
  

}
,
  items:{
    color:'red',
  },
    dropdown: {
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    scrollView: {
      backgroundColor: 'white',
    }
  });

export default App;
 











































