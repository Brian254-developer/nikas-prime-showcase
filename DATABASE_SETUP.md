# Nikas Realty - Database Setup Guide

## Supabase Integration

This project uses Supabase as the database backend instead of MongoDB, as Lovable has native Supabase integration.

### Setup Instructions

1. **Create a Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Create a new account or sign in
   - Create a new project

2. **Get Your Project Credentials**
   - From your Supabase dashboard, go to Settings > API
   - Copy your Project URL and anon public key

3. **Update Configuration**
   - Open `src/lib/supabase.ts`
   - Replace `'https://your-project.supabase.co'` with your actual Project URL
   - Replace `'your-anon-key'` with your actual anon public key

4. **Create Database Tables**
   - Go to your Supabase dashboard > SQL Editor
   - Copy and paste the contents of `supabase-setup.sql`
   - Run the SQL script to create tables and sample data

5. **Test the Integration**
   - Start your development server: `npm run dev`
   - Navigate to the Properties page to see data from Supabase
   - Try submitting the contact form to test database writes

### Database Schema

**Properties Table:**
- Stores all property listings
- Includes metadata like price, location, bedrooms, bathrooms
- Has status fields for sale/rent and ready/offplan

**Contacts Table:**
- Stores contact form submissions
- Links to properties when applicable
- Includes customer inquiry details

### Features

- ✅ Property listings from database
- ✅ Contact form with database storage
- ✅ Real-time data synchronization
- ✅ Row Level Security (RLS) enabled
- ✅ Public read access for properties
- ✅ Secure contact form submissions

### Benefits of Supabase vs MongoDB

- **Native Integration**: Works seamlessly with Lovable
- **Real-time Features**: Built-in real-time subscriptions
- **Authentication**: Built-in auth system
- **Edge Functions**: Serverless functions support
- **PostgreSQL**: More powerful than MongoDB for complex queries
- **Automatic APIs**: REST and GraphQL APIs generated automatically

### Next Steps

1. Set up your Supabase project
2. Configure the credentials
3. Run the SQL setup script
4. Test the application

For more advanced features, you can explore Supabase's authentication, storage, and edge functions directly from their dashboard.