import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wcwjyplphymvczatwfwy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjd2p5cGxwaHltdmN6YXR3Znd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NDY4NzgsImV4cCI6MjA1NzMyMjg3OH0.CWIKecocxFsUBF96gP1cEC9315DatcdKvQUJxf5uObo'
const supabase = createClient(supabaseUrl, supabaseKey)


async function loadBooks() {
    let { data: Books, error } = await supabase
    .from('Books')
    .select('*');

    if (error) {
    console.error('Error fetching books:', error);
    return;
    }

    const bookList = document.getElementById('booklist');
    for (let book of Books) {
    bookList.innerHTML += `<li>${book.title}</li>`;
    }
}

loadBooks();