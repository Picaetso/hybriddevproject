import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const services = [
  'Cleaning',
  'Plumbing',
  'Electrical',
  'Gardening',
  'Painting',
  'Appliances',
  'Handyman',
  'Pest Control',
] as const;

type ServiceName = (typeof services)[number];

const serviceHighlights: Record<ServiceName, string> = {
  Cleaning: 'Non-toxic, high-grade organic domestic sterilization',
  Plumbing: 'Reliable repairs and installations from a vetted local specialist',
  Electrical: 'Safe electrical repairs completed by a verified professional',
  Gardening: 'Thoughtful garden care to keep your outdoor space thriving',
  Painting: 'Careful surface preparation and a polished, lasting finish',
  Appliances: 'Expert appliance diagnostics, maintenance, and repair',
  Handyman: 'Trusted help with everyday home repairs and improvements',
  'Pest Control': 'Careful, home-safe treatments from a vetted specialist',
};

const serviceInclusions: Record<ServiceName, string[]> = {
  Cleaning: [
    'Deep dusting & detailed baseboards',
    'Kitchen degreasing & appliance wipe',
    'Bathroom descaling & disinfection',
    'Floor scrubbing & organic steam mop',
  ],
  Plumbing: [
    'Plumbing system inspection',
    'Leak detection and repair',
    'Fixture and faucet service',
    'Work-area cleanup',
  ],
  Electrical: [
    'Electrical safety inspection',
    'Fault diagnosis and repair',
    'Fixture and outlet service',
    'Final safety checks',
  ],
  Gardening: [
    'Garden and planting-bed assessment',
    'Weeding and seasonal pruning',
    'Planting and soil care',
    'Green-waste tidy-up',
  ],
  Painting: [
    'Surface preparation and protection',
    'Filling and sanding minor blemishes',
    'Careful paint application',
    'Work-area cleanup',
  ],
  Appliances: [
    'Appliance condition assessment',
    'Fault diagnosis',
    'Repair recommendations',
    'Function and safety check',
  ],
  Handyman: [
    'On-site task assessment',
    'Small home repairs',
    'Fixture and hardware installation',
    'Work-area cleanup',
  ],
  'Pest Control': [
    'Property and pest assessment',
    'Targeted treatment plan',
    'Home-conscious application',
    'Prevention recommendations',
  ],
};

const availableTimes = [
  { label: 'Morning', time: '09:00 AM' },
  { label: 'Midday', time: '01:00 PM' },
  { label: 'Evening', time: '04:30 PM' },
];

function getDates() {
  return Array.from({ length: 4 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      label:
        index === 0
          ? 'Today'
          : index === 1
            ? 'Tomorrow'
            : date.toLocaleDateString('en-US', { month: 'short' }),
    };
  });
}

