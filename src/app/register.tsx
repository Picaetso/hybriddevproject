import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthFooterLink from '@/components/AuthFooterLink';
import AuthHeading from '@/components/AuthHeading';
import FormField from '@/components/FormField';
import PrimaryButton from '@/components/PrimaryButton';
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

            <AuthHeading
              eyebrow="Create Account"
              title={'Join us\ntoday!'}
              description="Create an account to book trusted home services."
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
                placeholder="Choose a username"
                returnKeyType="next"
                textContentType="username"
                value={username}
              />

              <FormField
                label="Email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(value) => {
                  setEmail(value);
                  setMessage('');
                }}
                placeholder="you@example.com"
                returnKeyType="next"
                textContentType="emailAddress"
                value={email}
              />

              <FormField
                label="Password"
                autoComplete="new-password"
                onChangeText={(value) => {
                  setPassword(value);
                  setMessage('');
                }}
                placeholder="Create a password"
                returnKeyType="next"
                secureTextEntry
                textContentType="newPassword"
                value={password}
              />

              <FormField
                label="Confirm password"
                autoComplete="new-password"
                onChangeText={(value) => {
                  setConfirmPassword(value);
                  setMessage('');
                }}
                onSubmitEditing={handleRegister}
                placeholder="Enter your password again"
                returnKeyType="done"
                secureTextEntry
                textContentType="newPassword"
                value={confirmPassword}
              />

              <PrimaryButton title="Create account" onPress={handleRegister} />

              {message ? (
                <Text
                  accessibilityLiveRegion="polite"
                  className="-mt-2 text-[13px] leading-[19px] text-[#4A685E]">
                  {message}
                </Text>
              ) : null}

              <AuthFooterLink
                prompt="Already have an account?"
                label="Sign in"
                onPress={() => router.back()}
              />
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
