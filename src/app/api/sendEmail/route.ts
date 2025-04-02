/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials not configured');
    }

    const { name, email, subject, message } = await request.json();

    // Validate all required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter with more robust configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Only for development!
      }
    });

    // Verify connection configuration
    await transporter.verify();

    // Send email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'mohammadsalim017427@gmail.com',
      replyTo: email,
      subject: `New Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Email sending error:', error);

    let errorMessage = 'Failed to send email';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed - check email credentials';
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid email parameters';
    }

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}