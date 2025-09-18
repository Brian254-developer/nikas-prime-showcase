# Supabase Setup Instructions

## Why Supabase Instead of MongoDB?

Lovable doesn't support MongoDB directly, but it has excellent native integration with Supabase (PostgreSQL). Supabase offers several advantages:

- Real-time data synchronization
- Built-in authentication
- Automatic REST/GraphQL APIs
- Better for complex queries than MongoDB
- Edge functions support
- Row Level Security (RLS)

## Quick Setup (5 minutes)

### 1. Create Supabase Project
- Visit [supabase.com](https://supabase.com) and create account
- Create new project (free tier available)
- Wait for project to be ready

### 2. Get Your Credentials
- Go to Settings → API in your Supabase dashboard
- Copy:
  - Project URL (looks like: `https://abc123.supabase.co`)
  - Anon public key (starts with `eyJ...`)

### 3. Update Configuration
Edit `src/lib/supabase.ts`:
```typescript
const supabaseUrl = 'YOUR_PROJECT_URL_HERE'
const supabaseKey = 'YOUR_ANON_KEY_HERE'
```

### 4. Create Tables
- Go to SQL Editor in Supabase dashboard
- Copy contents from `supabase-setup.sql` file
- Run the script to create tables and sample data

### 5. Test the Integration
- Run `npm run dev`
- Visit Properties page (should load from database)
- Try contact form (should save to database)

## What's Already Integrated

✅ Property listings with database storage
✅ Contact form with Supabase backend  
✅ Proper TypeScript interfaces
✅ Error handling and loading states
✅ Row Level Security policies
✅ Sample data included

The website is now enterprise-ready with proper database integration!