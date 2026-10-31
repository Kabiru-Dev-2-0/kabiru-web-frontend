# Kabiru Web Design System

Dokumen ini merangkum token dan pola desain yang saat ini digunakan di Kabiru Web. Nilai yang tercantum berasal dari implementasi; beberapa komponen juga memiliki gaya khusus yang belum dijadikan token bersama.

## Arah visual

Antarmuka menggunakan warna biru sebagai warna utama, dengan aksen kuning dan warna status untuk menandai tindakan atau informasi. Komponen cenderung memiliki sudut membulat, batas yang jelas, dan—pada tombol—bayangan berlapis yang memberi kesan interaktif.

## Warna

Token warna didefinisikan di `variables.css` dan dipetakan untuk Tailwind di `globals.css`.

| Token | Nilai | Penggunaan umum |
| --- | --- | --- |
| `--color-primary-default` | `#277BC0` | Aksi utama, tautan, progress |
| `--color-primary-hover` | `#2370AF` | Hover dan bayangan tombol utama |
| `--color-primary-active` | `#5295CD` | State aktif |
| `--color-accent-default` | `#FFB200` | Aksen dan aksi penekanan |
| `--color-accent-hover` | `#E8A200` | Hover aksen |
| `--color-accent-active` | `#FFC133` | State aktif aksen |
| `--color-success-default` | `#00BC7D` | Keberhasilan |
| `--color-error-default` | `#FB2C36` | Error |
| `--color-warning-default` | `#FF6900` | Peringatan |
| `--color-disabled-default` | `#6A7282` | Elemen nonaktif |
| `--color-bg-light` | `#F0F1F3` | Latar terang |
| `--color-bg-dark` | `#2D3037` | Latar gelap |
| `--color-bg-disabled` | `#9BA1AB` | Latar nonaktif |
| `--color-text-heading` | `#3A3F48` | Teks judul |
| `--color-text-paragraph` | `#606876` | Teks isi |
| `--color-text-paragraph-75` | `#888E9B` | Teks sekunder |
| `--color-border-surface` | `#BABEC6` | Batas permukaan |
| `--color-border-main` | `#9BA1AB` | Batas utama |
| `--color-border-active` | `#888E9B` | Batas aktif |

Komponen tertentu memakai warna tambahan secara langsung, misalnya latar alert, warna navigasi, dan elemen statistik di TopBar. Untuk konsistensi, gunakan token yang tersedia terlebih dahulu; pertimbangkan menambahkan token sebelum memperkenalkan warna bersama yang baru.

## Tipografi

Font utama adalah **Sora**, dengan **Geist Mono** tersedia sebagai font monospace. **Encode Sans** digunakan pada beberapa area seperti navigasi dan dialog; angka statistik di TopBar menggunakan **Roboto Condensed**. Pengaturan font dan ukuran berada di `layout.tsx`, `globals.css`, dan `variables.css`.

| Token | Ukuran |
| --- | ---: |
| `--font-size-display-1` | 36px |
| `--font-size-display-2` | 32px |
| `--font-size-display-3` | 28px |
| `--font-size-display-4` | 24px |
| `--font-size-heading` | 20px |
| `--font-size-paragraph` | 16px |
| `--font-size-small` | 12px |

Gunakan skala ini sebagai acuan hierarki teks: display untuk judul besar, heading untuk judul bagian, paragraph untuk isi, dan small untuk label atau informasi pendukung.

## Bentuk dan komponen

### Tombol

`Button.tsx` menyediakan varian solid dan outline untuk warna primary, accent, success, error, warning, serta disabled.

- Tinggi dasar 42px, radius `rounded-lg`, dan batas 3px.
- Tombol solid memakai bayangan bawah berwarna lebih gelap.
- State aktif mengurangi bayangan dan menggeser tombol.
- Sediakan state fokus yang terlihat; varian disabled tidak menerima interaksi.
- Gunakan `fullWidth` bila tombol perlu mengisi lebar kontainer.

### Kartu

`Card.tsx` menyediakan latar putih, padding bawaan 20px, batas opsional, dan bayangan opsional. Radius bawaan menggunakan `rounded-lg`.

### Badge

`Badge.tsx` mendukung enam keluarga warna, varian outline, dan ukuran `sm`, `md`, serta `lg`. Bentuk bawaan pill dengan radius `9999px`.

### Input

`InputField.tsx` mendukung ukuran `sm`, `md`, `lg` serta state default, active, error, dan disabled.

- Label terhubung ke input.
- State error dapat menampilkan pesan dan menandai input sebagai invalid.
- Ikon opsional dapat ditempatkan di kiri atau kanan.
- Lebar bawaan 320px; gunakan `fullWidth` untuk mengisi kontainer.

### Alert dan progress

`Alert.tsx` menyediakan varian success, fail, warning, dan help. `ProgressBar.tsx` mendukung ukuran ketebalan, varian warna, nilai 0–100, detail, dan mode loading.

## Layout aplikasi learner

Layout learner di `layout.tsx` menggunakan sidebar di kiri, TopBar di atas area utama, dan konten dengan padding 40px.

- Sidebar: lebar 306px, latar putih, batas kanan, dan jarak navigasi 14px. Item aktif memakai latar biru dan bayangan. Implementasi ada di `Sidebar.tsx`.
- TopBar: menampilkan EXP, streak, poin, dan profil dalam bar putih dengan batas bawah. Implementasi ada di `TopBar.tsx`.
- Gunakan ikon aset proyek dari direktori `public/icons/` untuk navigasi dan elemen terkait.

## Interaksi dan aksesibilitas

- Pastikan kontrol interaktif memiliki state hover, aktif, fokus, dan disabled yang jelas.
- Gunakan indikator `focus-visible` yang terlihat untuk navigasi keyboard.
- Berikan label yang dapat diakses untuk input, tombol ikon, dan dialog.
- Gunakan atribut ARIA sesuai fungsi komponen, seperti `aria-current`, `aria-invalid`, dan nilai progress.

## Catatan implementasi

Tidak semua gaya saat ini memakai token bersama. Beberapa komponen menggunakan warna hex langsung, dan aturan mode gelap di `globals.css` mengubah warna background/foreground dasar, sementara sebagian besar komponen memakai permukaan putih dan token warna sendiri. Saat mengembangkan tema atau memperbarui palet, periksa penggunaan langsung ini agar tampilan tetap konsisten.