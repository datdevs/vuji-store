import Image from 'next/image';
import Carousel from '../app/components/carousel';
import Category from '../app/components/category';
import ProductSlider from '../app/components/product-slider';
import { HOME_SLIDER, PRODUCT_CATEGORIES, PRODUCT_CATEGORIES_2, PRODUCTS } from '../app/data';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <section>
        <Carousel slides={HOME_SLIDER} />
      </section>

      <section className="container mx-auto px-4">
        <div className="mt-10">
          <Category categories={PRODUCT_CATEGORIES} />
        </div>

        <div className="relative mt-8">
          <Image
            src="/assets/images/banner-collection-3.jpg"
            alt="banner"
            width={500}
            height={500}
            className="h-96 w-full rounded-2xl object-cover md:h-auto"
            loading="lazy"
          />

          <div className="text-shadow-lg absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-start px-6 text-white">
            <span>SALE UP TO 30% OFF TODAY</span>
            <h2 className="mb-5 mt-2 text-2xl font-medium md:text-5xl">Best Deals Discounts</h2>
            <p className="mb-10 text-lg font-normal">Fast wireless charging on-the-go.</p>
            <button className="rounded-full bg-blue-500 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-600">
              Shop Collection
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Category categories={PRODUCT_CATEGORIES_2} type={2} />
        </div>

        <div className="mt-8">
          <ProductSlider products={PRODUCTS} title="Trending Product" />
        </div>
      </section>
    </>
  );
}
