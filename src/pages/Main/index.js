import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

export default function Main(){
    //valor animado q quer q ele comece e .current pra pegar o valor corretamente
    const larguraAnimada = useRef(new Animated.Value(150)).current;
    const alturaAnimada = useRef(new Animated.Value(150)).current;
    const opacidadeAnimada = useRef(new Animated.Value(1)).current;

    // useEffect(() => {
    //     Animated.timing(larguraAnimada, {
    //         toValue: 300, //pra qual valor ele vai
    //         duration: 2000,
    //         useNativeDriver: false //tentar usar o drive native do celular
    //     }).start();
    // }, []);

    // useEffect(() => {
    //     Animated.timing(alturaAnimada, {
    //         toValue: 100, //pra qual valor ele vai
    //         duration: 2000,
    //         useNativeDriver: false //tentar usar o drive native do celular
    //     }).start();
    // }, []);

    //animação em sequência

    //assim q uma terminar ele começa a outra
    useEffect(() => {
        Animated.sequence([
            Animated.timing(larguraAnimada, {
                toValue: 300,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(alturaAnimada, {
                toValue: 100,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(opacidadeAnimada, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: false
            })
        ]).start();
    }, []);

    //animação paralela

    // useEffect(() => {
    //     Animated.parallel([
    //         Animated.timing(larguraAnimada, {
    //             toValue: 300,
    //             duration: 2000,
    //             useNativeDriver: false
    //         }),
    //         Animated.timing(alturaAnimada, {
    //             toValue: 100,
    //             duration: 2000,
    //             useNativeDriver: false
    //         }),
    //     ]).start();
    // }, []);

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
