import Link from 'next/link';
import Navigation from './navigation';

const IconLink = ({ href, icon, badge }: { href: string; icon: string; badge?: string }) => (
  <Link href={href} className="relative flex text-gray-600 hover:text-blue-600">
    <span className="material-symbols-rounded">{icon}</span>
    {badge && (
      <span className="absolute -right-2 -top-1 rounded-full bg-blue-100 px-1.5 text-xs text-blue-600">{badge}</span>
    )}
  </Link>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-6 shadow-sm lg:px-16">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex justify-start lg:order-2 lg:justify-center">
          <Navigation />
        </div>

        <div className="flex justify-center lg:order-1 lg:justify-start">
          <Link href="/" className="text-xl font-bold text-blue-500">
            Vuji Store
          </Link>
        </div>

        <div className="flex justify-end space-x-3 lg:order-3">
          <IconLink href="#" icon="person" />
          <IconLink href="#" icon="favorite" badge="2" />
          <IconLink href="#" icon="shopping_bag" badge="3" />
        </div>
      </div>
    </header>
  );
}

export default Header;
