import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Biz siz bilan ishlashdan mamnun  <br />
            bo'lamiz agar siz biz bilan birga ishlasangiz
          </span>
          <span className="primaryText">
            Men bilan o'z biznesingizni boshlang <a href="mailto:zikriddin2022surxoniddinov@gmail.com">Suhbatni boshlash</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Ma'lumot</span>
            <p>Chilonzor, Toshkent, O'zbekiston</p>
          </div>
          <ul className={css.menu}>
            <li>Xizmatlar</li>
            <li>Ishlar</li>
            <li>Qaydnoma</li>
            <li>Tajriba</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
