import Image from 'next/image';
import Link from 'next/link';

export interface CategoryProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface CategoryComponentProps {
  categories: CategoryProps[];
  type?: 1 | 2;
}

export function Category({ categories, type = 1 }: CategoryComponentProps) {
  return (
    <>
      {type === 1 ? (
        <>
          <h2 className="mb-10 text-2xl font-normal md:text-5xl">Shop by category</h2>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-xl">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute left-5 top-5">
                  <h2 className="text-lg">{category.name}</h2>
                </div>

                <span className="absolute bottom-5 left-5 flex h-10 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition-all duration-300">
                  <span>Shop now</span>
                  <span className="material-symbols-rounded text-[0px] transition-all duration-300 group-hover:text-lg">
                    arrow_outward
                  </span>
                </span>

                <Link href={category.link} className="absolute inset-0 opacity-0"></Link>
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-xl">
              <Image
                src={category.imageUrl}
                alt={category.name}
                width={500}
                height={500}
                className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute bottom-10 w-full text-center">
                <h2 className="mb-8 text-2xl font-medium">{category.name}</h2>

                <span className="inline-flex h-10 items-center gap-2 rounded-full bg-blue-500 px-8 py-2 text-white">
                  <span>Shop now</span>
                </span>
              </div>

              <Link href={category.link} className="absolute inset-0 opacity-0"></Link>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Category;
