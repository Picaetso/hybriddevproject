import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { bottomNavItems } from '@/constants/appData';

type BottomNavProps = {
  active: 'home' | 'profile';
  floating?: boolean;
};

export default function BottomNav({ active, floating = false }: BottomNavProps) {
  const router = useRouter();

  return (
    <View
      className={`min-h-[72px] flex-row items-center justify-around rounded-t-[18px] bg-white px-3 pt-2 pb-3 shadow-lg md:min-h-[80px] md:rounded-t-[22px] md:px-8 ${
        floating ? 'absolute right-0 bottom-0 left-0' : ''
      }`}
    >
      {bottomNavItems.map((item) => {
        const isActive = item.key === active;
        const route = item.route;
        const content = (
          <>
            <Image
              source={item.icon}
              className="h-6 w-6"
              contentFit="contain"
              accessibilityLabel={`${item.label} icon`}
            />
            <Text
              className={`mt-0.5 text-[10px] ${
                isActive ? 'font-bold text-[#396C57]' : 'font-semibold text-[#4A685E]'
              }`}
            >
              {item.label}
            </Text>
          </>
        );
        const className = `min-w-16 items-center py-1.5 ${
          isActive ? 'rounded-full bg-[#B5ECD1] px-3' : ''
        }`;

        if (route) {
          return (
            <Pressable
              key={item.key}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              onPress={() => router.push(route)}
              className={className}
            >
              {content}
            </Pressable>
          );
        }

        return (
          <View key={item.key} accessibilityLabel={item.label} className={className}>
            {content}
          </View>
        );
      })}
    </View>
  );
}
