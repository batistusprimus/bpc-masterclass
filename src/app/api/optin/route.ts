import { NextResponse } from 'next/server';

const formatPhoneNumberForGHL = (phone: string) => {
  // Supprime tous les caractères non numériques (espaces, +, etc.)
  const cleanNumber = phone.replace(/\D/g, '');
  
  // Si le numéro commence par un 0, on le supprime
  if (cleanNumber.startsWith('0')) {
    return cleanNumber.slice(1);
  }
  
  return cleanNumber;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Formatage du numéro de téléphone
    const formattedPhone = formatPhoneNumberForGHL(data.phone);
    
    // Envoi à GHL
    const response = await fetch(process.env.GHL_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: formattedPhone,
          tags: ['roadmap_request'],
          customField: {
            business_revenue: data.business,
            business_type: data.businessType,
            main_goal: data.mainGoal
          }
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Réponse GHL:', errorData);
      throw new Error(`Erreur GHL: ${response.status} - ${errorData}`);
    }

    const responseData = await response.json();
    console.log('Réponse GHL réussie:', responseData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la soumission du formulaire' },
      { status: 500 }
    );
  }
} 