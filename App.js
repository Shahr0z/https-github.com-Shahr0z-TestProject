import { View, Text } from 'react-native'
import React from 'react'
import GetTime from './src/screens/LockScreen/Thirdway/GetTime'
import Index from './src/screens/TwoFactorAuthentication/Index'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <GetTime /> */}
      <Index />
    </View>
  )
}