import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { Palette } from '@/constants/theme';

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
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <View style={styles.brandRow}>
              <Image
                accessibilityLabel="Mock-App icon"
                source={require('@/assets/images/icon-3.jpg')}
                style={styles.brandMark}
              />
              <Text style={styles.brandName}>Mock-App</Text>
            </View>

            <View style={styles.intro}>
              <Text style={styles.eyebrow}>Login Page</Text>
              <Text style={styles.title}>{'Welcome\nback!'}</Text>
              <Text style={styles.subtitle}>Sign in to pick up where you left off.</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  accessibilityLabel="Username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) => {
                    setUsername(value);
                    setMessage('');
                  }}
                  onSubmitEditing={handleSignIn}
                  placeholder="Your username"
                  placeholderTextColor={Palette.muted}
                  returnKeyType="next"
                  style={styles.input}
                  textContentType="username"
                  value={username}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordField}>
                  <TextInput
                    accessibilityLabel="Password"
                    onChangeText={(value) => {
                      setPassword(value);
                      setMessage('');
                    }}
                    onSubmitEditing={handleSignIn}
                    placeholder="Your password"
                    placeholderTextColor={Palette.muted}
                    returnKeyType="done"
                    secureTextEntry={!passwordVisible}
                    style={styles.passwordInput}
                    textContentType="password"
                    value={password}
                  />
                  <Pressable
                    accessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}
                    accessibilityRole="button"
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    style={styles.visibilityButton}>
                    <Text style={styles.visibilityText}>{passwordVisible ? 'Hide' : 'Show'}</Text>
                  </Pressable>
                </View>
              </View>

              <Pressable accessibilityRole="button" onPress={handleSignIn}>
                {({ pressed }) => (
                  <View style={[styles.submitButton, pressed && styles.submitPressed]}>
                    <Text style={styles.submitText}>Sign in</Text>
                    <Text style={styles.submitArrow}>→</Text>
                  </View>
                )}
                </Pressable>

              {message ? (
                <Text accessibilityLiveRegion="polite" style={styles.message}>
                  {message}
                </Text>
              ) : null}
            </View>

            <View style={styles.footer}>
              <View style={styles.footerRule} />
              <Text style={styles.footerText}>Lets keep practicing!</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  content: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
  },
  brandMark: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: Palette.primary,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  brandName: {
    color: Palette.ink,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  intro: {
    marginBottom: 34,
  },
  eyebrow: {
    color: Palette.muted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  title: {
    color: Palette.ink,
    fontSize: 42,
    fontWeight: '700',
    lineHeight: 46,
  },
  subtitle: {
    color: Palette.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  },
  form: {
    gap: 20,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    color: Palette.ink,
    fontSize: 13,
    fontWeight: '600',
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: Palette.primary,
    borderRadius: 8,
    backgroundColor: Palette.input,
    color: Palette.ink,
    fontSize: 15,
    paddingHorizontal: 16,
  },
  passwordField: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Palette.primary,
    borderRadius: 8,
    backgroundColor: Palette.input,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    color: Palette.ink,
    fontSize: 15,
    paddingHorizontal: 16,
  },
  visibilityButton: {
    minWidth: 56,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  visibilityText: {
    color: Palette.ink,
    fontSize: 13,
    fontWeight: '700',
  },
  submitButton: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    backgroundColor: Palette.ink,
    borderRadius: 8,
    width: '100%',
    flexShrink: 0,
    paddingHorizontal: 18,
  },
  submitContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    gap: 8,
  },
  submitPressed: {
    opacity: 0.85,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    flexShrink: 0,
  },
  submitArrow: {
    color: Palette.accent,
    fontSize: 21,
    flexShrink: 0,
  },
  message: {
    color: Palette.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: -8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 32,
  },
  footerRule: {
    width: 28,
    height: 2,
    backgroundColor: Palette.accent,
  },
  footerText: {
    color: Palette.muted,
    fontSize: 12,
  },
});
