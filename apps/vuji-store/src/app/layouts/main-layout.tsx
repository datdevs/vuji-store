import Footer from './footer';
import Header from './header';
import TopBar from './top-bar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
