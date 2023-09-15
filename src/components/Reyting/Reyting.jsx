import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { instance } from "../../api/API";
import { Content } from "antd/lib/layout/layout";
import style from "./Reyting.module.css";
import { useTranslation } from "react-i18next";

const Reyting = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    instance.get("ballash/").then((response) => setData(response.data));
  }, []);
  data.sort(function (a, b) {
    return a.umumiy - b.umumiy;
  });
  data.reverse();
  const columns = [
   
    {
      title: "Muassasa nomi",
      dataIndex: "nomi",
      key: "nomi",

      children: [
        {
          title: "Maksimal Ballar",
          dataIndex: "nomi",
          key: "nomi",
        },
      ],
    },
    {
      title: "O`quv ishlari bo`yicha",
      dataIndex: "oquv_ishlari",
      key: "oquv_ishlari",
      children: [
        {
          title: "15",
          dataIndex: "oquv_ishlari",
          key: "oquv_ishlari",
        },
      ],
    },
    {
      title: "Yoshlar masalalari bo`yicha",
      dataIndex: "yoshlar",
      key: "yoshlar",
      children: [
        {
          title: "15",
          dataIndex: "yoshlar",
          key: "yoshlar",
        },
      ],
    },
    {
      title: "Ishlab chiqarish ta`limi bo`yicha",
      dataIndex: "ishlab_chiqarish",
      key: "ishlab_chiqarish",
      children: [
        { title: "15", dataIndex: "ishlab_chiqarish", key: "ishlab_chiqarish" },
      ],
    },
    {
      title: <div className={style.Moliya}>
      <p className={style.pName}>Moliyaviy ishar bo`yicha, Inavatsiyalar Masalalari</p>
      <p>Moliyaviy ishlar (8 ball)</p>
      <p>Inavatsiyalar masalalari (7 ball)</p>
      </div>,
      dataIndex: "moliyaviy",
      key: "moliyaviy",
      children: [
        { title: "15", dataIndex: "moliyaviy", key: "moliyaviy" },
      ],
      width: 500
    },
    {
      title: "Xo'jalik ishlari bo`yicha",
      dataIndex: "xojalik",
      key: "xojalik",
      children: [{ title: "10", dataIndex: "xojalik", key: "xojalik" }],
    },

    {
      title: <div className={style.Moliya}>
      <p className={style.pName}>Talim sifatini nazarat kilish, Horijiy tillarni ommalashtirish, innovasiyalar masalalari</p>
      <p>Xorijiy til (10 ball)</p>
      <p>Talim sifati (10 ball)</p>
      </div>,
      dataIndex: "talim_sifati",
      key: "talim_sifati",
      children: [
        { title: "20", dataIndex: "talim_sifati", key: "talim_sifati" },
      ]
    },
    {
      title: <div className={style.Moliya}>
      <p className={style.pName}>Ijro intizomi, kadrlar masalasi va boshqa masalalar</p>
      <p>Ijro intizomi (5 ball)</p>
      <p>Kadr masalalari (5 ball)</p>
      </div>,
      dataIndex: "ijro_intizomi",
      key: "ijro_intizomi",
      children: [
        { title: "10", dataIndex: "ijro_intizomi", key: "ijro_intizomi" },
      ],
    },
    {
      title: "Aniqlangan qoida buzarliklar",
      dataIndex: "jazo",
      key: "jazo",
      children: [{ title: "0", dataIndex: "jazo", key: "jazo" }],
    },
    {
      title: "1 oyda  to`plangan   umumiy ball",
      key: "umumiy",
      dataIndex: "",
      render: (text) => {
        return <p>{parseInt(text.umumiy)} ball</p>;
      },
      children: [{ title: "100", dataIndex: "umumiy", key: "umumiy" }],
    },
    {
      title: "Baholash turi",
      key: "Color",
      dataIndex: "",
      children: [
        {
          title: "100.0",
          dataIndex: "",
          key: "Color",
          render: (text) => {
            if (text.umumiy < 50) {
              return <p className="red_error">Qoniqarsiz</p>;
            } else if (text.umumiy > 80) {
              return <p className="alo_error">A`lo</p>;
            } else if (text.umumiy < 80 || text.umumiy > 50) {
              return <p className="blue_error">Yaxshi</p>;
            }
          },
        },
      ],
    },
  ];
  return (
    <div className={style.Reyting}>
      {!data.length ? (
        <h2 className={style.Titlteh2}>Hozircha Reyting joylanmadi!</h2>
      ) : (
        <>
          <h1>{t("reyting")}</h1>
          <Content style={{ margin: "0 16px" }}>
            <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: '1700px' }}></Table>
          </Content>{" "}
        </>
      )}
    </div>
  );
};

export default Reyting;
