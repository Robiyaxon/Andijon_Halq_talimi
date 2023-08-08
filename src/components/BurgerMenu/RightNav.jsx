import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Ul = styled.ul`
  display: none;
  list-style: none;
  flex-flow: row nowrap;
  z-index: 9999;
  cursor: pointer;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    display: flex;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    cursor: pointer;

    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const { t } = useTranslation();
  return (
    <Ul open={open}>
      <li>
        <Link onClick={() => setOpen(!open)} to="/">
          {t("home")}
        </Link>
      </li>
      {/* <li><a href="/services">{t("navbar2")}</a></li> */}
      <li>
        <Link onClick={() => setOpen(!open)} to="/ishlar">
          {t("work")}
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(!open)} to="/rahbariyat">
          {t("director")}
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(!open)} to="/news">
          {t("region_news")}
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(!open)} to="/uzb_news">
          {t("news_uzb")}
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(!open)} to="/elonlar">
          {t("Choices")}
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(!open)} to="/reyting">
          {t("reyting")}
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
