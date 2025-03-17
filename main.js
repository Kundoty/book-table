import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://wcwjyplphymvczatwfwy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjd2p5cGxwaHltdmN6YXR3Znd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NDY4NzgsImV4cCI6MjA1NzMyMjg3OH0.CWIKecocxFsUBF96gP1cEC9315DatcdKvQUJxf5uObo'
const supabase = createClient(supabaseUrl, supabaseKey)



let { data: Books, error } = await supabase
    .from('Books')
    .select('*')

for (let book of Books) {
    let bookList = document.getElementById('booklist');
    bookList.innerHTML += '<li>' + book.title + '</li>';
}