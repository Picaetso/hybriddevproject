## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [development build](https://expo.dev)
- [Android emulator](https://expo.dev)
- [iOS simulator](https://expo.dev)
- [Expo Go](https://expo.dev), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://expo.dev).

## Jawaban UTS
React Native bekerja dengan menggunakan dua thread utama, yaitu JavaScript dan Native/Main. Thread JavaScript adalah tempat code javascript dan logika react itu sendiri dieksekusi, sedangkan thread native/main adalah tempat UI nya di-render dan interaksi oleh dan dengan pengguna diatur oleh operating system. Kedua thread tadi berkomunikasi secara asinkron melalui jembatan yang disebut "The Bridge". React Native unggul dalam performa cross-platform, karena satu basis kode bisa dijalankan ke banyak platform dan membeirkan hasil yang responsif. Kelebihan menggunakan React Native adalah sebagai berikut:
1. Single Codebase: Hanya perlu menulis satu basis kode JavaScript/TypeScript untuk menargetkan Android dan iOS sekaligus, sehingga hemat biaya dan waktu.
2. Performa mendekati native: Komponen yang di-render adalah komponen UI asli dari operating system, sehingga animasi dan transisi terasa jauh lebih halus dan responsif dibanding framework hybrid yang basisnya web-view (render di halaman web pada aplikasi).
3. Fast refresh: Developer lebih nyaman karena proses refresh yang sangat cepat, sehingga dapat melihat perubahan code secara instan. Ini jauh lebih baik daripada menunggu proses compile ulang yang lama. Proses debugging menjadi jauh lebih efektif dan produktif.

Komponen adalah code UI yang independen dan dapat digunakan ulang. Contoh pada code saya:
```
export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      <View>
        <Text>{title}</Text>
        <Text>→</Text>
      </View>
    </Pressable>
  );
}
```
Ini adalah code untuk membuat button, yang saya gunakan berulang kali untuk inisialisasi button dan selanjutnya saya isikan teks pada button dan memberikan aksi untuk onPress nya.

Props (Properties) adalah data konfigurasi yang dilewatkan dari komponen parent ke komponen child dan bersifat read-only oleh komponen child. Contoh pada code saya:
Parent:
```
type AuthHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function AuthHeading({ eyebrow, title, description }: AuthHeadingProps) {
  return (
    <View>
      <Text>{eyebrow}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
```
Child:
```
<AuthHeading
  eyebrow="Cleaning-app"
  title={'Welcome\nback!'}
  description="Sign in to pick up where you left off."
/>
```
Komponen child membaca data dari parent, yaitu eyebrow, title, dan description adalah masing-masing string.

State adalah data internal komponen yang dapat berubah seiring waktu, seperti input user. Ketika state berubah, komponen akan otomatis me-render ulang. Contoh pada code saya:
```
const [username, setUsername] = useState('');

<FormField
  label="Username"
  value={username}
  onChangeText={(value) => setUsername(value)}
  placeholder="Your username"
/>```
setUsername akan memperbarui status sesuai dengan input user pada field Username yang terakhir dan menyimpannya secara temporary.

Navigasi adalah mekanisme untuk berpindah antara halaman pada aplikasi. Contoh pada code saya:
```router.push({
  pathname: '/pro-detail-1',
  params: { service: 'Cleaning' },
});
```
Aplikasi ini memakai Expo Router, dan code diatas memanggil navigasi stack yang ada di file _layout.tsx untuk berpindah ke halaman pro-detail-1.

Ide aplikasi cleaning services ini saya dapatkan dari project bersama dosen yang memiliki tema serupa, dimana mencari layanan pembersihan dan pemeliharaan bangunan masih belum memiliki wadah yang praktis untuk akses pelanggan. Target pengguna untuk aplikasi ini adalah masyrakat dewasa muda yang dirasa cukup bisa menggunakan aplikasi dan e-banking. Kebutuhan pengguna adalah sebagai berikut:
- Kemudahan memesan & penjadwalan
- Keamanan & kepercayaan
- Pembayaran praktis & transparan
- Manajemen komunikasi & pelacakan
- Kebutuhan layanan yang spesifik (seperti servis AC)

Tabel pemetaan kebutuhan:
| Kebutuhan | Halaman | Komponen |
| --- | --- | --- |
| Kemudahan memsan & penjadwalan | Home & detail layanan | Kartu layanan di home.tsx. Opsi pilihan tanggal dan waktu pemesanan di halaman detail layanan |
| Keamanan & kepercayaan | Detail layanan & profil | Rating dan logo verified pada profil penyedia layanan dan pengaturan keamanan di profil user |
| Pembayaran praktis & transparan | Detail layanan | Bagian ringkasan pembayaran yang menampilkan billing secara rinci dan sesuai dengan angka akhir |
| Manajemen komunikasi & pelacakan | Home & profil | Bagian upcoming services pada home yang bisa untuk memantau dan menghubungi layanan yang dipesan, serta help & live chat support pada profil |
| Kebutuhan layanan yang spesifik | Home & detail layanan | Daftyar kategori layanan dan search bar pada halaman home, serta opsi pilihan jadwal pemesanan pada detail layanan |

Tautan video demo: https://binusianorg-my.sharepoint.com/personal/freysia_saliman_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQDNrGvF5x18T6O3Kk7_uMzXAQiSIR_V2iDSWlbmXNpY8w0&e=uHknK6