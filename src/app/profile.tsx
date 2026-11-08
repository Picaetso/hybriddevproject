import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import {
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/components/BottomNav';
import { activityItems, helpItems, preferenceItems } from '@/constants/appData';
import type { MenuItem } from '@/constants/appData';

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <View className="min-w-0 flex-1 rounded-[20px] border border-[#88BDA4]/20 bg-white p-2 md:min-w-[320px]">
      <Text className="px-3 pt-2.5 pb-1 text-[10px] font-bold tracking-[1px] text-[#38645A]">
        {title.toUpperCase()}
      </Text>
      {items.map((item) => (
        <View
          key={item.title}
          className="min-h-[64px] flex-row items-center justify-between gap-2 rounded-xl px-3 py-2.5"
        >
          <View className="min-w-0 flex-1 flex-row items-center gap-3">
            <View className="h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F2DD]">
              <Image
                source={item.icon}
                className="h-5 w-5"
                contentFit="contain"
                accessibilityLabel={`${item.title} icon`}
              />
            </View>
            <View className="min-w-0 flex-1">
              <Text numberOfLines={1} className="text-[13px] font-semibold text-[#263D36]">
                {item.title}
              </Text>
              <Text numberOfLines={1} className="mt-0.5 text-[11px] text-[#4A685E]">
                {item.subtitle}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-1">
            {item.badge ? (
              <Text className="rounded-full bg-[#B5ECD1] px-2 py-1 text-[9px] font-bold text-[#396C57]">
                {item.badge}
              </Text>
            ) : null}
            {item.trailing ? (
              <Text className="text-[9px] font-semibold text-[#4A685E]">{item.trailing}</Text>
            ) : null}
            <Text className="ml-1 text-[18px] text-[#8A9B94]">›</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#E6F2DD]">
      <View className="mx-auto w-full max-w-[1200px] flex-1">
        <ScrollView
          contentContainerClassName="gap-4 px-5 pt-2 pb-5 md:gap-5 md:px-8 md:pt-5 md:pb-8 lg:px-10"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-end gap-1">
            <Pressable
              accessibilityLabel="Notifikasi"
              accessibilityRole="button"
              className="h-10 w-10 items-center justify-center rounded-full"
            >
              <Image
                source={require('@/assets/expo.icon/Assets/notification.png')}
                className="h-4 w-4"
                contentFit="contain"
                accessibilityLabel="Notification"
                />
            </Pressable>
            <Pressable
              accessibilityLabel="Pengaturan"
              accessibilityRole="button"
              className="h-10 w-10 items-center justify-center rounded-full"
            >
              <Image
                source={require('@/assets/expo.icon/Assets/settings.png')}
                className="h-4 w-4"
                contentFit="contain"
                accessibilityLabel="Settings"
                />
            </Pressable>
          </View>

          <View className="flex-row items-center justify-between gap-3 md:mb-1">
            <View className="min-w-0 flex-1">
              <Text className="text-[26px] font-bold text-[#263D36] md:text-[32px]">
                Profile
              </Text>
              <Text className="mt-0.5 text-[11px] leading-4 text-[#4A685E] md:text-[13px]">
                Manage your account and preferences
              </Text>
            </View>
            <Pressable
              accessibilityLabel="Ubah profil"
              accessibilityRole="button"
              className="flex-row items-center gap-1 rounded-full bg-[#D9F4E9] px-4 py-3"
            >
              <Text className="text-[15px] text-[#38645A]">✎</Text>
              <Text className="text-[12px] font-bold text-[#38645A]">Edit</Text>
            </Pressable>
          </View>

          <View className="overflow-hidden rounded-[20px] border border-[#88BDA4]/20 bg-white p-4 shadow-sm md:p-6">
            <View className="absolute top-[-30px] right-[-24px] h-28 w-28 rounded-full bg-[#E6F2DD]" />
            <View className="z-10 flex-row items-start gap-3 md:gap-5">
              <View className="relative h-16 w-16 shrink-0 md:h-20 md:w-20">
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQl61VRhebKkf-wcsfPHPfoO-LgVMzgtonDhBRoQzqXqVE0m2aye8G8eOZECIR8eN4yAVtstc-kTRfmtyJHx6qGsrnllcn3MXphdRtBhGiEZk4WSwJZdnPH3gW9HgRzh3gZ-VexAVd8KY_b94Psx0PdNr7ruL2Aqi-b1fKmKQHLB4XwiyMF2EYSUPpahHjgbuN05bymVpEGbavrj3cjYZb2C04rEZ1EbgE10c4LmNxjVR7KoAW-2ZQg',
                  }}
                  className="h-16 w-16 rounded-full border-2 border-[#D4EEE4] md:h-20 md:w-20"
                  contentFit="cover"
                  accessibilityLabel="Alex Smith profile photo"
                />
                <View className="absolute right-0 bottom-0 h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#659287]">
                  <Text className="text-[10px] font-bold text-white">✓</Text>
                </View>
              </View>
              <View className="min-w-0 flex-1">
                <View className="flex-row flex-wrap items-center justify-between gap-1 md:flex-nowrap">
                  <Text numberOfLines={1} className="min-w-0 flex-1 text-[16px] font-bold text-[#263D36] md:text-[19px]">
                    Alex Smith
                  </Text>
                  <Text className="rounded-full bg-[#FFDDB0] px-2 py-1 text-[9px] font-bold text-[#594322]">
                    🌿 Gold Member
                  </Text>
                </View>
                <View className="mt-1 flex-row items-center gap-1.5">
                  <Image
                    source={require('@/assets/expo.icon/Assets/email.png')}
                    className="h-3 w-3 shrink-0"
                    contentFit="contain"
                    accessibilityLabel="Email"
                  />
                  <Text numberOfLines={1} className="flex-1 text-[11px] text-[#4A685E]">
                    alexx_smith_issocool@gmail.com
                  </Text>
                </View>
                <View className="mt-1 flex-row items-center gap-1.5">
                  <Image
                    source={require('@/assets/expo.icon/Assets/phone.png')}
                    className="h-3 w-3 shrink-0"
                    contentFit="contain"
                    accessibilityLabel="Phone"
                  />
                  <Text numberOfLines={1} className="flex-1 text-[11px] text-[#4A685E]">
                    +1 123-456-7890
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-4 flex-row gap-2 border-t border-[#D9F4E9] pt-3.5 md:mt-6 md:gap-4 md:pt-5">
              <View className="flex-1 items-center rounded-xl bg-[#E6F2DD]/70 p-2.5">
                <Text className="text-[18px] font-semibold text-[#38645A] md:text-[22px]">12</Text>
                <Text className="mt-0.5 text-center text-[9px] leading-3 text-[#4A685E] md:text-[11px]">
                  Orders
                </Text>
              </View>
              <View className="flex-1 items-center rounded-xl bg-[#E6F2DD]/70 p-2.5">
                <Text className="text-[18px] font-semibold text-[#38645A] md:text-[22px]">4</Text>
                <Text className="mt-0.5 text-center text-[9px] leading-3 text-[#4A685E] md:text-[11px]">
                  Reviews Given
                </Text>
              </View>
              <View className="flex-1 items-center rounded-xl bg-[#E6F2DD]/70 p-2.5">
                <Text className="text-[15px] font-bold text-[#38645A] md:text-[19px]">150.000</Text>
                <Text className="mt-0.5 text-center text-[9px] leading-3 text-[#4A685E] md:text-[11px]">
                  Cleaning Points
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center justify-between rounded-[20px] border border-[#88BDA4]/20 bg-white p-4 shadow-sm md:p-5">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-2xl bg-[#FFDDB0]">
                <Image
                    source={require('@/assets/expo.icon/Assets/voucher.png')}
                    className="h-5 w-5"
                    contentFit="contain"
                    accessibilityLabel="Voucher"
                />
              </View>
              <View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-[13px] font-semibold text-[#263D36]">My Vouchers</Text>
                  <Text className="rounded-full bg-[#FFDDB0] px-1.5 py-0.5 text-[9px] font-bold text-[#594322]">
                    3 Active
                  </Text>
                </View>
                <Text className="mt-0.5 text-[11px] text-[#4A685E]">Discount coupon up to 40%</Text>
              </View>
            </View>
            <Image
                source={require('@/assets/expo.icon/Assets/right.png')}
                className="h-3 w-3"
                contentFit="contain"
                accessibilityLabel="Arrow right"
                />
          </View>

          <View className="gap-4 md:flex-row md:flex-wrap md:gap-5">
            <MenuSection title="Activity & Services" items={activityItems} />
            <MenuSection title="Security & Preference" items={preferenceItems} />
            <MenuSection title="Help & Information" items={helpItems} />
          </View>

          <View className="items-center gap-3 px-1 pt-1 pb-2">
            <Pressable
              accessibilityRole="button"
              onPress={() => router.replace('/')}
              className="w-full flex-row items-center justify-center gap-2 rounded-full bg-[#F9E6E3] px-4 py-3.5"
            >
              <Text className="text-[17px] text-[#BA1A1A]">⇥</Text>
              <Text className="text-[13px] font-semibold text-[#BA1A1A]">
                Log out
              </Text>
            </Pressable>
            <Text className="text-center text-[10px] text-[#718078]">
              Cleaning-app • Protected by TLS 256-bit Encryption
            </Text>
          </View>
        </ScrollView>

        <BottomNav active="profile" />
      </View>
    </SafeAreaView>
  );
}