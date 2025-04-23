import React from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

interface OptinFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

export default function OptinForm({
  title = "Obtiens ta roadmap personnalisée",
  subtitle = "Laisse-nous tes coordonnées et reçois ta roadmap dans les 24h",
  buttonText = "Je veux ma roadmap gratuite",
  className = "",
}: OptinFormProps) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Here you would typically send the form data to your backend
    // For now, we'll just redirect to the thank you page
    router.push('/roadmap/merci');
  };

  return (
    <div className={`bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-primary/40 ${className}`}>
      {title && <h3 className="text-2xl font-bold mb-4 text-accent">{title}</h3>}
      {subtitle && <p className="text-gray-300 mb-6">{subtitle}</p>}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ton nom"
            className="w-full px-4 py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ton@email.com"
            className="w-full px-4 py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-300">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="06 12 34 56 78"
            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            className="w-full px-4 py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            required
          />
        </div>
        
        <div>
          <label htmlFor="business" className="block text-sm font-medium mb-1 text-gray-300">Ton C.A Annuel</label>
          <select
            id="business"
            name="business"
            className="w-full px-4 py-3 bg-gray-700/80 border border-primary/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            required
          >
            <option value="">Sélectionne ton C.A annuel</option>
            <option value="0">0€ - Je démarre</option>
            <option value="less-than-10k">Moins de 10 000€</option>
            <option value="10k-50k">10 000€ - 50 000€</option>
            <option value="50k-100k">50 000€ - 100 000€</option>
            <option value="100k-500k">100 000€ - 500 000€</option>
            <option value="500k-1m">500 000€ - 1 million €</option>
            <option value="1m-5m">1 million € - 5 millions €</option>
          </select>
        </div>
        
        <Button type="submit" fullWidth size="lg">
          {buttonText}
        </Button>
        
        <p className="text-xs text-gray-400 text-center mt-4">
          En soumettant ce formulaire, tu acceptes de recevoir des emails de BPC Group.
          Nous respectons ta vie privée et ne partagerons jamais tes données.
        </p>
      </form>
    </div>
  );
} 