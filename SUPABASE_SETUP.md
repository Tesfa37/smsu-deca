# Supabase Database Setup Guide

## Quick Setup

### 1. Run the SQL Schema

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project: `uiuhezzcxvdbgpflizve`
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**
5. Copy the contents of [`lib/supabase/schema.sql`](lib/supabase/schema.sql)
6. Paste into the SQL editor
7. Click **Run** button
8. Wait for success message

### 2. Verify Tables Created

After running the schema, verify these tables exist:
- ✅ `events`
- ✅ `contact_submissions`
- ✅ `competition_results`
- ✅ `officers`

### 3. Check Sample Data

The schema includes sample events. Verify by running:
```sql
SELECT * FROM events ORDER BY date DESC;
```

You should see 5 sample events.

---

## Database Schema

### Events Table
```sql
- id (UUID, Primary Key)
- title (VARCHAR 255)
- description (TEXT)
- date (TIMESTAMP WITH TIME ZONE)
- location (VARCHAR 255)
- image_url (VARCHAR 500, nullable)
- category (VARCHAR 50: meeting, competition, workshop, social, other)
- registration_url (VARCHAR 500, nullable)
- is_featured (BOOLEAN, default: false)
- created_at, updated_at (TIMESTAMP WITH TIME ZONE)
```

### Contact Submissions Table
```sql
- id (UUID, Primary Key)
- name (VARCHAR 100)
- email (VARCHAR 255)
- subject (VARCHAR 200)
- message (TEXT)
- status (VARCHAR 50: pending, read, responded)
- created_at (TIMESTAMP WITH TIME ZONE)
- responded_at (TIMESTAMP WITH TIME ZONE, nullable)
```

### Competition Results Table
```sql
- id (UUID, Primary Key)
- event_name (VARCHAR 255)
- participant_name (VARCHAR 255)
- placement (INTEGER)
- category (VARCHAR 100)
- date (TIMESTAMP WITH TIME ZONE)
- award (VARCHAR 255, nullable)
- notes (TEXT, nullable)
- created_at (TIMESTAMP WITH TIME ZONE)
```

### Officers Table
```sql
- id (UUID, Primary Key)
- name (VARCHAR 255)
- position (VARCHAR 100)
- bio (TEXT)
- image_url (VARCHAR 500, nullable)
- email (VARCHAR 255)
- linkedin (VARCHAR 500, nullable)
- order_position (INTEGER, default: 0)
- is_active (BOOLEAN, default: true)
- created_at (TIMESTAMP WITH TIME ZONE)
```

---

## Row Level Security (RLS)

The schema enables RLS with these policies:

### Public Read Access:
- ✅ Events - Anyone can view all events
- ✅ Officers - Anyone can view active officers
- ✅ Competition Results - Anyone can view all results

### Public Write Access:
- ✅ Contact Submissions - Anyone can insert (but not read)

### Admin Access Required:
- ❌ Contact Submissions (read, update, delete)
- ❌ Events (insert, update, delete)
- ❌ Officers (insert, update, delete)
- ❌ Competition Results (insert, update, delete)

**Note:** You'll need to add admin policies or use the Supabase dashboard for content management.

---

## Indexes Created

Performance indexes for common queries:
- `idx_events_date` - Sort events by date
- `idx_events_category` - Filter by category
- `idx_events_featured` - Get featured events
- `idx_contact_status` - Filter contact submissions
- `idx_contact_created` - Sort by submission date
- `idx_officers_active` - Get active officers in order

---

## Adding More Events

### Via Supabase Dashboard:
1. Go to **Table Editor**
2. Select **events** table
3. Click **Insert row**
4. Fill in the fields
5. Click **Save**

### Via SQL:
```sql
INSERT INTO events (title, description, date, location, category, is_featured)
VALUES (
  'Your Event Title',
  'Event description here',
  '2025-03-15 18:00:00+00',
  'Event location',
  'meeting',
  true
);
```

---

## Testing the Integration

### 1. Verify Events Page
Visit: http://localhost:3001/events

You should see:
- Upcoming events from Supabase
- Past events section
- If no events, friendly "no events" message

### 2. Test Contact API
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

Expected: 201 Created response

### 3. Test Revalidate API
```bash
curl http://localhost:3001/api/revalidate
```

Expected: 200 OK with service status

---

## Troubleshooting

### Events Not Showing?
1. Check Supabase SQL Editor - verify data exists
2. Check browser console for errors
3. Verify RLS policies are correct
4. Check `.env.local` has correct credentials

### Contact Form Not Working?
1. Check `contact_submissions` table exists
2. Verify RLS policy allows inserts
3. Check API logs in terminal
4. Test with curl command above

### API Errors?
1. Check terminal for error logs
2. Verify environment variables are loaded
3. Restart dev server
4. Check Supabase project status

---

## Next Steps

1. ✅ Run the SQL schema in Supabase
2. ✅ Verify tables and sample data
3. ✅ Test the events page
4. ✅ Test the contact API
5. 📝 Add more events via dashboard
6. 📝 Set up Storyblok webhooks (optional)
7. 📝 Configure admin access for content management

---

**Setup time:** ~5-10 minutes  
**Difficulty:** Easy  
**Prerequisites:** Supabase project created

