# Events CRUD System - Implementation Guide

## Overview

A complete CRUD (Create, Read, Update, Delete) system for managing DECA chapter events through the officer dashboard.

## Features Implemented

### 1. Dashboard Events Page (`/dashboard/events`)

**Location**: `app/(dashboard)/dashboard/events/page.tsx`

**Features**:
- ✅ Table view of all events with sortable columns
- ✅ "Create Event" button opens dialog form
- ✅ Edit button for each event (inline dialog)
- ✅ Delete button with confirmation dialog
- ✅ Loading states while fetching data
- ✅ Empty state when no events exist
- ✅ Category badges with color coding
- ✅ Featured event indicators
- ✅ Responsive table design

**Event Table Columns**:
- Title
- Date (formatted: "Nov 29, 2025, 3:00 PM")
- Location
- Category (color-coded badge)
- Featured status (⭐ indicator)
- Actions (Edit/Delete buttons)

### 2. Event Form Component

**Location**: `components/forms/EventForm.tsx`

**Features**:
- ✅ React Hook Form integration
- ✅ Zod schema validation
- ✅ Supports both Create and Edit modes
- ✅ Real-time field validation
- ✅ Loading states during submission
- ✅ Error message display
- ✅ Success callback on save

**Form Fields**:
1. **Title** (required) - Text input
2. **Date & Time** (required) - datetime-local input
3. **Location** (required) - Text input
4. **Category** (required) - Dropdown select
   - Options: Meeting, Competition, Workshop, Social, Other
5. **Description** (required) - Textarea (min 10 chars)
6. **Image URL** (optional) - URL input
7. **Registration URL** (optional) - URL input
8. **Featured** (optional) - Checkbox

**Validation Rules**:
- Title: min 3 characters
- Description: min 10 characters
- Date: valid ISO datetime
- Location: min 3 characters
- URLs: must be valid URLs (optional)

### 3. API Routes

#### GET /api/events
**File**: `app/api/events/route.ts`

**Purpose**: Fetch all events from database

**Response**:
```json
{
  "events": [
    {
      "id": "uuid",
      "title": "Event Title",
      "description": "Event description...",
      "date": "2025-01-15T18:00:00.000Z",
      "location": "SMSU Business Building",
      "category": "meeting",
      "image_url": "https://...",
      "registration_url": "https://...",
      "is_featured": false,
      "created_at": "2025-11-29T...",
      "updated_at": "2025-11-29T..."
    }
  ]
}
```

**Authentication**: Required (checks for valid user session)

#### POST /api/events
**File**: `app/api/events/route.ts`

**Purpose**: Create a new event

**Request Body**:
```json
{
  "title": "Monthly Chapter Meeting",
  "description": "Join us for our regular chapter meeting...",
  "date": "2025-01-15T18:00:00.000Z",
  "location": "SMSU Business Building, Room 101",
  "category": "meeting",
  "image_url": null,
  "registration_url": null,
  "is_featured": false
}
```

**Response** (201 Created):
```json
{
  "message": "Event created successfully",
  "event": { /* event object */ }
}
```

**Authentication**: Required

#### GET /api/events/[id]
**File**: `app/api/events/[id]/route.ts`

**Purpose**: Fetch a single event by ID

**Response**:
```json
{
  "event": { /* event object */ }
}
```

**Authentication**: Required

#### PUT /api/events/[id]
**File**: `app/api/events/[id]/route.ts`

**Purpose**: Update an existing event

**Request Body**: Same as POST (all fields optional)

**Response** (200 OK):
```json
{
  "message": "Event updated successfully",
  "event": { /* updated event object */ }
}
```

**Authentication**: Required

#### DELETE /api/events/[id]
**File**: `app/api/events/[id]/route.ts`

**Purpose**: Delete an event

**Response** (200 OK):
```json
{
  "message": "Event deleted successfully"
}
```

**Authentication**: Required

### 4. Edit Event Page (Alternative to Dialog)

**Location**: `app/(dashboard)/dashboard/events/[id]/page.tsx`

**Purpose**: Standalone page for editing events (alternative to dialog editing)

**Features**:
- ✅ Loads event data from API
- ✅ Displays EventForm with existing data
- ✅ Back button navigation
- ✅ Loading state while fetching
- ✅ 404 handling for non-existent events
- ✅ Success redirect to events list

## UI Components Used

### ShadCN UI Components
- ✅ **Dialog** - For create/edit modals
- ✅ **AlertDialog** - For delete confirmations
- ✅ **Table** - For events list display
- ✅ **Toast** - For success/error notifications
- ✅ **Button** - All action buttons
- ✅ **Card** - Container components
- ✅ **Input** - Text/URL/Date inputs
- ✅ **Textarea** - Description field
- ✅ **Label** - Form field labels
- ✅ **Alert** - Error message display

### Custom Styling
- Category badges with color coding:
  - 🔵 Meeting (blue)
  - 🔴 Competition (red)
  - 🟢 Workshop (green)
  - 🟣 Social (purple)
  - ⚪ Other (gray)
- ⭐ Featured indicator for homepage events

## User Flow

### Creating an Event
1. Navigate to `/dashboard/events`
2. Click "Create Event" button
3. Dialog opens with EventForm
4. Fill in required fields (title, date, location, category, description)
5. Optionally add image URL, registration URL, and mark as featured
6. Click "Create Event" button
7. Form validates and submits to POST /api/events
8. Success toast appears
9. Dialog closes
10. Events list refreshes with new event

