import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
    return (
        
        <View style={styles.background}>
            
            <Text>Impunity</Text>
            <Button title="Run face scan" onPress={()=> console.log('hello') }/>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'grey',
        color:'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})
