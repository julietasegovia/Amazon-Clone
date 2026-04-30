import { createClient } from '@supabase/supabase-js';

const supabaseURL = 'https://cfnbbqqwsyqxqqgrbodv.supabase.co';
const supabaseKey = 'sb_publishable_P7dNEMeeRKUaJV7bxr4LvA_ymXCtkYI'

export const supabase = createClient(supabaseURL, supabaseKey);