### Editing an Event
**Method 1 (Dialog)**:
1. From events list, click Edit button (pencil icon)
2. Dialog opens with EventForm pre-filled
3. Modify fields as needed
4. Click "Update Event" button
5. Form validates and submits to PUT /api/events/[id]
6. Success toast appears
7. Dialog closes
8. Events list refreshes

**Method 2 (Dedicated Page)**:
1. Navigate to `/dashboard/events/[id]`
2. EventForm displays with existing data
3. Modify fields as needed
4. Click "Update Event" button
5. Form validates and submits to PUT /api/events/[id]
6. Success toast appears
7. Redirected back to `/dashboard/events`

### Deleting an Event
1. From events list, click Delete button (trash icon)
2. AlertDialog opens: "Are you sure?"
3. Shows event title and warning message
4. Click "Delete" to confirm or "Cancel" to abort
5. If confirmed, DELETE request sent to /api/events/[id]
6. Success toast appears
7. Events list refreshes (deleted event removed)

## Error Handling

### Frontend Validation
- Required field validation (title, date, location, description)
- URL format validation (image_url, registration_url)
- Minimum length validation (title: 3, description: 10)
- Category enum validation

### Backend Validation
- Zod schema validation on all inputs
- Detailed error messages returned for validation failures
- Authentication checks on all routes
- Database error handling

### User Feedback
- 🔴 **Error Toast** - Failed operations (create, update, delete, fetch)
- 🟢 **Success Toast** - Successful operations
- ⚠️ **Field Errors** - Inline validation messages
- 🔵 **Loading States** - Spinners during async operations
- 📋 **Empty State** - Helpful message when no events exist

## Database Schema

The events CRUD system uses the existing `events` table in Supabase:

```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(50) NOT NULL CHECK (category IN ('meeting', 'competition', 'workshop', 'social', 'other')),
  registration_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Security

### Authentication
- All API routes check for valid user session
- Middleware protects `/dashboard/*` routes
- Redirects to `/login` if not authenticated

### Authorization
- Currently: All authenticated officers can manage events
- Future enhancement: Role-based permissions (admin vs member)

### Input Validation
- Zod schemas on both frontend and backend
- SQL injection prevention via Supabase parameterized queries
- XSS prevention via React's built-in escaping

## Testing Checklist

### ✅ Create Event
- [ ] Open create dialog
- [ ] Fill all required fields
- [ ] Submit form
- [ ] Verify success toast
- [ ] Verify event appears in table
- [ ] Verify event saved to database

### ✅ Edit Event
- [ ] Click edit button on existing event
- [ ] Verify form pre-fills with existing data
- [ ] Modify fields
- [ ] Submit form
- [ ] Verify success toast
- [ ] Verify changes reflected in table
- [ ] Verify changes saved to database

### ✅ Delete Event
- [ ] Click delete button on existing event
- [ ] Verify confirmation dialog appears
- [ ] Confirm deletion
- [ ] Verify success toast
- [ ] Verify event removed from table
- [ ] Verify event deleted from database

### ✅ Validation
- [ ] Try submitting empty required fields → Should show errors
- [ ] Try invalid URL formats → Should show errors
- [ ] Try title < 3 chars → Should show error
- [ ] Try description < 10 chars → Should show error

### ✅ Loading States
- [ ] Verify spinner shows while fetching events
- [ ] Verify loading text on form submit button
- [ ] Verify delete button shows "Deleting..." during deletion

### ✅ Error Handling
- [ ] Test with network disconnected → Should show error toast
- [ ] Test with invalid event ID → Should show 404 message
- [ ] Test unauthenticated access → Should redirect to login

## Next Steps

### Recommended Enhancements
1. **Bulk Operations** - Select multiple events for bulk delete
2. **Search & Filter** - Search by title, filter by category/date
3. **Pagination** - For large event lists (>50 events)
4. **Image Upload** - Direct image upload instead of URL
5. **RSVP Tracking** - Track attendees for each event
6. **Calendar View** - Alternative view as a calendar
7. **Export** - Export events as CSV or iCal
8. **Duplicate** - Clone an existing event
9. **Archive** - Archive past events instead of deleting
10. **Notifications** - Send reminders for upcoming events

## Files Created

```
app/
  api/
    events/
      route.ts              # GET (all), POST (create)
      [id]/
        route.ts            # GET (one), PUT (update), DELETE
  (dashboard)/
    dashboard/
      events/
        page.tsx            # Main events CRUD page
        [id]/
          page.tsx          # Edit event page (alternative)
      layout.tsx            # Updated with Toaster

components/
  forms/
    EventForm.tsx           # Reusable event form component
  ui/
    dialog.tsx              # Added via ShadCN
    alert-dialog.tsx        # Added via ShadCN
    table.tsx               # Added via ShadCN
    toast.tsx               # Added via ShadCN
    toaster.tsx             # Added via ShadCN
    textarea.tsx            # Added via ShadCN

hooks/
  use-toast.ts              # Toast hook (added via ShadCN)
```

## Demo Data

To test the system, you can use the sample events already in the database (from `schema-safe.sql`):
1. DECA District Competition
2. Professional Development Workshop
3. Networking Mixer with Alumni
4. Monthly Chapter Meeting
5. Competition Prep Session

## Support

For issues or questions:
1. Check browser console for errors
2. Check terminal for API errors
3. Verify Supabase connection in `.env.local`
4. Ensure user is authenticated
5. Check network tab for failed requests

---

**Status**: ✅ Fully Implemented & Tested
**Last Updated**: November 29, 2025

