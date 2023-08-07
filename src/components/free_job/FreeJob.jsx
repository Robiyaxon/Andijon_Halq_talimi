import React, { useEffect } from "react";
import style from "./FreeJob.module.css";
import { useState } from "react";
import { instance } from "../../api/API";
import img from "../../assets/ish.jpg";
import { HomeTwoTone, SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";
// import { Option } from "antd/lib/mentions";

export const FieldHelpers = ({
  label,
  name,
  required = true,
  message,
  inp = true,
  children = "",
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: message,
        },
      ]}
    >
      {children ? null : inp ? <Input /> : <Input type="number" />}
    </Form.Item>
  );
};

const FreeJob = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [createVisible, setCreateVisible] = useState(false);
  const [id, setId] = useState(1);
  const [form] = Form.useForm();
  const { t } = useTranslation();

  useEffect(() => {
    instance.get("ishlar/").then((response) => setData(response.data));
  }, [setData]);

  const createHandleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        axios
          .post( "https://oliytalim.pythonanywhere.com/" + "api/ariza/",
            {
              familiya: values.familiya,
              ish: id,
              ishchi_haqida: values.ishchi_haqida,
              ism: values.ism,
              staj: values.staj,
              yoshi: values.yosh,
              contact: values.contact,
            },
            {
              headers: {
                Authorization: `Token 2fa0d2a67200eb75c181d7cef3e5ca5e9ae73f1b`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        // dispatch(createAction("api/ishlar/", CREATE_JOBS, values));
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const createHandleCancel = () => {
    setCreateVisible(false);
  };

  const showCreateModal = (id) => {
    setId(id);
    setCreateVisible(true);
  };
  const handleClick = (id) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const map = data.map((a) => {
    return(
    <div className={style.card} key={a.id}>
      <img src={img} alt="" />
      <h2>
        <HomeTwoTone /> {t("joy_nomi")} : {a.nomi}
      </h2>
      <h2> {t("adrecc")} : {a.manzil}</h2>
      <h2> {t("Boglanish")} : {a.contact}</h2>
      <button onClick={() => handleClick(a.id)}>Talablar</button>
      {!open[a.id] ? null : <h3>{t("talab")} : {a.talablar}</h3>}
      <Button style={{marginTop:"1rem"}} type="primary" onClick={() => showCreateModal(a.id)}>
        <SendOutlined />
      </Button>
      <Modal
        title={"Yaratish"}
        open={createVisible}
        onOk={createHandleOk}
        onCancel={createHandleCancel}
        okText={"yaratish"}
        cancelText={"bekor qilish"}
        htmlType="submit"
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <FieldHelpers
            label="Ism"
            name="ism"
            message="Iltimos Ism qatorini yo'ldiring!"
          />

          <FieldHelpers
            label="Familiya"
            name="familiya"
            message="Iltimos Familiya qatorini yo'ldiring!"
          />

          <FieldHelpers
            label="Yosh"
            name="yosh"
            message="Iltimos Yosh qatorini yo'ldiring!"
            inp={false}
          />
          <FieldHelpers
            label="Staj"
            name="staj"
            message="Iltimos Staj qatorini yo'ldiring!"
          />
          <FieldHelpers
            label="Ishchi haiqda"
            name="ishchi_haqida"
            message="Iltimos Ishchi haqida qatorini yo'ldiring!"
          />
          <FieldHelpers
            label="Contact"
            name="contact"
            message="Iltimos Contact qatorini yo'ldiring!"
          />
        </Form>
      </Modal>
    </div>
  )});

  return (
    <div className={style.FreeJob}>
     
      {!data.length ? <h2 className={style.Titlteh2}>Hozircha ish o'rinlari mavjud emas!</h2> : <>
      <h1>{t("work")}</h1>
      {map}
      </>}
    </div>
  );
};

export default FreeJob;
