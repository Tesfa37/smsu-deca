-- SMSU DECA Database Schema - Safe Version
-- Run this if the main schema fails
-- This version drops and recreates tables

-- Step 1: Drop existing tables (if they exist)
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS competition_results CASCADE;
DROP TABLE IF EXISTS officers CASCADE;

-- Step 2: Create Events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(50) NOT NULL,
  registration_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT valid_category CHECK (category IN ('meeting', 'competition', 'workshop', 'social', 'other'))
);

-- Step 3: Create Contact Submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  responded_at TIMESTAMP WITH TIME ZONE,
  CONSTRAINT valid_status CHECK (status IN ('pending', 'read', 'responded'))
);

-- Step 4: Create Competition Results table
CREATE TABLE competition_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name VARCHAR(255) NOT NULL,
  participant_name VARCHAR(255) NOT NULL,
  placement INTEGER NOT NULL,
  category VARCHAR(100) NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  award VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 5: Create Officers table
CREATE TABLE officers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(100) NOT NULL,
  bio TEXT NOT NULL,
  image_url VARCHAR(500),
  email VARCHAR(255) NOT NULL,
  linkedin VARCHAR(500),
  order_position INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 6: Create indexes
CREATE INDEX idx_events_date ON events(date DESC);
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_events_featured ON events(is_featured) WHERE is_featured = true;
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_officers_active ON officers(is_active, order_position) WHERE is_active = true;

-- Step 7: Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE competition_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE officers ENABLE ROW LEVEL SECURITY;

-- Step 8: Create RLS Policies
CREATE POLICY "Events are publicly readable"
  ON events FOR SELECT
  USING (true);

CREATE POLICY "Officers are publicly readable"
  ON officers FOR SELECT
  USING (is_active = true);

CREATE POLICY "Competition results are publicly readable"
  ON competition_results FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Step 9: Insert sample events
INSERT INTO events (title, description, date, location, category, is_featured) VALUES
('DECA District Competition', 'Compete against regional chapters in various business categories. Prepare your pitch and showcase your skills!', '2025-02-15 18:00:00+00', 'Minneapolis Convention Center', 'competition', true),
('Professional Development Workshop', 'Learn essential business skills from industry professionals. Topics include networking, resume building, and interview techniques.', '2025-01-20 18:00:00+00', 'SMSU Business Building, Room 204', 'workshop', true),
('Networking Mixer with Alumni', 'Connect with successful DECA alumni working in various industries. Great opportunity for mentorship and career advice.', '2025-01-10 18:00:00+00', 'SMSU Student Center', 'social', true),
('Monthly Chapter Meeting', 'Join us for our regular chapter meeting. We will discuss upcoming events, competition preparation, and chapter initiatives.', '2025-01-07 18:00:00+00', 'SMSU Business Building, Room 101', 'meeting', false),
('Competition Prep Session', 'Practice your role-plays and get feedback from experienced members and advisors.', '2025-01-15 18:00:00+00', 'SMSU Business Building, Room 204', 'workshop', false);

