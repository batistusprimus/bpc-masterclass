import Link from 'next/link';

interface Palier {
  title: string;
  videoUrl: string;
  description?: string;
  tags: string[];
  callToAction?: {
    explore: {
      text: string;
      href: string;
    };
    newsletter: {
      text: string;
      href: string;
    };
  };
}

export default function Palier({ palier }: { palier: Palier }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{palier.title}</h3>
      <div className="aspect-video relative">
        <iframe
          src={palier.videoUrl}
          className="w-full h-full rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {palier.description && (
        <p className="text-gray-600">{palier.description}</p>
      )}
      {palier.callToAction && (
        <div className="flex flex-col gap-2 mt-2">
          <Link
            href={palier.callToAction.explore.href}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {palier.callToAction.explore.text} →
          </Link>
          <Link
            href={palier.callToAction.newsletter.href}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {palier.callToAction.newsletter.text} →
          </Link>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {palier.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
} 