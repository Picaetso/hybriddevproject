import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthFooterLink from '@/components/AuthFooterLink';
import AuthHeading from '@/components/AuthHeading';
import FormField from '@/components/FormField';
import PrimaryButton from '@/components/PrimaryButton';

export default function HomeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');

  function handleSignIn() {
    if (!username.trim() || !password) {
      setMessage('Enter your username and password to continue.');
      return;
    }

    router.push('./home');
  }

  return (
    <SafeAreaView className="flex-1 bg-[#E6F2DD]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerClassName="flex-grow justify-center px-6 py-5"
          keyboardShouldPersistTaps="handled">
          <View className="w-full max-w-[420px] self-center">
            <AuthHeading
              eyebrow="Cleaning-app"
              title={'Welcome\nback!'}
              description="Sign in to pick up where you left off."
            />

            <View className="gap-5">
              <FormField
                label="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(value) => {
                  setUsername(value);
                  setMessage('');
                }}
                onSubmitEditing={handleSignIn}
                placeholder="Your username"
                returnKeyType="next"
                textContentType="username"
                value={username}
              />

              <FormField
                label="Password"
                onChangeText={(value) => {
                  setPassword(value);
                  setMessage('');
                }}
                onSubmitEditing={handleSignIn}
                placeholder="Your password"
                returnKeyType="done"
                secureTextEntry={!passwordVisible}
                textContentType="password"
                value={password}
                trailingAction={
                  <Pressable
                    accessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}
                    accessibilityRole="button"
                    onPress={() => setPasswordVisible((visible) => !visible)}
                    className="h-full min-w-14 items-center justify-center">
                    <Text className="text-[13px] font-bold text-[#263D36]">
                      {passwordVisible ? 'Hide' : 'Show'}
                    </Text>
                  </Pressable>
                }
              />

              <PrimaryButton title="Sign in" onPress={handleSignIn} />

              {message ? (
                <Text
                  accessibilityLiveRegion="polite"
                  className="-mt-2 text-[13px] leading-[19px] text-[#4A685E]">
                  {message}
                </Text>
              ) : null}

              <AuthFooterLink
                prompt="Don't have an account?"
                label="Register"
                onPress={() => router.push('/register')}
              />
            </View>

            <View className="mt-8 flex-row items-center gap-3">
              <View className="h-0.5 w-7 bg-[#FFDDB0]" />
              <Text className="text-xs text-[#4A685E]">Lets keep it clean!</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
