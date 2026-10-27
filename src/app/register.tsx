import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Palette } from '@/constants/theme';

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleRegister() {
    if (!username.trim() || !email.trim() || !password || !confirmPassword) {
      setMessage('Fill in all fields to continue.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage('Enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    router.replace('/');
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
            <View className="mb-8 flex-row items-center gap-2.5">
              <Image
                accessibilityLabel="Cleaning-App icon"
                source={require('@/assets/images/cleaning-app-icon.jpg')}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  borderColor: Palette.primary,
                  borderRadius: 6,
                }}
                resizeMode="contain"
              />
              <Text className="text-xs font-extrabold tracking-[1.4px] text-[#263D36]">
                Cleaning-App
              </Text>
            </View>

            <View className="mb-[34px]">
              <Text className="mb-3 text-[11px] font-bold tracking-[1.5px] text-[#4A685E]">
                Create Account
              </Text>
              <Text className="text-[42px] font-bold leading-[46px] text-[#263D36]">
                {'Join us\ntoday!'}
              </Text>
              <Text className="mt-3 text-[15px] leading-[22px] text-[#4A685E]">
                Create an account to book trusted home services.
              </Text>
            </View>

            <View className="gap-5">
              <View className="gap-2">
                <Text className="text-[13px] font-semibold text-[#263D36]">Username</Text>
                <TextInput
                  accessibilityLabel="Username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) => {
                    setUsername(value);
                    setMessage('');
                  }}
                  placeholder="Choose a username"
                  placeholderTextColor={Palette.muted}
                  returnKeyType="next"
                  className="h-[54px] rounded-lg border border-[#659287] bg-white px-4 text-[15px] text-[#263D36]"
                  textContentType="username"
                  value={username}
                />
              </View>

              <View className="gap-2">
                <Text className="text-[13px] font-semibold text-[#263D36]">Email</Text>
                <TextInput
                  accessibilityLabel="Email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(value) => {
                    setEmail(value);
                    setMessage('');
                  }}
                  placeholder="you@example.com"
                  placeholderTextColor={Palette.muted}
                  returnKeyType="next"
                  className="h-[54px] rounded-lg border border-[#659287] bg-white px-4 text-[15px] text-[#263D36]"
                  textContentType="emailAddress"
                  value={email}
                />
              </View>

              <View className="gap-2">
                <Text className="text-[13px] font-semibold text-[#263D36]">Password</Text>
                <TextInput
                  accessibilityLabel="Password"
                  autoComplete="new-password"
                  onChangeText={(value) => {
                    setPassword(value);
                    setMessage('');
                  }}
                  placeholder="Create a password"
                  placeholderTextColor={Palette.muted}
                  returnKeyType="next"
                  secureTextEntry
                  className="h-[54px] rounded-lg border border-[#659287] bg-white px-4 text-[15px] text-[#263D36]"
                  textContentType="newPassword"
                  value={password}
                />
              </View>

              <View className="gap-2">
                <Text className="text-[13px] font-semibold text-[#263D36]">
                  Confirm password
                </Text>
                <TextInput
                  accessibilityLabel="Confirm password"
                  autoComplete="new-password"
                  onChangeText={(value) => {
                    setConfirmPassword(value);
                    setMessage('');
                  }}
                  onSubmitEditing={handleRegister}
                  placeholder="Enter your password again"
                  placeholderTextColor={Palette.muted}
                  returnKeyType="done"
                  secureTextEntry
                  className="h-[54px] rounded-lg border border-[#659287] bg-white px-4 text-[15px] text-[#263D36]"
                  textContentType="newPassword"
                  value={confirmPassword}
                />
              </View>

              <Pressable accessibilityRole="button" onPress={handleRegister}>
                {({ pressed }) => (
                  <View
                    className={`mt-1 h-14 w-full flex-shrink-0 flex-row items-center justify-between rounded-lg bg-[#263D36] px-[18px] ${
                      pressed ? 'opacity-[0.85]' : ''
                    }`}>
                    <Text className="flex-shrink-0 text-[15px] font-bold text-white">
                      Create account
                    </Text>
                    <Text className="flex-shrink-0 text-[21px] text-[#FFDDB0]">→</Text>
                  </View>
                )}
              </Pressable>

              {message ? (
                <Text
                  accessibilityLiveRegion="polite"
                  className="-mt-2 text-[13px] leading-[19px] text-[#4A685E]">
                  {message}
                </Text>
              ) : null}

              <View className="flex-row items-center justify-center gap-1">
                <Text className="text-[13px] text-[#4A685E]">Already have an account?</Text>
                <Pressable
                  accessibilityRole="link"
                  onPress={() => router.back()}
                  className="p-1">
                  <Text className="text-[13px] font-bold text-[#38645A]">Sign in</Text>
                </Pressable>
              </View>
            </View>

            <View className="mt-8 flex-row items-center gap-3">
              <View className="h-0.5 w-7 bg-[#FFDDB0]" />
              <Text className="text-xs text-[#4A685E]">Lets keep practicing!</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
