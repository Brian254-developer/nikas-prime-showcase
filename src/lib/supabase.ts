import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number
  property_type: 'mansion' | 'apartment' | 'bungalow' | 'maisonette' | 'land'
  status: 'for_sale' | 'to_let'
  project_status: 'ready' | 'offplan'
  image_url: string
  features: string[]
  created_at: string
  updated_at: string
}

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  message: string
  property_id?: string
  created_at: string
}

// Property functions
export const getProperties = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as Property[]
}

export const getPropertyById = async (id: string) => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Property
}

export const createProperty = async (property: Omit<Property, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('properties')
    .insert([property])
    .select()
    .single()
  
  if (error) throw error
  return data as Property
}

// Contact functions
export const createContact = async (contact: Omit<Contact, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contact])
    .select()
    .single()
  
  if (error) throw error
  return data as Contact
}

export const getContacts = async () => {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as Contact[]
}