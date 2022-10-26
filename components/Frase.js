import React from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import Character from './Character';

const axios = require('axios').default;

let character;

export default function Frase(){

    const [frase, setFrase] = React.useState(null);

    const [loading, setLoading] = React.useState(false);

    function llamarApi(){
      setLoading(true);
      axios.get('https://api.gameofthronesquotes.xyz/v1/random')
          .then(function(resp){
          setFrase(resp.data.sentence);
          character = resp.data.character.slug;
          console.log(character);
          setLoading(false);
      })
      .catch(function(err){
          console.log(err);
      })
    } 

    if (loading) {
        return (<ActivityIndicator />)
    }else{
        return (
            <>
                <Character character={character} />
                {frase != null ? <Text style={styles.text}> { frase } </Text> : null}
                <Button
                    mode='contained'
                    onPress={llamarApi} >
                    {frase != null ? 'Siguiente frase' : 'Obtener frase' }
                </Button>
            </>
        )
    }
}
const styles = StyleSheet.create({
    text: {
      fontFamily: 'Roboto',
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: '#ffffffa0',
      margin: 10,
      padding: 5  
    }
  })