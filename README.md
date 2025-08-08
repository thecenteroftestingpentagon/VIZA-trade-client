# VIZA Trade Client

This is the client-side codebase for VIZA Trade, a modern Next.js web application for global visa, immigration, and attestation services.

## Features
- Next.js 13+ App Router
- Responsive, animated UI with Tailwind CSS
- Visa, immigration, attestation, and service pages
- Dynamic routing for visa types
- Modern branding and design
- Consultation form and contact features
- Ready for deployment on Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation
```bash
pnpm install
```

### Local Development
```bash
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables
Create a `.env.local` file for any API keys or secrets (see `.env.example` if available).

## Deployment (Vercel)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repository.
3. Set up environment variables in Vercel dashboard if needed.
4. Click "Deploy".

Vercel will automatically detect Next.js and deploy your site.

## Project Structure
```
app/                # Next.js app router pages
components/         # Reusable React components
hooks/              # Custom React hooks
lib/                # Utility functions
public/             # Static assets (images, icons, etc.)
styles/             # Global CSS
```

## Scripts
- `pnpm dev` - Start local development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

## Technologies
- Next.js
- React
- Tailwind CSS
- Lucide Icons
- Vercel

## License
MIT

---
For any issues or contributions, please open an issue or pull request on GitHub.
