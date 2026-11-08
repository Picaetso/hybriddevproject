import { Text, View } from 'react-native';

type AuthHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function AuthHeading({ eyebrow, title, description }: AuthHeadingProps) {
  return (
    <View className="mb-[34px]">
      <Text className="mb-3 text-[11px] font-bold tracking-[1.5px] text-[#4A685E]">
        {eyebrow}
      </Text>
      <Text className="text-[42px] font-bold leading-[46px] text-[#263D36]">{title}</Text>
      <Text className="mt-3 text-[15px] leading-[22px] text-[#4A685E]">{description}</Text>
    </View>
  );
}
