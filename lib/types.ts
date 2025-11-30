/**
 * TypeScript interfaces for SMSU DECA application
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url?: string | null;
  category: "meeting" | "competition" | "workshop" | "social" | "other";
  registration_url?: string | null;
  is_featured?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CompetitionResult {
  id: string;
  eventName: string;
  participantName: string;
  placement: number;
  category: string;
  date: string | Date;
  award?: string;
  notes?: string;
  createdAt?: string | Date;
}

export interface Officer {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
  email: string;
  linkedIn?: string;
  order?: number;
  isActive?: boolean;
  createdAt?: string | Date;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: "pending" | "read" | "responded";
  createdAt: string | Date;
  respondedAt?: string | Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "officer" | "member" | "guest";
  avatar?: string;
  phoneNumber?: string;
  major?: string;
  graduationYear?: number;
  membershipStatus?: "active" | "inactive" | "alumni";
  createdAt: string | Date;
  updatedAt: string | Date;
}

// Additional utility types
export type EventCategory = Event["category"];
export type UserRole = User["role"];
export type MembershipStatus = NonNullable<User["membershipStatus"]>;
export type ContactStatus = NonNullable<ContactSubmission["status"]>;


