import React from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

interface OptinFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  defaultRevenue?: string;
  businessType?: string;
  mainGoal?: string;
}

const countryCodes = [
  { code: 'FR', dial_code: '+33', flag: '🇫🇷' },
  { code: 'BE', dial_code: '+32', flag: '🇧🇪' },
  { code: 'CH', dial_code: '+41', flag: '🇨🇭' },
  { code: 'LU', dial_code: '+352', flag: '🇱🇺' },
  { code: 'MC', dial_code: '+377', flag: '🇲🇨' },
  { code: 'CA', dial_code: '+1', flag: '🇨🇦' },
];

export default function OptinForm({
  title = "Obtiens ta roadmap personnalisée",
  subtitle = "Laisse-nous tes coordonnées et reçois ta roadmap dans les 24h",
  buttonText = "Je veux ma roadmap gratuite",
  className = "",
  defaultRevenue = "",
  businessType = "",
  mainGoal = "",
}: OptinFormProps) {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = React.useState(countryCodes[0]);
  const [selectedRevenue, setSelectedRevenue] = React.useState(defaultRevenue);

  React.useEffect(() => {
    if (defaultRevenue) {
      setSelectedRevenue(defaultRevenue);
    }
  }, [defaultRevenue]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Formulaire soumis !');
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const phoneInput = formData.get('phone') as string;
    // Supprime les espaces du numéro de téléphone
    const cleanPhone = phoneInput.replace(/\s/g, '');
    
    // Formatage du numéro avec le préfixe complet et des espaces
    const phoneNumber = cleanPhone.startsWith('0') 
      ? `${selectedCountry.dial_code} ${cleanPhone.slice(1).match(/.{1,2}/g)?.join(' ') || ''}`
      : `${selectedCountry.dial_code} ${cleanPhone.match(/.{1,2}/g)?.join(' ') || ''}`;
    
    // Récupération des données du formulaire
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: phoneNumber,
      business: formData.get('business'),
      businessType: businessType,
      mainGoal: mainGoal,
      source: 'roadmap_optin'
    };

    console.log('Données du formulaire:', data);

    try {
      // Envoi à notre API route
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log('Réponse de l\'API:', responseData);

      if (!response.ok) {
        throw new Error(responseData.error || 'Erreur lors de la soumission du formulaire');
      }

      // Redirection vers la page de remerciement
      router.push('/roadmap/merci');
    } catch (error) {
      console.error('Erreur détaillée:', error);
      // Ici vous pourriez ajouter une notification d'erreur pour l'utilisateur
    }
  };

  const handleButtonClick = () => {
    console.log('Bouton cliqué !');
  };

  const formatPhoneNumber = (value: string) => {
    // Supprime tous les caractères non numériques
    const numbers = value.replace(/\D/g, '');
    
    // Si le numéro commence par 0, on le supprime
    const cleanNumbers = numbers.startsWith('0') ? numbers.slice(1) : numbers;
    
    // Format: 6 XX XX XX XX
    const match = cleanNumbers.match(/^(\d{1})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})$/);
    if (match) {
      const [_, first, ...parts] = match;
      const remainingParts = parts.filter(Boolean);
      return first + (remainingParts.length > 0 ? ' ' + remainingParts.join(' ') : '');
    }
    return cleanNumbers;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
  };

  return (
    <div className={`bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-xl border border-primary/40 ${className}`}>
      {title && <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-accent">{title}</h3>}
      {subtitle && <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">{subtitle}</p>}
      
      <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-300">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ton prénom"
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-300">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ton nom"
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ton@email.com"
            className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-300">Téléphone</label>
          <div className="flex gap-2">
            <select
              value={selectedCountry.code}
              onChange={(e) => {
                const country = countryCodes.find(c => c.code === e.target.value);
                if (country) setSelectedCountry(country);
              }}
              className="px-2 py-2 md:px-3 md:py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-inner w-[80px]"
              style={{
                fontSize: '16px',
                lineHeight: '1.5'
              }}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code} className="py-1">
                  {country.flag}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="6 12 34 56 78"
              className="flex-1 px-3 py-2 md:px-4 md:py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
              required
              onChange={handlePhoneChange}
              maxLength={14}
              style={{
                fontSize: '16px',
                lineHeight: '1.5'
              }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Format: XX XX XX XX XX</p>
        </div>
        
        <Button type="submit" fullWidth size="lg" onClick={handleButtonClick} className="text-sm md:text-base py-3">
          {buttonText}
        </Button>
        
        <p className="text-xs text-gray-400 text-center mt-3 md:mt-4">
          En soumettant ce formulaire, tu acceptes de recevoir des emails de BPC Group.
          Nous respectons ta vie privée et ne partagerons jamais tes données.
        </p>
      </form>
    </div>
  );
} 