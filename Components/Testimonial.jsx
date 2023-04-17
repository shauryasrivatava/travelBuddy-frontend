import React, { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper"
import SwiperCore, { Autoplay } from 'swiper';
import { testimonialData } from './_data/TestimonialData'

export default function Testimonial() {

    const styles = {
        wrapper: 'container-fluid',
        container: 'container py-5',
        headerContainer: 'text-center mb-3 pb-3',
        headerTitle: 'text-primaryColor uppercase tracking-[5px]',
        carouselContainer: 'testimonial-carousel testimonialCaoursel'
    }

    SwiperCore.use([Autoplay])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h6 className={styles.headerTitle}>Testimonial</h6>
                    <h1>What Our Clients Say</h1>
                </div>
                <Swiper
                    centeredSlides={true}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView="auto"
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 4,
                    }}
                    autoplay={{
                        delay: 8000
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className={styles.carouselContainer}
                >
                    {
                        testimonialData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Slide item={item}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

function Slide({ item }) {
    const styles = {
        cardContainer: 'text-center pb-4',
        image: 'img-fluid mx-auto w-full h-full',
        contentContainer: 'testimonial-text bg-[#fff] p-4 mt-[-3rem]',
    }

    return (
        <div className={styles.cardContainer}>
            <Image className={styles.image} width={100} height={100} src={item.imageSrc} />
            <div className={styles.contentContainer}>
                <p className="mt-5 mb-[1rem] text-[#656565]">{item.brief}</p>
                <h5 className="text-truncate">{item.name}</h5>
                <span className="text-[#656565]">{item.profession}</span>
            </div>
        </div>
    )
}