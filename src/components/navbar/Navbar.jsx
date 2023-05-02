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
        1st menu item
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
        2nd menu item
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
        3rd menu item
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
        <Button>Vazirlik haqida</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <Button>Hujjatlar</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <Button>Muassasalar</Button>
      </Dropdown>
      <br />
      <Dropdown
        menu={{
          items,
        }}
        placement="topLeft"
        arrow
      >
        <Button>Matbuot Hizmati</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="top"
        arrow
      >
        <Button>Loyihalar</Button>
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
    </div>
  );
};

export default Navbar;