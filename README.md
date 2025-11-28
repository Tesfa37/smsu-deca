# SMSU DECA Website

A production-ready Next.js 15 application for Southwest Minnesota State University's DECA chapter.

## Features

✅ **Next.js 15** with App Router  
✅ **TypeScript** with strict mode enabled  
✅ **Tailwind CSS** with SMSU brand colors  
✅ **ShadCN/UI** component library  
✅ **Supabase** integration ready  
✅ **Framer Motion** for animations  
✅ **Responsive Design** (mobile-first)  
✅ **WCAG 2.1 AA** accessibility compliant  
✅ **SEO optimized** with metadata

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (optional, for backend features)

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Copy `.env.example` to `.env.local` and update with your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your Supabase credentials.

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   └── ui/                # ShadCN UI components
├── lib/
│   ├── types.ts           # TypeScript interfaces
│   ├── utils.ts           # Utility functions
│   └── supabase/
│       └── client.ts      # Supabase client setup
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## Brand Colors

### Primary Colors
- **Brown:** `#5E5240` - Primary brand color for headings and key elements
- **Gold:** `#A68849` - Accent color for CTAs and highlights

### Secondary Colors (WCAG AA Compliant)
- **Error:** `#DC2626` (Red 600)
- **Success:** `#16A34A` (Green 600)
- **Warning:** `#EA580C` (Orange 600)
- **Info:** `#0284C7` (Sky 600)

All colors are defined as CSS variables in `app/globals.css` for easy customization.

## Typography

The design system includes a full typography scale:

- **Headings:** h1–h6 with responsive sizes
- **Body text:** Large, regular, and small variants
- **Caption:** For metadata and fine print

All typography automatically adjusts for mobile devices.

## TypeScript Types

Core interfaces are defined in `lib/types.ts`:

- `Event` - Event listings
- `CompetitionResult` - Competition outcomes
- `Officer` - Team member profiles
- `ContactSubmission` - Contact form data
- `User` - User accounts

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Accessibility

This project follows WCAG 2.1 AA standards:

- ✅ Semantic HTML throughout
- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ 4.5:1 color contrast ratios
- ✅ Focus indicators on all interactive elements
- ✅ Screen reader friendly

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Any Node.js hosting platform

## Environment Variables

Required variables for full functionality:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

See `.env.example` for all available options.

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Copyright © 2024 SMSU DECA. All rights reserved.

## Support

For questions or issues, contact the SMSU DECA tech team or open an issue in the repository.

---

Built with ❤️ by SMSU DECA

