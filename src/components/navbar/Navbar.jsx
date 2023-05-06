import React from "react";
import style from "./Navbar.module.css";
import { Button, Dropdown } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Boshqarma haqida
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Rahbariyat
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Boshqarma tuzilmasi
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Tizimdagi tashkilotlar
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
       Bo`sh ish o`rinlari 
      </a>
    ),
  },
];
const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <Button> Boshqarma haqida </Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <Button>Ochiq ma`lumotlar </Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="topLeft"
        arrow
      >
        <Button>Matbuot xizmati</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="topRight"
        arrow
      >
        <Button>Yangiliklar</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="topRight"
        arrow
      >
        <Button>Faoliyat</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="topRight"
        arrow
      >
        <Button>Elonlar</Button>
      </Dropdown>
    </div>
  );
};

export default Navbar;
