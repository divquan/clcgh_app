import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name='(app)'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'home' : 'home-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'search-sharp' : 'search-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='bookmarks'
          options={{
            title: 'Bookmarks',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'bookmark' : 'bookmark-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'person-circle' : 'person-circle-outline'}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      {/*       
        <View
          style={{
            backgroundColor: ThemedColors().icon,
            position: 'absolute',
            top: Constants.statusBarHeight + 10,
            left: 0,
            right: 0,
            // height: 50,
            marginHorizontal: 16,
            borderRadius: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,

            flexDirection: 'row',
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Update available
          </Text>
          <Pressable
            style={{
              paddingVertical: 8,
              backgroundColor: ThemedColors().tabIconDefault,
            }}
            onPress={() => {}}>
            <Text style={{ color: 'white' }}>Update</Text>
          </Pressable>
        </View>
      )} */}
    </>
  );
}
