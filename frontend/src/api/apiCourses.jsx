export async function getCourses() {
  try {
    const response = await fetch('/getCourses', { //await the response from flask server
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Fetched courses:', data); //console log to debug
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return null;
  }
}
