import { Pressable, Text, View } from 'react-native';

type AuthFooterLinkProps = {
  prompt: string;
  label: string;
  onPress: () => void;
};

export default function AuthFooterLink({ prompt, label, onPress }: AuthFooterLinkProps) {
  return (
    <View className="flex-row items-center justify-center gap-1">
      <Text className="text-[13px] text-[#4A685E]">{prompt}</Text>
      <Pressable accessibilityRole="link" onPress={onPress} className="p-1">
        <Text className="text-[13px] font-bold text-[#38645A]">{label}</Text>
      </Pressable>
    </View>
  );
}
