import { AiFillCheckCircle } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { BsEyeFill } from 'react-icons/bs';
import { FC, useState } from 'react';
import style from './MailItem.module.scss';

const MailItem: FC<MailItemProps> = ({
  title,
  activeIndex,
  index,
  setActiveIndex,
}) => {
  const selected = activeIndex !== index ? style.not__selected : style.selected;
  const personnIcon = activeIndex !== index ? style.icon__gmail : undefined;

  return (
    <div
      className={`${style.pdf__item} ${selected}`}
      onClick={() => setActiveIndex(index)}
      onKeyDown={undefined}
      role="button"
      tabIndex={0}
    >
      <div className={personnIcon}>
        <IoMdPerson size={40} />
      </div>
      <div className={style.pdf__title}>{title}</div>
      <div className={style.icon__eye}>
        <BsEyeFill />
      </div>
      <div className={style.icon__validation}>
        <AiFillCheckCircle />
      </div>
    </div>
  );
};

export default MailItem;
