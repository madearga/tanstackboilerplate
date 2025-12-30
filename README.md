# [React TanStackBoilerplate]

Template starter minimal untuk 🏝️ TanStack Start.

- [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler)
- TanStack [Start](https://tanstack.com/start/latest) + [Router](https://tanstack.com/router/latest) + [Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)
- [Vite 8](https://vite.dev/blog/announcing-vite8-beta) (beta) + [Nitro v3](https://v3.nitro.build/) (nightly)
- [Drizzle ORM](https://orm.drizzle.team/) + PostgreSQL
- [Better Auth](https://www.better-auth.com/)

## Memulai

1. Clone repository ini:

   ```bash
   git clone https://github.com/madearga/tanstackboilerplate.git myapp
   cd myapp
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Buat file `.env` berdasarkan [`.env.example`](./.env.example).

4. Push schema ke database dengan drizzle-kit:

   ```bash
   pnpm db push
   ```

   https://orm.drizzle.team/docs/migrations

5. Jalankan development server:

   ```bash
   pnpm dev
   ```

   Development server sekarang berjalan di [http://localhost:3000](http://localhost:3000).

## Deploy ke Production

Konfigurasi [vite](./vite.config.ts#L12-L13) saat ini dikonfigurasi untuk menggunakan [Nitro v3](https://v3.nitro.build) (nightly) untuk deploy ke Vercel, namun dapat dengan mudah diganti ke provider lain.

Lihat [dokumentasi hosting TanStack Start](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) untuk deploy ke platform lain.

## Daftar Isu yang Perlu Dipantau

- [Router/Start issues](https://github.com/TanStack/router/issues) - TanStack Start masih dalam tahap RC.
- [Devtools releases](https://github.com/TanStack/devtools/releases) - TanStack Devtools masih dalam alpha dan mungkin masih ada breaking changes.
- [Vite 8 beta](https://vite.dev/blog/announcing-vite8-beta) - Kami menggunakan Vite 8 beta yang menggunakan Rolldown.
- [Nitro v3 nightly](https://v3.nitro.build/docs/nightly) - Template ini dikonfigurasi dengan Nitro v3 nightly secara default.

## Fitur Tambahan

#### Scripts

Kami menggunakan **pnpm** secara default, namun Anda dapat memodifikasi script ini di [package.json](./package.json) untuk menggunakan package manager yang Anda inginkan.

- **`auth:generate`** - Regenerate [auth db schema](./src/lib/db/schema/auth.schema.ts) jika Anda telah membuat perubahan pada konfigurasi Better Auth [config](./src/lib/auth/auth.ts).
- **`db`** - Jalankan perintah [drizzle-kit](https://orm.drizzle.team/docs/kit-overview). (contoh: `pnpm db generate`, `pnpm db studio`)
- **`ui`** - CLI shadcn/ui. (contoh: `pnpm ui add button`)
- **`format`**, **`lint`**, **`check-types`** - Menjalankan Prettier, ESLint, dan memeriksa tipe TypeScript secara berturut-turut.
  - **`check`** - Menjalankan ketiga script di atas. (contoh: `pnpm check`)
- **`deps`** - Selectively upgrade dependencies via taze.

#### Utilities

- [`auth/middleware.ts`](./src/lib/auth/middleware.ts) - Contoh middleware untuk memaksa autentikasi pada server functions.
- [`theme-toggle.tsx`](./src/components/theme-toggle.tsx), [`theme-provider.tsx`](./src/components/theme-provider.tsx) - Komponen toggle tema dan provider untuk beralih antara mode terang dan gelap.

## Lisensi

Kode dalam template ini adalah domain publik melalui [Unlicense](./LICENSE). Jangan sungkan untuk menghapus atau mengganti untuk project Anda sendiri.

## Lainnya yang Perlu Dicek

- [@tanstack/create-start](https://github.com/TanStack/create-tsrouter-app/blob/main/cli/ts-create-start/README.md) - Tool CLI resmi dari tim TanStack untuk membuat project Start.
- [awesome-tanstack-start](https://github.com/Balastrong/awesome-tanstack-start) - Daftar kurasi resource awesome untuk TanStack Start.
