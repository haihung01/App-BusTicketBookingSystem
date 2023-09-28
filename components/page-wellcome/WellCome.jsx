import React from 'react'
import { View, Text, Image } from 'react-native'
import logo from '../../assets/1.webp'

function WellCome() {
    return (
        <>
            <View>
                <Text style={{ marginTop: 100, fontSize: 40, color: '#2EE201', textAlign: 'center' }}>Welcome to TripTix</Text>
                <Image
                    style={{ width: 400, height: 400, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}
                    source={logo}
                />
                <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 90 }}>Wish you have a comfortable service experience</Text>

            </View>
        </>
    )
}

export default WellCome