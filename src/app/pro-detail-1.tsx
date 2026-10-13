import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
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
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable
            accessibilityLabel="Go back"
            accessibilityRole="button"
            onPress={() => router.back()}
            style={styles.headerButton}>
            <Text style={styles.headerIcon}>‹</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Professional Details</Text>
          <View style={styles.headerActions}>
            <Pressable
              accessibilityLabel="Share service"
              accessibilityRole="button"
              onPress={() => Share.share({ message: `${service} service on Sproutly` })}
              style={styles.headerButton}>
              <Text style={styles.smallHeaderIcon}>↗</Text>
            </Pressable>
            <Pressable
              accessibilityLabel={saved ? 'Remove bookmark' : 'Save service'}
              accessibilityRole="button"
              onPress={() => setSaved((value) => !value)}
              style={styles.headerButton}>
              <Text style={[styles.smallHeaderIcon, saved && styles.selectedBookmark]}>
                {saved ? '♥' : '♡'}
              </Text>
            </Pressable>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.profileRow}>
              <View style={styles.avatarWrap}>
                <Image
                  accessibilityLabel="Service professional Elena Rostova"
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-5OYSVr6TszF-yZsGuWSKUJMy4agSHpqOzWjE3Lo9O3JZJi0YvWrdi27Y9iXMO22ot9XNot2wEqM3h-VCf-OVAFUpm6zDsJCEkkL0JU2DJM3VPu4ZS3LkEG3Fms0mVYLHyE-jPKtIpT-XbL4nndx8y5eA4AxJtY8dTGmK7VpXtPrTOz-2K0bEaO0otBY6PDgJe5Q4vsF27vxNu38RUaBQnRwwVaWnwVyPjJMVtc7X_LIPoaRfn1iQSg',
                  }}
                  style={styles.avatar}
                />
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓</Text>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <View style={styles.badgeRow}>
                  <Text style={styles.ratingBadge}>★ 4.9 (128)</Text>
                  <Text style={styles.topRatedBadge}>Top Rated</Text>
                </View>
                <Text style={styles.providerName}>Elena Rostova</Text>
                <Text style={styles.mutedText}>{service} Specialist</Text>
              </View>
            </View>

            <View style={styles.credentials}>
              <View style={styles.credential}>
                <Text style={styles.credentialTitle}>5+ Years</Text>
                <Text style={styles.credentialCaption}>Master Pro</Text>
              </View>
              <View style={styles.credential}>
                <Text style={styles.credentialTitle}>Checked</Text>
                <Text style={styles.credentialCaption}>Police Verified</Text>
              </View>
            </View>
            <View style={styles.rateBanner}>
              <View>
                <Text style={styles.mutedText}>Hourly Rate</Text>
                <Text style={styles.rate}>$35<Text style={styles.rateUnit}>/hour</Text></Text>
              </View>
              <View style={styles.alignRight}>
                <Text style={styles.mutedText}>Package deal</Text>
                <Text style={styles.packageRate}>$120 / 3-Bed</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Service Highlights</Text>
            <Text style={[styles.mutedText, styles.sectionSubtitle]}>
              {serviceHighlights[service]}
            </Text>
            <View style={styles.chips}>
              <Text style={styles.chip}>♧ Eco-Friendly Supplies</Text>
              <Text style={styles.chip}>Pet Safe</Text>
              <Text style={styles.chip}>Equipment Provided</Text>
              <Text style={styles.chip}>Insured & Bonded</Text>
            </View>
            <View style={styles.inclusionsHeading}>
              <Text style={styles.inclusionsTitle}>What&apos;s Included</Text>
              <Text style={styles.packageRate}>Full service</Text>
            </View>
            {serviceInclusions[service].map((inclusion) => (
              <View key={inclusion} style={styles.inclusionRow}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.inclusionText}>{inclusion}</Text>
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <View style={styles.sectionHeadingRow}>
              <View>
                <Text style={styles.sectionTitle}>Select Schedule</Text>
                <Text style={styles.mutedText}>Pick your preferred appointment</Text>
              </View>
              <Text style={styles.calendarIcon}>▦</Text>
            </View>
            <Text style={styles.fieldLabel}>AVAILABLE DATES</Text>
            <View style={styles.dateRow}>
              {dates.map((date, index) => (
                <Pressable
                  key={`${date.month}-${date.date}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedDate === index }}
                  onPress={() => setSelectedDate(index)}
                  style={[styles.dateOption, selectedDate === index && styles.selectedOption]}>
                  <Text style={[styles.dateDay, selectedDate === index && styles.selectedSubtext]}>
                    {date.day}
                  </Text>
                  <Text style={[styles.dateNumber, selectedDate === index && styles.selectedText]}>
                    {date.date}
                  </Text>
                  <Text style={[styles.dateMonth, selectedDate === index && styles.selectedSubtext]}>
                    {date.label}
                  </Text>
                </Pressable>
              ))}
            </View>
            <Text style={styles.fieldLabel}>ARRIVAL WINDOW</Text>
            <View style={styles.timeRow}>
              {availableTimes.map((slot, index) => (
                <Pressable
                  key={slot.time}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedTime === index }}
                  onPress={() => setSelectedTime(index)}
                  style={[styles.timeOption, selectedTime === index && styles.selectedOption]}>
                  <Text style={[styles.timeLabel, selectedTime === index && styles.selectedSubtext]}>
                    {slot.label}
                  </Text>
                  <Text style={[styles.timeValue, selectedTime === index && styles.selectedText]}>
                    {slot.time}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.sectionHeadingRow}>
              <Text style={styles.sectionTitle}>Service Location</Text>
              <Pressable onPress={() => setInstructions('')}>
                <Text style={styles.packageRate}>Edit notes</Text>
              </Pressable>
            </View>
            <View style={styles.addressBox}>
              <Text style={styles.locationIcon}>⌖</Text>
              <View style={styles.addressText}>
                <Text style={styles.addressTitle}>142 Greenview Lane, Apt 4B</Text>
                <Text style={styles.mutedText}>Primary Residence · 4th Floor with Elevator</Text>
              </View>
            </View>
            <Text style={styles.fieldLabel}>SPECIAL INSTRUCTIONS / ENTRY NOTES</Text>
            <TextInput
              accessibilityLabel="Special instructions"
              onChangeText={setInstructions}
              placeholder="Gate code, pets inside, parking details"
              placeholderTextColor="#71847d"
              style={styles.instructionsInput}
              value={instructions}
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Payment Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.mutedText}>{service} (3 hrs estimated)</Text>
              <Text style={styles.summaryValue}>$105.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.mutedText}>Service supplies · Complimentary</Text>
              <Text style={styles.packageRate}>$0.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.mutedText}>Platform service fee</Text>
              <Text style={styles.summaryValue}>$4.50</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.packageRate}>Promo code: FRESH25</Text>
              <Text style={styles.packageRate}>-$15.00</Text>
            </View>
            <View style={styles.totalRow}>
              <View>
                <Text style={styles.inclusionsTitle}>Total Amount</Text>
                <Text style={styles.mutedText}>Taxes & insurance included</Text>
              </View>
              <Text style={styles.totalAmount}>$94.50</Text>
            </View>
            <Text style={styles.guarantee}>
              ✓ 100% Domestic Guarantee: Free re-service if you are not satisfied within 24 hours.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.bookingBar}>
          {bookingConfirmed ? (
            <Text style={styles.confirmation}>
              Slot selected: {dates[selectedDate].day}, {dates[selectedDate].month}{' '}
              {dates[selectedDate].date} at {availableTimes[selectedTime].time}
            </Text>
          ) : null}
          <View style={styles.bookingRow}>
            <View>
              <Text style={styles.mutedText}>Total Price</Text>
              <Text style={styles.bookingPrice}>$94.50</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={() => setBookingConfirmed(true)}
              style={styles.bookButton}>
              <Text style={styles.bookButtonText}>
                {bookingConfirmed ? 'Slot Selected' : 'Confirm & Book Slot'}
              </Text>
              <Text style={styles.bookArrow}>→</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6F2DD',
  },
  screen: {
    flex: 1,
    backgroundColor: '#E6F2DD',
  },
  header: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 8,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#263D36',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  headerIcon: {
    color: '#263D36',
    fontSize: 34,
    lineHeight: 38,
    marginTop: -4,
  },
  smallHeaderIcon: {
    color: '#263D36',
    fontSize: 21,
    fontWeight: '600',
  },
  selectedBookmark: {
    color: '#38645a',
  },
  headerTitle: {
    color: '#263D36',
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 180,
    gap: 14,
  },
  card: {
    padding: 18,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(136, 189, 164, 0.25)',
    shadowColor: '#263D36',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarWrap: {
    position: 'relative',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#DFFAEE',
  },
  verifiedBadge: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#38645a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  verifiedText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  ratingBadge: {
    overflow: 'hidden',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 4,
    backgroundColor: '#FFDDB0',
    color: '#263D36',
    fontSize: 11,
    fontWeight: '700',
  },
  topRatedBadge: {
    overflow: 'hidden',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 4,
    backgroundColor: '#D9F4E9',
    color: '#396c57',
    fontSize: 11,
    fontWeight: '600',
  },
  providerName: {
    color: '#263D36',
    fontSize: 17,
    fontWeight: '700',
  },
  mutedText: {
    color: '#4A685E',
    fontSize: 12,
    lineHeight: 18,
  },
  credentials: {
    flexDirection: 'row',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(136, 189, 164, 0.2)',
    marginTop: 16,
    paddingTop: 12,
  },
  credential: {
    flex: 1,
    backgroundColor: 'rgba(230, 242, 221, 0.65)',
    borderRadius: 12,
    padding: 10,
  },
  credentialTitle: {
    color: '#263D36',
    fontSize: 12,
    fontWeight: '700',
  },
  credentialCaption: {
    color: '#4A685E',
    fontSize: 10,
    marginTop: 2,
  },
  rateBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DFFAEE',
    borderWidth: 1,
    borderColor: 'rgba(136, 189, 164, 0.3)',
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
  },
  rate: {
    color: '#263D36',
    fontSize: 23,
    fontWeight: '800',
  },
  rateUnit: {
    color: '#4A685E',
    fontSize: 12,
    fontWeight: '400',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  packageRate: {
    color: '#38645a',
    fontSize: 12,
    fontWeight: '700',
  },
  sectionTitle: {
    color: '#263D36',
    fontSize: 17,
    fontWeight: '700',
  },
  sectionSubtitle: {
    marginTop: 4,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 14,
    marginBottom: 14,
  },
  chip: {
    overflow: 'hidden',
    backgroundColor: '#E6F2DD',
    color: '#263D36',
    borderColor: 'rgba(136, 189, 164, 0.35)',
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 11,
    fontWeight: '600',
  },
  inclusionsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  inclusionsTitle: {
    color: '#263D36',
    fontSize: 14,
    fontWeight: '700',
  },
  inclusionRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(230, 242, 221, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(136, 189, 164, 0.18)',
    padding: 10,
    marginTop: 7,
  },
  checkmark: {
    color: '#38645a',
    fontSize: 18,
    fontWeight: '800',
  },
  inclusionText: {
    flex: 1,
    color: '#263D36',
    fontSize: 13,
    lineHeight: 19,
  },
  sectionHeadingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  calendarIcon: {
    color: '#38645a',
    fontSize: 24,
  },
  fieldLabel: {
    color: '#4A685E',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 12,
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 8,
  },
  dateOption: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFFAEE',
    borderColor: 'rgba(136, 189, 164, 0.3)',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  selectedOption: {
    backgroundColor: '#659287',
    borderColor: '#659287',
  },
  dateDay: {
    color: '#4A685E',
    fontSize: 10,
    fontWeight: '600',
  },
  selectedSubtext: {
    color: '#D6E8D3',
  },
  dateNumber: {
    color: '#263D36',
    fontSize: 21,
    fontWeight: '800',
    marginVertical: 2,
  },
  selectedText: {
    color: '#ffffff',
  },
  dateMonth: {
    color: '#4A685E',
    fontSize: 9,
    fontWeight: '600',
  },
  timeRow: {
    flexDirection: 'row',
    gap: 7,
  },
  timeOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFFAEE',
    borderColor: 'rgba(136, 189, 164, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  timeLabel: {
    color: '#4A685E',
    fontSize: 9,
  },
  timeValue: {
    color: '#263D36',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 3,
  },
  addressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(230, 242, 221, 0.55)',
    borderWidth: 1,
    borderColor: 'rgba(136, 189, 164, 0.3)',
    marginTop: 4,
  },
  locationIcon: {
    width: 38,
    height: 38,
    lineHeight: 38,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    color: '#38645a',
    textAlign: 'center',
    fontSize: 22,
  },
  addressText: {
    flex: 1,
  },
  addressTitle: {
    color: '#263D36',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  instructionsInput: {
    minHeight: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(136, 189, 164, 0.45)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#263D36',
    fontSize: 13,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
  },
  summaryValue: {
    color: '#263D36',
    fontSize: 13,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(136, 189, 164, 0.25)',
    paddingTop: 12,
    marginTop: 14,
  },
  totalAmount: {
    color: '#263D36',
    fontSize: 24,
    fontWeight: '800',
  },
  guarantee: {
    backgroundColor: '#E6F2DD',
    color: '#263D36',
    borderRadius: 12,
    padding: 10,
    marginTop: 14,
    fontSize: 11,
    lineHeight: 17,
  },
  bookingBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(136, 189, 164, 0.22)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 20,
    gap: 8,
  },
  confirmation: {
    color: '#38645a',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  bookingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  bookingPrice: {
    color: '#263D36',
    fontSize: 22,
    fontWeight: '800',
  },
  bookButton: {
    flex: 1,
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#659287',
    borderRadius: 28,
    paddingHorizontal: 12,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  bookArrow: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '700',
  },
});
