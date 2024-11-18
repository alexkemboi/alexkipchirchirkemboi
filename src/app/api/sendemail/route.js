import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {      
       
        const smsResponse = await fetch('http://localhost:3000/api/sendsms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(smsData)
        });
    
        // Return success response
       return NextResponse.json({ message: 'CONGRATULATIONSPayments submitted successfully' });
      } catch (error) {
        console.error('Error:', error);
       return NextResponse.json({ message: 'Failed to submit claim' });
      }
  }