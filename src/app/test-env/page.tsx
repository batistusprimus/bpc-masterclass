'use client';

export default function TestEnv() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test des variables d'environnement</h1>
      <pre className="bg-gray-800 p-4 rounded">
        {JSON.stringify({
          webhookUrl: process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL
        }, null, 2)}
      </pre>
    </div>
  );
} 