export default function ServiceDetailsScreen() {
  const router = useRouter();
  const { service: serviceParam } = useLocalSearchParams<{ service?: string }>();
  const service = services.find((item) => item === serviceParam) ?? 'Cleaning';
  const dates = getDates();
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(1);
  const [saved, setSaved] = useState(false);
  const [instructions, setInstructions] = useState(
    'Key under the mat, two friendly cats in the living room'
  );
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#E6F2DD]" edges={['top', 'left', 'right', 'bottom']}>
      <View className="flex-1 bg-[#E6F2DD]">
        <View className="min-h-[62px] flex-row items-center justify-between gap-2 px-4">
          <Pressable
            accessibilityLabel="Go back"
            accessibilityRole="button"
            onPress={() => router.back()}
            className="h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-sm">
            <Text className="mt-[-4px] text-[34px] leading-[38px] text-[#263D36]">‹</Text>
          </Pressable>
          <Text className="flex-1 text-center text-lg font-bold text-[#263D36]">Professional Details</Text>
          <View className="flex-row gap-2">
            <Pressable
              accessibilityLabel="Share service"
              accessibilityRole="button"
              onPress={() => Share.share({ message: `${service} service on Sproutly` })}
              className="h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-sm">
              <Text className="text-[21px] font-semibold text-[#263D36]">↗</Text>
            </Pressable>
            <Pressable
              accessibilityLabel={saved ? 'Remove bookmark' : 'Save service'}
              accessibilityRole="button"
              onPress={() => setSaved((value) => !value)}
              className="h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-sm">
              <Text className={`text-[21px] font-semibold ${saved ? 'text-[#38645A]' : 'text-[#263D36]'}`}>
                {saved ? '♥' : '♡'}
              </Text>
            </Pressable>
          </View>
        </View>

        <ScrollView
          contentContainerClassName="gap-3.5 px-4 pt-1 pb-[180px]"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View className="rounded-3xl border border-[#88BDA4]/25 bg-white p-[18px] shadow-sm">
            <View className="flex-row items-center gap-3.5">
              <View className="relative">
                <Image
                  accessibilityLabel="Service professional Elena Rostova"
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-5OYSVr6TszF-yZsGuWSKUJMy4agSHpqOzWjE3Lo9O3JZJi0YvWrdi27Y9iXMO22ot9XNot2wEqM3h-VCf-OVAFUpm6zDsJCEkkL0JU2DJM3VPu4ZS3LkEG3Fms0mVYLHyE-jPKtIpT-XbL4nndx8y5eA4AxJtY8dTGmK7VpXtPrTOz-2K0bEaO0otBY6PDgJe5Q4vsF27vxNu38RUaBQnRwwVaWnwVyPjJMVtc7X_LIPoaRfn1iQSg',
                  }}
                  className="h-[72px] w-[72px] rounded-[20px] bg-[#DFFAEE]"
                />
                <View className="absolute right-[-4px] bottom-[-4px] h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#38645A]">
                  <Text className="text-[13px] font-extrabold text-white">✓</Text>
                </View>
              </View>
              <View className="flex-1 gap-1">
                <View className="flex-row flex-wrap gap-1.5">
                  <Text className="overflow-hidden rounded-xl bg-[#FFDDB0] px-[9px] py-1 text-[11px] font-bold text-[#263D36]">★ 4.9 (128)</Text>
                  <Text className="overflow-hidden rounded-xl bg-[#D9F4E9] px-[9px] py-1 text-[11px] font-semibold text-[#396C57]">Top Rated</Text>
                </View>
                <Text className="text-[17px] font-bold text-[#263D36]">Elena Rostova</Text>
                <Text className="text-xs leading-[18px] text-[#4A685E]">{service} Specialist</Text>
              </View>
            </View>

            <View className="mt-4 flex-row gap-2 border-t border-[#88BDA4]/20 pt-3">
              <View className="flex-1 rounded-xl bg-[#E6F2DD]/65 p-2.5">
                <Text className="text-xs font-bold text-[#263D36]">5+ Years</Text>
                <Text className="mt-0.5 text-[10px] text-[#4A685E]">Master Pro</Text>
              </View>
              <View className="flex-1 rounded-xl bg-[#E6F2DD]/65 p-2.5">
                <Text className="text-xs font-bold text-[#263D36]">Checked</Text>
                <Text className="mt-0.5 text-[10px] text-[#4A685E]">Police Verified</Text>
              </View>
            </View>
            <View className="mt-3 flex-row items-center justify-between rounded-2xl border border-[#88BDA4]/30 bg-[#DFFAEE] p-3">
              <View>
                <Text className="text-xs leading-[18px] text-[#4A685E]">Hourly Rate</Text>
                <Text className="text-[23px] font-extrabold text-[#263D36]">$35<Text className="text-xs font-normal text-[#4A685E]">/hour</Text></Text>
              </View>
              <View className="items-end">
                <Text className="text-xs leading-[18px] text-[#4A685E]">Package deal</Text>
                <Text className="text-xs font-bold text-[#38645A]">$120 / 3-Bed</Text>
              </View>
            </View>
          </View>

          <View className="rounded-3xl border border-[#88BDA4]/25 bg-white p-[18px] shadow-sm">
            <Text className="text-[17px] font-bold text-[#263D36]">Service Highlights</Text>
            <Text className="mt-1 text-xs leading-[18px] text-[#4A685E]">
              {serviceHighlights[service]}
            </Text>
            <View className="mt-3.5 mb-3.5 flex-row flex-wrap gap-[7px]">
              <Text className="overflow-hidden rounded-[18px] border border-[#88BDA4]/35 bg-[#E6F2DD] px-2.5 py-1.5 text-[11px] font-semibold text-[#263D36]">♧ Eco-Friendly Supplies</Text>
              <Text className="overflow-hidden rounded-[18px] border border-[#88BDA4]/35 bg-[#E6F2DD] px-2.5 py-1.5 text-[11px] font-semibold text-[#263D36]">Pet Safe</Text>
              <Text className="overflow-hidden rounded-[18px] border border-[#88BDA4]/35 bg-[#E6F2DD] px-2.5 py-1.5 text-[11px] font-semibold text-[#263D36]">Equipment Provided</Text>
              <Text className="overflow-hidden rounded-[18px] border border-[#88BDA4]/35 bg-[#E6F2DD] px-2.5 py-1.5 text-[11px] font-semibold text-[#263D36]">Insured & Bonded</Text>
            </View>
            <View className="mb-2 flex-row items-center justify-between">
              <Text className="text-sm font-bold text-[#263D36]">What&apos;s Included</Text>
              <Text className="text-xs font-bold text-[#38645A]">Full service</Text>
            </View>
            {serviceInclusions[service].map((inclusion) => (
              <View key={inclusion} className="mt-[7px] flex-row items-center gap-2.5 rounded-xl border border-[#88BDA4]/20 bg-[#E6F2DD]/50 p-2.5">
                <Text className="text-lg font-extrabold text-[#38645A]">✓</Text>
                <Text className="flex-1 text-[13px] leading-[19px] text-[#263D36]">{inclusion}</Text>
              </View>
            ))}
          </View>

          <View className="rounded-3xl border border-[#88BDA4]/25 bg-white p-[18px] shadow-sm">
            <View className="mb-3 flex-row items-center justify-between gap-3">
              <View>
                <Text className="text-[17px] font-bold text-[#263D36]">Select Schedule</Text>
                <Text className="text-xs leading-[18px] text-[#4A685E]">Pick your preferred appointment</Text>
              </View>
              <Text className="text-2xl text-[#38645A]">▦</Text>
            </View>
            <Text className="mt-3 mb-2 text-[10px] font-extrabold tracking-[1px] text-[#4A685E]">AVAILABLE DATES</Text>
            <View className="flex-row gap-2">
              {dates.map((date, index) => (
                <Pressable
                  key={`${date.month}-${date.date}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedDate === index }}
                  onPress={() => setSelectedDate(index)}
                  className={`min-w-0 flex-1 items-center justify-center rounded-[15px] border px-1 py-2.5 ${selectedDate === index ? 'border-[#659287] bg-[#659287]' : 'border-[#88BDA4]/30 bg-[#DFFAEE]'}`}>
                  <Text className={`text-[10px] font-semibold ${selectedDate === index ? 'text-[#D6E8D3]' : 'text-[#4A685E]'}`}>
                    {date.day}
                  </Text>
                  <Text className={`my-0.5 text-[21px] font-extrabold ${selectedDate === index ? 'text-white' : 'text-[#263D36]'}`}>
                    {date.date}
                  </Text>
                  <Text className={`text-[9px] font-semibold ${selectedDate === index ? 'text-[#D6E8D3]' : 'text-[#4A685E]'}`}>
                    {date.label}
                  </Text>
                </Pressable>
              ))}
            </View>
            <Text className="mt-3 mb-2 text-[10px] font-extrabold tracking-[1px] text-[#4A685E]">ARRIVAL WINDOW</Text>
            <View className="flex-row gap-[7px]">
              {availableTimes.map((slot, index) => (
                <Pressable
                  key={slot.time}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedTime === index }}
                  onPress={() => setSelectedTime(index)}
                  className={`flex-1 items-center justify-center rounded-xl border px-1 py-2.5 ${selectedTime === index ? 'border-[#659287] bg-[#659287]' : 'border-[#88BDA4]/30 bg-[#DFFAEE]'}`}>
                  <Text className={`text-[9px] ${selectedTime === index ? 'text-[#D6E8D3]' : 'text-[#4A685E]'}`}>
                    {slot.label}
                  </Text>
                  <Text className={`mt-[3px] text-[11px] font-bold ${selectedTime === index ? 'text-white' : 'text-[#263D36]'}`}>
                    {slot.time}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="rounded-3xl border border-[#88BDA4]/25 bg-white p-[18px] shadow-sm">
            <View className="mb-3 flex-row items-center justify-between gap-3">
              <Text className="text-[17px] font-bold text-[#263D36]">Service Location</Text>
              <Pressable onPress={() => setInstructions('')}>
                <Text className="text-xs font-bold text-[#38645A]">Edit notes</Text>
              </Pressable>
            </View>
            <View className="mt-1 flex-row items-center gap-3 rounded-2xl border border-[#88BDA4]/30 bg-[#E6F2DD]/55 p-3">
              <Text className="h-[38px] w-[38px] rounded-xl bg-white text-center text-[22px] leading-[38px] text-[#38645A]">🖈</Text>
              <View className="flex-1">
                <Text className="mb-0.5 text-xs font-bold text-[#263D36]">142 Greenview Lane, Apt 4B</Text>
                <Text className="text-xs leading-[18px] text-[#4A685E]">Primary Residence · 4th Floor with Elevator</Text>
              </View>
            </View>
            <Text className="mt-3 mb-2 text-[10px] font-extrabold tracking-[1px] text-[#4A685E]">SPECIAL INSTRUCTIONS / ENTRY NOTES</Text>
            <TextInput
              accessibilityLabel="Special instructions"
              onChangeText={setInstructions}
              placeholder="Gate code, pets inside, parking details"
              placeholderTextColor="#71847d"
              className="min-h-12 rounded-[14px] border border-[#88BDA4]/45 px-3 py-2.5 text-[13px] text-[#263D36]"
              value={instructions}
            />
          </View>

          <View className="rounded-3xl border border-[#88BDA4]/25 bg-white p-[18px] shadow-sm">
            <Text className="text-[17px] font-bold text-[#263D36]">Payment Summary</Text>
            <View className="mt-3 flex-row items-center justify-between gap-3">
              <Text className="text-xs leading-[18px] text-[#4A685E]">{service} (3 hrs estimated)</Text>
              <Text className="text-[13px] font-semibold text-[#263D36]">$105.00</Text>
            </View>
            <View className="mt-3 flex-row items-center justify-between gap-3">
              <Text className="text-xs leading-[18px] text-[#4A685E]">Service supplies · Complimentary</Text>
              <Text className="text-xs font-bold text-[#38645A]">$0.00</Text>
            </View>
            <View className="mt-3 flex-row items-center justify-between gap-3">
              <Text className="text-xs leading-[18px] text-[#4A685E]">Platform service fee</Text>
              <Text className="text-[13px] font-semibold text-[#263D36]">$4.50</Text>
            </View>
            <View className="mt-3 flex-row items-center justify-between gap-3">
              <Text className="text-xs font-bold text-[#38645A]">Promo code: FRESH25</Text>
              <Text className="text-xs font-bold text-[#38645A]">-$15.00</Text>
            </View>
            <View className="mt-3.5 flex-row items-center justify-between border-t border-[#88BDA4]/25 pt-3">
              <View>
                <Text className="text-sm font-bold text-[#263D36]">Total Amount</Text>
                <Text className="text-xs leading-[18px] text-[#4A685E]">Taxes & insurance included</Text>
              </View>
              <Text className="text-2xl font-extrabold text-[#263D36]">$94.50</Text>
            </View>
            <Text className="mt-3.5 rounded-xl bg-[#E6F2DD] p-2.5 text-[11px] leading-[17px] text-[#263D36]">
              ✓ 100% Domestic Guarantee: Free re-service if you are not satisfied within 24 hours.
            </Text>
          </View>
        </ScrollView>

        <View className="absolute right-0 bottom-0 left-0 gap-2 rounded-t-3xl border-t border-[#88BDA4]/25 bg-white/95 px-[18px] pt-3 pb-5">
          {bookingConfirmed ? (
            <Text className="text-center text-xs font-semibold text-[#38645A]">
              Slot selected: {dates[selectedDate].day}, {dates[selectedDate].month}{' '}
              {dates[selectedDate].date} at {availableTimes[selectedTime].time}
            </Text>
          ) : null}
          <View className="flex-row items-center justify-between gap-3">
            <View>
              <Text className="text-xs leading-[18px] text-[#4A685E]">Total Price</Text>
              <Text className="text-[22px] font-extrabold text-[#263D36]">$94.50</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={() => setBookingConfirmed(true)}
              className="min-h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-[28px] bg-[#659287] px-3">
              <Text className="text-sm font-bold text-white">
                {bookingConfirmed ? 'Slot Selected' : 'Confirm & Book Slot'}
              </Text>
              <Text className="text-[19px] font-bold text-white">→</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
