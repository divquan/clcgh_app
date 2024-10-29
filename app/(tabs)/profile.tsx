import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from '@/components/ThemedText';
import Button from '@/components/Button';
import { ThemedColors } from '@/constants/Colors';
import * as Updates from 'expo-updates';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useToast } from 'react-native-toast-notifications';
const Profile = () => {
  const colors = ThemedColors();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();

  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? 'This app is running from built-in code'
    : 'This app is running an update';
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 32,
        paddingHorizontal: 16,
      }}>
      <ThemedView
        style={{
          borderWidth: 1,
          gap: 14,
          paddingHorizontal: 16,
          paddingVertical: 18,
          borderRadius: 24,

          borderColor: colors.border,
        }}>
        <ThemedView
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'space-between',
          }}>
          <ThemedView
            style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <MaterialIcons name='update' size={28} color={colors.icon} />
            <ThemedText style={{ fontSize: 18 }}>Updates</ThemedText>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 16,
                backgroundColor: isUpdatePending
                  ? 'gold'
                  : isUpdateAvailable
                  ? colors.error
                  : 'white',
              }}></View>
          </ThemedView>
          <ThemedText>{Updates.runtimeVersion}</ThemedText>
        </ThemedView>
        <Button
          loading={loading}
          disabled={loading}
          onPress={() => {
            setLoading(true);
            toast.show("Checking for updates. Please wait. It's a bit slow");
            try {
              if (isUpdatePending) {
                toast.show('You have an update. We are applying update');
                // Update has successfully downloaded; apply it now
                Updates.reloadAsync();
                return;
              }
              if (isUpdateAvailable) {
                toast.show('Downloading update. Please wait');
                Updates.fetchUpdateAsync()
                  .then((res) => {
                    console.log(res.isNew);
                    if (res.isNew) {
                      toast.show(
                        'Update downloaded successfully. Click to apply'
                      );
                      return;
                    }
                    toast.show('No new updates available');
                  })
                  .catch((e) => toast.show(JSON.stringify(e)))
                  .finally(() => {
                    setLoading(false);
                  });
                return;
              }
              toast.show('Checking for updates');
              Updates.checkForUpdateAsync()
                .then((res) => {
                  toast.show(JSON.stringify(res));
                })
                .catch((e) => toast.show(e.message, { type: 'danger' }))
                .finally(() => {
                  setLoading(false);
                });
            } catch (e: any) {
              toast.show(e.message);
              setLoading(false);
            }
          }}>
          <Text style={{ color: 'white' }}>
            {isUpdatePending
              ? 'New update available. Click to apply'
              : isUpdateAvailable
              ? 'Update available. Click to download'
              : 'Check for updates'}
          </Text>
        </Button>
      </ThemedView>
      <ThemedView style={{ alignItems: 'center', marginTop: 24 }}>
        <AntDesign name='infocirlceo' size={24} color='black' />
        <ThemedText>{runTypeMessage}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
