import React, { FC, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import style from './MailList.module.scss';
import MailItem from '../MailItem/MailItem';

const MailList: FC<MailListProps> = ({ mailList }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <div>
      <div className={style.box}>
        <div className={style.box__header}>
          <h2 className={style.title}>Choix du destinataire</h2>
          <div className={style.add}>
            <div className={style.icon__add}>
              <IoMdAddCircle />
            </div>
            <p>Ajouter une adresse</p>
          </div>
        </div>
        <ul>
          <>
            {mailList.map((item: string, index) => (
              <MailItem
                title={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </>
        </ul>
      </div>
    </div>
  );
};

export default MailList;
