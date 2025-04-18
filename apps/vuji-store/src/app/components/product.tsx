import Image from 'next/image';
import Link from 'next/link';

export interface ProductProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  link: string;
}

const fadeInUpClassName =
  'opacity-0 duration-500 transition-all group-hover:opacity-100 translate-y-1/2 group-hover:translate-y-0';

const ActionButton = ({ icon, delay }: { icon: string; delay: number }) => (
  <div className={`${fadeInUpClassName} ${delay ? `delay-${delay}` : ''}`}>
    <button className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-xl transition-colors duration-300 hover:bg-blue-500 hover:text-white">
      <span className="material-symbols-rounded text-lg">{icon}</span>
    </button>
  </div>
);

const ProductDetails = ({ name, price, link }: { name: string; price: string; link: string }) => (
  <div className="p-4">
    <h2 className="text-sm font-medium">
      <Link href={link} className="text-gray-800 transition-colors hover:text-blue-500">
        {name}
      </Link>
    </h2>
    <p className="mt-2 font-semibold">{price}</p>
  </div>
);

export function Product({ product }: { product: ProductProps }) {
  const { id, name, price, imageUrl, link } = product;

  return (
    <div key={id} className="group relative flex flex-col overflow-hidden rounded-xl border bg-white">
      <Link href={link} className="flex">
        <Image
          src={imageUrl}
          alt="Product Image"
          width={500}
          height={500}
          className="h-80 w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="absolute left-0 right-0 top-60 z-10 flex justify-center gap-2">
        <ActionButton icon="add_shopping_cart" delay={50} />
        <ActionButton icon="favorite" delay={100} />
        <ActionButton icon="compare_arrows" delay={150} />
        <ActionButton icon="visibility" delay={200} />
      </div>

      <ProductDetails name={name} price={price} link={link} />
    </div>
  );
}

export default Product;
