import { Tabs } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from './../../constant/Colors'


export default function TabLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.PRIMARY
            }}
        >
            <Tabs.Screen name='home'
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily:'outfit-medium',
                                color: focused ? Colors.PRIMARY : "#8E8E93",
                                textAlign: "center",
                                marginBottom: 4,
                                
                            }}
                        >
                            Home
                        </Text>
                    ),
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />
                }}
            />
            <Tabs.Screen name='explore'
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily:'outfit-medium',
                                color: focused ? Colors.PRIMARY : "#8E8E93",
                                textAlign: "center",
                                marginBottom: 4,
                            }}
                        >
                            Explore
                        </Text>
                    ),
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={26} color={color} />
                }}
            />
            <Tabs.Screen name='progress'
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily:'outfit-medium',
                                color: focused ? Colors.PRIMARY : "#8E8E93",
                                textAlign: "center",
                                marginBottom: 4,
                            }}
                        >
                            Progress
                        </Text>
                    ),
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="analytics" size={26} color={color} />
                }}
            />
            <Tabs.Screen name='profile'
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily:'outfit-medium',
                                color: focused ? Colors.PRIMARY : "#8E8E93",
                                textAlign: "center",
                                marginBottom: 4,
                            }}
                        >
                            Profile
                        </Text>
                    ),
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="people-circle-outline" size={26} color={color} />
                }}
            />
        </Tabs>
    )
}

