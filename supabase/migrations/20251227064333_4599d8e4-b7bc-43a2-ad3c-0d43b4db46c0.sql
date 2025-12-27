-- Drop the dangerous SELECT policy that exposes all subscriber emails
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.newsletter_subscribers;

-- Add email length constraint at database level
ALTER TABLE public.newsletter_subscribers 
ADD CONSTRAINT email_length_check CHECK (char_length(email) <= 255);