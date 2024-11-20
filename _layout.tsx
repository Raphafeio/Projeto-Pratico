import { useAuth } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';


function LogoutButton(){
    const { signOut } = useAuth();
  
    function logout(){
      signOut();
    }
  
    return(
      <Pressable onPress={logout}>
        <Text style={styles.containerTitle}>Sair</Text>
      </Pressable>
    )
  }
  

export default function StackPage() {
    const { isSignedIn } = useAuth();

    return (
        <Stack
            screenOptions={{
                headerStyle:{
                    backgroundColor: 'aqua'
                }
            }}
        >
            <Stack.Screen
                name='home'
                options={{
                    headerTitle: 'Seja Bem-Vindo',
                }}
                redirect={!isSignedIn}
            />
            <Stack.Screen
                name='profile'
                options={{
                    headerTitle: "Minha Conta",
                    headerRight: () => <LogoutButton/>
                }}
                redirect={!isSignedIn}
            />
        </Stack>
    )
}


const styles = StyleSheet.create({
    containerTitle: {
        color: 'red',
        fontSize: 20
    }
})