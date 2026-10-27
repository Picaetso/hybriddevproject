import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  {
    name: 'Cleaning',
    image:
      'https://detailcleanings.com/wp-content/uploads/2021/05/how-to-sweep-floors.jpeg',
  },
  {
    name: 'Plumbing',
    image:
      'https://trusteyman.com/wp-content/uploads/2019/02/how-does-plumbing-work-e1548696261445.jpeg',
  },
  {
    name: 'Electrical',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepCS2qLvaNzRuXln2zq3F75L4WldpMv3Dl-PwpGRDsFMNvF2HQk2sh24&s=10',
  },
  {
    name: 'Gardening',
    image:
      'https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1781827869992-gardener-planting-red-flower-seedling.jpg?gravity=smart&w=1920&h=1080',
  },
  {
    name: 'Painting',
    image: 'https://www.maramani.com/cdn/shop/articles/1.jpg?v=1683367109&width=2048',
  },
  {
    name: 'Appliances',
    image:
      'https://irp.cdn-website.com/0581a8fe934c48e1a6cc8d6d924bfafe/dms3rep/multi/opt/GettyImages-1309386316-640w.jpg',
  },
  {
    name: 'Handyman',
    image: 'https://www.redleescs.com/images/janitorial-services/handyman-with-tools-lg.jpg',
  },
  {
    name: 'Pest Control',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7gfOHZLpv5IAVSkAKquCEfjrhUtJIkCwvq43NP2IfBZO68QSU4juSvs&s=10',
  },
];

const pros = [
  {
    name: 'Elena Rostova',
    role: 'Certified Deep Cleaner',
    rating: '4.9',
    reviews: '(128 reviews)',
    tag: 'Eco-Friendly Supplies',
    price: '$35',
    tagIcon: '♻',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-5OYSVr6TszF-yZsGuWSKUJMy4agSHpqOzWjE3Lo9O3JZJi0YvWrdi27Y9iXMO22ot9XNot2wEqM3h-VCf-OVAFUpm6zDsJCEkkL0JU2DJM3VPu4ZS3LkEG3Fms0mVYLHyE-jPKtIpT-XbL4nndx8y5eA4AxJtY8dTGmK7VpXtPrTOz-2K0bEaO0otBY6PDgJe5Q4vsF27vxNu38RUaBQnRwwVaWnwVyPjJMVtc7X_LIPoaRfn1iQSg',
  },
  {
    name: 'David Miller',
    role: 'Master Plumber & Pipe Specialist',
    rating: '4.8',
    reviews: '(94 reviews)',
    tag: 'Fast Response',
    price: '$45',
    tagIcon: '⚡',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCQJ4sWA5v5jJURXBHgTyM9wASdLiZtd4DmxIGtnffawxEAgxRX3FtrtZNm9Zo7TO0tfbdFk6vDjF596heIvJoF1O1LENLLZJ_-HigsjOkIj6m4209CtLK2yHrRgjvlBpc4w2mkKGpMdgdsKmkWdGrKcW5wvgjXyDw8M75EQlig2IIzg2J-XcNHABCXiOeOjdRTvlfsUsYMzTbVI230hxOxOuecdzyd5onNzt_VEAQYcp09jZ1Ej1oag',
  },
];

