import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '@clerk/clerk-expo'

const Profile: React.FC = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  if (!isSignedIn) {
    return (
      <SafeAreaView>
        <Text>You are not signed in.</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      {user?.imageUrl && (
        <Image
          source={{ uri: user.imageUrl }}
          style={styles.profileImage}
        />
      )}
      <Text style={styles.userName}>
        {user?.firstName}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  userName: {
    textAlign: 'center',
    backgroundColor: '#f87171',
    color: '#60a5fa',
    marginTop: 10,
  },
})

export default Profile
