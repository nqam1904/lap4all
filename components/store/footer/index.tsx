import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SearchIcon,
  XIcon,
} from "@/components/icons/svgIcons";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.storeFooter}>
      <div className={`${styles.footerWrapper} storeContainer`}>
        <div className={styles.topSection}>
          <Link href={"/"}>
            <Image
              alt="Laptop Logo"
              src={"/images/logo.png"}
              width={125}
              height={40}
            />
          </Link>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Tìm kiếm"
            />
            <SearchIcon width={16} />
          </div>
        </div>
        <section className={styles.middle}>
          <div>
            <h3>Liên hệ chúng tôi</h3>
            <span>Đặt câu hỏi và tư vấn? Gọi chúng tôi 24/7</span>
            <h2>+49 30 575909881</h2>
            <span>685 Phan Đăng Lưu, Quận Phú Nhuận, TP Hồ Chí Minh</span>
            <span>vpthinh98@gmail.com</span>
          </div>
          <div>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link href={""}>Computer & Laptop</Link>
              </li>
              <li>
                <Link href={""}>Tablets & iPad</Link>
              </li>
              <li>
                <Link href={""}>Printer & Cameras</Link>
              </li>
              <li>
                <Link href={""}>Smart Phones</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Customer Service</h3>
            <ul>
              <li>
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={""}>Refund Policy</Link>
              </li>
              <li>
                <Link href={""}>Shipping & Return</Link>
              </li>
              <li>
                <Link href={""}>Term & Conditions</Link>
              </li>
              <li>
                <Link href={""}>Advanced Search</Link>
              </li>
              <li>
                <Link href={""}>Store Locations</Link>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>Sign Up to Newsletter</h3>
            <input type="text" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
      <section className={styles.bottom}>
        <div className={`${styles.footerWrapper} storeContainer`}>
          <span>© 2024 Laptop Lap4All Store.</span>
          <div className={styles.legal}>
            <ul>
              <li>
                <Link href={""}>Conditions of Use & Sale</Link>
              </li>
              <li>
                <Link href={""}>Privacy Notice</Link>
              </li>
              <li>
                <Link href={""}>Imprint</Link>
              </li>
              <li>
                <Link href={""}>Cookies Notice</Link>
              </li>
              <li>
                <Link href={""}>Interest-Based Ads Notice</Link>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <Link href={"https://www.linkedIn.com"}>
              <LinkedinIcon width={20} strokeWidth={0} />
            </Link>
            <Link href={"https://www.twitter.com"}>
              <XIcon width={20} />
            </Link>
            <Link href={"https://www.instagram.com"}>
              <InstagramIcon width={20} strokeWidth={0} />
            </Link>
            <Link href={"https://www.facebook.com"}>
              <FacebookIcon width={20} strokeWidth={0} />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
