import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

export default function Looping(){
    //valor animado q quer q ele comece e .current pra pegar o valor corretamente
    const larguraAnimada = useRef(new Animated.Value(150)).current;
    const alturaAnimada = useRef(new Animated.Value(150)).current;
    const opacidadeAnimada = useRef(new Animated.Value(1)).current;

    
    useEffect(() => {
        
    }, []);

    return(
    <View style={styles.container}>
      <Animated.View style={{
          width: larguraAnimada,
          height: alturaAnimada,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          borderRadius: 8,
          opacity: opacidadeAnimada
      }}>
          <Text style={{textAlign: 'center', fontSize: 22, color: '#FFFFFF', fontWeight: '700'}}>Carregando...</Text>
      </Animated.View>
    </View>
    )
}

const styles = StyleSheet.create({

})