function SectionHeading({
  title,
  action,
  subtitle,
}: {
  title: string;
  action?: string;
  subtitle?: string;
}) {
  return (
    <View className="mb-3 flex-row items-center justify-between px-0.5">
      <View className="flex-1">
        <Text className="text-[17px] font-bold text-[#263D36]">{title}</Text>
        {subtitle ? <Text className="mt-0.5 text-xs text-[#4A685E]">{subtitle}</Text> : null}
      </View>
      {action ? (
        <Pressable accessibilityRole="button" className="py-1 pl-2.5">
          <Text className="text-xs font-bold text-[#659287]">{action} ›</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const [search, setSearch] = React.useState('');

  const openProDetails = React.useCallback(() => {
    router.push({ pathname: '/pro-detail-1', params: { service: 'Cleaning' } });
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-[#E6F2DD]" edges={['top', 'left', 'right']}>
      <View className="mx-auto w-full max-w-[1200px] flex-1 bg-[#E6F2DD]">
        <ScrollView
          contentContainerClassName="pb-28"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="min-h-[76px] flex-row items-center justify-between bg-[#E6F2DD] px-5 pt-2.5 pb-2">
            <View className="min-w-0 flex-1 flex-row items-center gap-2.5">
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQl61VRhebKkf-wcsfPHPfoO-LgVMzgtonDhBRoQzqXqVE0m2aye8G8eOZECIR8eN4yAVtstc-kTRfmtyJHx6qGsrnllcn3MXphdRtBhGiEZk4WSwJZdnPH3gW9HgRzh3gZ-VexAVd8KY_b94Psx0PdNr7ruL2Aqi-b1fKmKQHLB4XwiyMF2EYSUPpahHjgbuN05bymVpEGbavrj3cjYZb2C04rEZ1EbgE10c4LmNxjVR7KoAW-2ZQg',
                }}
                className="h-10 w-10 rounded-full border border-[#88BDA4]/40 bg-white"
                contentFit="cover"
                accessibilityLabel="Alex's profile"
              />
              <View className="min-w-0 flex-1">
                <Text className="text-[11px] font-semibold text-[#4A685E]">Good morning, Alex 👋</Text>
                <Pressable accessibilityRole="button" className="mt-0.5 flex-row items-center gap-1">
                  <Text className="text-[17px] text-[#659287]">🖈</Text>
                  <Text numberOfLines={1} className="shrink text-[13px] font-bold text-[#263D36]">
                    142 Greenview Lane, Apt 4B
                  </Text>
                  <Text className="text-[17px] text-[#4A685E]">⮟</Text>
                </Pressable>
              </View>
            </View>
            <Pressable
              accessibilityLabel="Notifications"
              accessibilityRole="button"
              className="ml-2 h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <Text className="text-[22px] text-[#263D36]">♧</Text>
              <View className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#FFDDB0]" />
            </Pressable>
          </View>

          <View className="gap-5 px-5 pt-1">
            <View className="flex-row items-center gap-2.5">
              <View className="h-[50px] flex-1 flex-row items-center rounded-2xl border border-[#88BDA4]/30 bg-white px-[13px]">
                <Text className="mr-2 text-2xl text-[#659287]">⌕</Text>
                <TextInput
                  accessibilityLabel="Search services"
                  placeholder={'Search "deep cleaning", "plumber"...'}
                  placeholderTextColor="#4A685EB3"
                  returnKeyType="search"
                  value={search}
                  onChangeText={setSearch}
                  className="flex-1 p-0 text-sm text-[#263D36]"
                />
              </View>
              <Pressable
                accessibilityLabel="Filters"
                accessibilityRole="button"
                className="h-[50px] w-[50px] items-center justify-center rounded-2xl bg-[#659287]"
              >
                <Text className="text-[23px] text-white">☷</Text>
              </Pressable>
            </View>

            <View className="rounded-[22px] border border-[#B1D3B9] bg-white p-4">
              <View className="mb-3 flex-row items-center justify-between gap-2">
                <View className="flex-row items-center gap-1.5 rounded-full bg-[#FFDDB0] px-2.5 py-[5px]">
                  <View className="h-1.5 w-1.5 rounded-full bg-[#263D36]" />
                  <Text className="text-[10px] font-bold text-[#263D36]">Upcoming Service Today</Text>
                </View>
                <Text className="text-[10px] font-semibold text-[#4A685E]">Order #SP-8491</Text>
              </View>
              <View className="mb-3.5 flex-row items-start justify-between gap-3">
                <View className="flex-1">
                  <Text className="text-base font-bold text-[#263D36]">AC Maintenance &amp; Filter Swap</Text>
                  <View className="mt-1 flex-row items-center gap-2">
                    <Text className="text-xs text-[#4A685E]">Marcus Vance</Text>
                    <View className="flex-row items-center rounded-md bg-[#E6F2DD] px-1.5 py-[3px]">
                      <Text className="text-[11px] font-bold text-[#263D36]">4.9 </Text>
                      <Text className="text-[11px] text-[#705835]">★</Text>
                    </View>
                  </View>
                </View>
                <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E6F2DD]">
                  <Text className="text-2xl text-[#659287]">❄</Text>
                </View>
              </View>
              <View className="mb-3.5 min-h-10 flex-row items-center justify-between gap-2 rounded-xl border border-[#88BDA4]/20 bg-[#E6F2DD]/70 px-2.5 py-2">
                <Text className="text-xs font-semibold text-[#263D36]">◷  Today, 2:30 PM</Text>
                <Text className="text-[11px] font-bold text-[#38645A]">Technician on the way 🛵</Text>
              </View>
              <View className="flex-row gap-2">
                <Pressable accessibilityRole="button" className="h-10 flex-1 items-center justify-center rounded-full bg-[#659287]">
                  <Text className="text-[13px] font-bold text-white">➤  Track</Text>
                </Pressable>
                <Pressable accessibilityRole="button" className="h-10 flex-1 items-center justify-center rounded-full bg-[#B1D3B9]/35">
                  <Text className="text-[13px] font-bold text-[#263D36]">☎  Call</Text>
                </Pressable>
              </View>
            </View>

            <View className="min-h-[196px] overflow-hidden rounded-[22px] bg-[#4A685E] p-5">
              <View className="absolute top-[-34px] right-[-25px] h-[140px] w-[140px] rounded-full bg-[#88BDA4]/40" />
              <Text className="mb-2 self-start overflow-hidden rounded-full bg-[#FFDDB0] px-2.5 py-1 text-[10px] font-extrabold tracking-[0.6px] text-[#263D36]">CODE: FRESH25</Text>
              <Text className="mb-1.5 max-w-[260px] text-[22px] font-extrabold text-white">Spring Home Refresh ✨</Text>
              <Text className="mb-3.5 max-w-[260px] text-xs leading-[18px] text-[#E6FFF5]">
                Get 25% off deep cleaning &amp; garden care this week.
              </Text>
              <Pressable accessibilityRole="button" className="h-[42px] self-start justify-center rounded-full bg-white px-5">
                <Text className="text-sm font-bold text-[#659287]">Book Now  →</Text>
              </Pressable>
            </View>

            <View>
              <SectionHeading title="Popular Services" action="See All" />
              <View className="flex-row flex-wrap justify-between gap-y-3.5">
                {categories.map((category) => (
                  <Pressable
                    accessibilityRole="button"
                    key={category.name}
                    className="w-[23%] items-center"
                  >
                    <View className="aspect-square w-full rounded-[18px] border border-[#88BDA4]/25 bg-white p-1.5">
                      <Image
                        source={{ uri: category.image }}
                        className="h-full w-full rounded-xl"
                        contentFit="cover"
                        accessibilityLabel={category.name}
                      />
                    </View>
                    <Text numberOfLines={1} className="mt-[7px] w-full text-center text-[11px] font-semibold text-[#263D36]">
                      {category.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View>
              <SectionHeading
                title="Trusted Pros Near You"
                subtitle="Vetted background-checked specialists"
                action="View All"
              />
              <ScrollView
                contentContainerClassName="gap-3 pb-2"
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {pros.map((pro, index) => (
                  <View key={pro.name} className="min-h-[218px] w-[280px] justify-between rounded-[20px] border border-[#88BDA4]/25 bg-white p-4">
                    <View>
                      <View className="mb-3 flex-row items-start gap-3">
                        <View className="h-12 w-12 rounded-full border border-[#88BDA4]/30">
                          <Image
                            source={{ uri: pro.image }}
                            className="h-full w-full rounded-full"
                            contentFit="cover"
                            accessibilityLabel={`${pro.name} portrait`}
                          />
                          <View className="absolute right-[-1px] bottom-[-1px] h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-white bg-[#659287]">
                            <Text className="text-[8px] font-extrabold text-white">✓</Text>
                          </View>
                        </View>
                        <View className="min-w-0 flex-1">
                          <View className="flex-row items-center gap-1">
                            <Text numberOfLines={1} className="shrink text-[15px] font-bold text-[#263D36]">
                              {pro.name}
                            </Text>
                            <Text className="text-sm font-extrabold text-[#659287]">✓</Text>
                          </View>
                          <Text numberOfLines={1} className="mt-0.5 text-[11px] text-[#4A685E]">
                            {pro.role}
                          </Text>
                          <View className="mt-1 flex-row items-center gap-1">
                            <Text className="text-[13px] text-[#705835]">★</Text>
                            <Text className="text-[11px] font-bold text-[#263D36]">{pro.rating}</Text>
                            <Text className="text-[11px] text-[#4A685E]">{pro.reviews}</Text>
                          </View>
                        </View>
                      </View>
                      <View
                        className={`mb-3 self-start flex-row items-center gap-1 rounded-full px-2.5 py-[5px] ${index === 1 ? 'bg-[#FFDDB0]' : 'bg-[#E6F2DD]'}`}
                      >
                        <Text className="text-xs text-[#659287]">{pro.tagIcon}</Text>
                        <Text className="text-[10px] font-semibold text-[#263D36]">{pro.tag}</Text>
                      </View>
                    </View>
                    <View className="min-h-10 flex-row items-center justify-between border-t border-[#88BDA4]/20 pt-2.5">
                      <View className="flex-row items-baseline gap-[3px]">
                        <Text className="text-[17px] font-extrabold text-[#263D36]">{pro.price}</Text>
                        <Text className="text-[11px] text-[#4A685E]">/hr</Text>
                      </View>
                      <Pressable
                        accessibilityRole="button"
                        onPress={index === 0 ? openProDetails : undefined}
                        className="h-[34px] items-center justify-center rounded-full bg-[#659287] px-4"
                      >
                        <Text className="text-xs font-bold text-white">Book</Text>
                      </Pressable>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <View className="absolute right-0 bottom-0 left-0 min-h-[72px] flex-row items-center justify-around rounded-t-[18px] bg-white px-3 pt-2 pb-3 shadow-lg">
          <Pressable accessibilityRole="button" className="min-w-[68px] items-center rounded-full bg-[#B5ECD1] px-3 py-1.5">
            <Text className="text-[21px] leading-6 text-[#396C57]">⌂</Text>
            <Text className="mt-0.5 text-[10px] font-bold text-[#396C57]">Home</Text>
          </Pressable>
          <Pressable accessibilityRole="button" className="min-w-16 items-center py-1.5">
            <Text className="text-[21px] leading-6 text-[#4A685E]">▦</Text>
            <Text className="mt-0.5 text-[10px] font-semibold text-[#4A685E]">Bookings</Text>
          </Pressable>
          <Pressable accessibilityRole="button" className="min-w-16 items-center py-1.5">
            <View className="relative">
              <Text className="text-[21px] leading-6 text-[#4A685E]">▢</Text>
              <View className="absolute top-0 right-[-3px] h-2 w-2 rounded-full bg-[#659287]" />
            </View>
            <Text className="mt-0.5 text-[10px] font-semibold text-[#4A685E]">Messages</Text>
          </Pressable>
          <Pressable accessibilityRole="button" className="min-w-16 items-center py-1.5">
            <Text className="text-[21px] leading-6 text-[#4A685E]">♙</Text>
            <Text className="mt-0.5 text-[10px] font-semibold text-[#4A685E]">Profile</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
