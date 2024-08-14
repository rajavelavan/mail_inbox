// pages/compose.tsx
import EmailEditor from './EmailEditor';

export default function Compose() {
  const handleSend = async (email: { subject: string; body: string }) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Compose Email</h1>
      <EmailEditor onSend={handleSend} />
    </div>
  );
}
