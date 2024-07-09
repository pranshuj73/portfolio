import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export async function GET() {
  // Get the directory of the current module
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  
  // Construct the path to your resume file
  const resumePath = path.join(__dirname, './resume.pdf');
  
  try {
    const file = await fs.readFile(resumePath);
    
    return new Response(file, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"'
      }
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return new Response('File not found', { status: 404 });
  }
}