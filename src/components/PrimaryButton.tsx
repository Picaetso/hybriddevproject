import { Pressable, Text, View } from 'react-native';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      {({ pressed }) => (
        <View
          className={`mt-1 h-14 w-full flex-shrink-0 flex-row items-center justify-between rounded-lg bg-[#263D36] px-[18px] ${
            pressed ? 'opacity-[0.85]' : ''
          }`}>
          <Text className="flex-shrink-0 text-[15px] font-bold text-white">{title}</Text>
          <Text className="flex-shrink-0 text-[21px] text-[#FFDDB0]">→</Text>
        </View>
      )}
    </Pressable>
  );
}
