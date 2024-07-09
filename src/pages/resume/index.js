export async function GET() {
  // The file path is relative to the public directory in Vercel
  const resumePath = '/resume/resume.pdf';

  try {
    // Instead of reading the file, we'll redirect to its public URL
    return new Response('', {
      status: 302,
      headers: {
        'Location': resumePath,
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response('File not found', { status: 404 });
  }
}