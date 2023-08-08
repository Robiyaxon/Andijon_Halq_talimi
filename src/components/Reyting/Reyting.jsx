import React, { useEffect, useState } from 'react'
import {Table } from "antd";
import { instance } from "../../api/API";
import { Content } from "antd/lib/layout/layout";
import style from "./Reyting.module.css"
import { useTranslation } from 'react-i18next';
import Column from 'antd/es/table/Column';
import ColumnGroup from 'antd/es/table/ColumnGroup';

const Reyting = () => {
  const {t} =useTranslation()
    const [data, setData] = useState([]);
    useEffect(() => {
      instance.get("ballash/").then((response) => setData(response.data));
    }, []);
    data.sort(function(a, b) {
        return a.umumiy - b.umumiy;
      });
      data.reverse();
    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Muassasa nomi", dataIndex: "nomi", key: "nomi" },
        { title: "O`quv ishlari", dataIndex: "oquv_ishlari", key: "oquv_ishlari" },
        { title: "Yoshlar masalalari", dataIndex: "yoshlar", key: "yoshlar" },
        { title: "Ishlab chiqarish ta`limi", dataIndex: "ishlab_chiqarish", key: "ishlab_chiqarish" },
        { title: "Moliyaviy ishalari", dataIndex: "moliyaviy", key: "moliyaviy" },
        { title: "Xo`jalik ishlari", dataIndex: "xojalik", key: "xojalik" },
        { title: "Ta`lim sifatini nazorat qilish", dataIndex: "talim_sifati", key: "talim_sifati" },
        { title: "Ijro intizomi", dataIndex: "ijro_intizomi", key: "ijro_intizomi" },
        { title: "Aniqlangan qoida buzarliklar", dataIndex: "jazo", key: "jazo" },
        {
          title: "1 oyda  to`plangan   umumiy ball",
          key: "umumiy",
          dataIndex: "",
          render: (text) => {
            return <p>{parseInt(text.umumiy )} ball</p>;
          },
        },
        {
          title: "Baholash turi",
          key: "Color",
          dataIndex: "",
          render: (text) => {
            if(text.umumiy<50){
              return <p className="red_error">Qoniqarsiz</p>;
            }else if(text.umumiy>80){
              return <p className="alo_error">A`lo</p>;
            }else if(text.umumiy<80 || text.umumiy>50){
              return <p className="blue_error">Yaxshi</p>;
            }
           
          }
        }
      ];
  return (
    <div className={style.Reyting}>
        {!data.length ? <h2 className={style.Titlteh2}>Hozircha Reyting joylanmadi!</h2> : 
        <>
         <h1>{t("reyting")}</h1>
        <Content style={{ margin: "0 16px" }}>
        <Table columns={columns} dataSource={data} >
     
        </Table>
       </Content> </>
        }
       
      
    </div>
  )
}

export default Reyting