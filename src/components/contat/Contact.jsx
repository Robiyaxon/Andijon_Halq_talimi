import React from "react";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.Contact}>
      <h1>Bog`lanish</h1>
      <div>
        <h2>Манзил:</h2>
        <p>
          Andijon shahar, A.Xaydarov ko`chasi 3-uy Mo`ljal : Yangi bozor hududi,
          sobiq Kasb hunar boshqarmasi binosi
        </p>
      </div>
      <div>
        <h2>Telefon</h2>
        <p>+998742281002</p>
      </div>
      <div>
        <h2>Faks</h2>
        <p>+998742281002</p>
      </div>
      <div>
        <h2>Elektron pochta:</h2>
        <p>andijon@markaz.uz</p>
      </div>
      <div>
        <h2>Ijtimoiy tarmoqlar</h2>
        <p><a href=""></a></p>
      </div>
    </div>
  );
};

export default Contact;
