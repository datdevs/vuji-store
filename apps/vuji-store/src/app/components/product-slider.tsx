import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product, { ProductProps } from './product';

import 'swiper/css';

export interface ProductSliderProps {
  products: ProductProps[];
  title: string;
}

const navigationClassName =
  'flex items-center justify-center rounded-full p-1 transition-colors duration-300 hover:text-blue-500 hover:bg-blue-50';

export function ProductSlider({ products, title }: ProductSliderProps) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-normal md:text-5xl">{title}</h2>

        <div className="flex items-center gap-2">
          <button ref={navigationPrevRef} className={navigationClassName} aria-label="Previous slide">
            <span className="material-symbols-rounded">chevron_left</span>
          </button>

          <button ref={navigationNextRef} className={navigationClassName} aria-label="Next slide">
            <span className="material-symbols-rounded"> chevron_right</span>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          enabled: true,
        }}
        spaceBetween={32}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onInit={(swiper) => {
          if (typeof swiper.params.navigation === 'object') {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }

          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
