import React from 'react'
import Link from 'next/link'

export default function Footer() {

    const styles = {
        footerContentWrapper: 'container-fluid bg-darkColor text-white-50 py-5 px-sm-3 px-lg-5 mt-[90px]',
        contentRow: 'row pt-5',
        contentColumn: 'col-lg-3 col-md-6 mb-5 footer',
        navBarBrand: 'navbar-brand',
        rightIconContainer1: 'text-white-50 mb-2 decoration-none flex place-items-center ml-[-10px]',
        rightIconContainer2: 'text-white-50 decoration-none flex place-items-center ml-[-10px]',
        rightIcon: 'ri-arrow-drop-right-line mr-2 text-[1.8rem] leading-[0] font-[900]',
        footerHeaderTitle: 'text-white text-uppercase mb-4 tracking-[5px]',
    }

    return (
        <>
            <div className={styles.footerContentWrapper}>
                <div className={styles.contentRow}>
                    <div className={styles.contentColumn}>
                        <Link href="#" className={styles.navBarBrand}>
                            <h1 className="text-primaryColor cursor-pointer"><span className="text-[#fff] decoration-none">TRAVEL</span>ER</h1>
                        </Link>
                        <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed
                            vero lorem dolor dolor</p>
                        <h6 className="text-[#fff] text-uppercase mt-4 mb-3 tracking-[5px]">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <Link className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab ri-twitter-fill px-[10px]"></i></Link>
                            <Link className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab ri-facebook-fill px-[10px]"></i></Link>
                            <Link className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab ri-instagram-line px-[10px]"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" href="#"><i className="fab ri-linkedin-fill px-[10px]"></i></Link>
                        </div>
                    </div>
                    <div className={styles.contentColumn}>
                        <h5 className={styles.footerHeaderTitle}>Our Services</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">About</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Destination</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Services</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Packages</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Guides</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Testimonial</span></a>
                            <a className={styles.rightIconContainer2}><i className={styles.rightIcon}></i><span className="footer-link">Blog</span></a>
                        </div>
                    </div>
                    <div className={styles.contentColumn}>
                        <h5 className={styles.footerHeaderTitle}>Usefull Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">About</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Destination</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Services</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Packages</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Guides</span></a>
                            <a className={styles.rightIconContainer1}><i className={styles.rightIcon}></i><span className="footer-link">Testimonial</span></a>
                            <a className={styles.rightIconContainer2}><i className={styles.rightIcon}></i><span className="footer-link">Blog</span></a>
                        </div>
                    </div>
                    <div className={styles.contentColumn}>
                        <h5 className={styles.footerHeaderTitle}>Contact Us</h5>
                        <p className='mb-[1rem]'><i className="ri-map-pin-fill mr-2"></i>123 Street, New York, USA</p>
                        <p className='mb-[1rem]'><i className="ri-phone-fill mr-2"></i>+92 123 1234567</p>
                        <p className='mb-[1rem]'><i className="ri-mail-fill mr-2"></i>info@example.com</p>
                        <h6 className="text-[#fff] uppercase mt-4 mb-3 tracking-[5px]">Newsletter</h6>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-light footer-input" placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="bg-primaryColor hover:bg-primaryDarkColor text-[#fff] px-3 footer-btn">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bg container-fluid bg-darkColor text-white border-top py-4 px-sm-3 px-md-5">
                <div className="row">
                    <div className="flex place-items-center justify-center">
                        <p className="m-0 text-white-50 mb-[1rem]">Copyright &copy; <a href="https://github.com/baxsm" target="_blank" rel="noreferrer" className='text-primaryColor hover:text-primaryDarkColor'>BAXSM</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
