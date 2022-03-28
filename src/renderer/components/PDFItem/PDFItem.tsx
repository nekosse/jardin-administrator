import { AiFillCheckCircle } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { FC, useState } from 'react';
import { CgAttachment } from 'react-icons/cg';
import { PdfItemProps } from 'renderer/props/PdfItemProps';
import style from './PDFItem.module.scss';

const PDFItem: FC<PdfItemProps> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(item.active);
  item.active = isSelected;
  const selected = !isSelected ? style.not__selected : style.selected;
  const attachmentIcon = !isSelected ? style.icon__pdf : undefined;

  return (
    <div
      className={`${style.pdf__item} ${selected}`}
      onClick={() => setIsSelected(!isSelected)}
      onKeyDown={undefined}
      role="button"
      tabIndex={0}
    >
      <div className={attachmentIcon}>
        <CgAttachment size={40} />
      </div>
      <div className={style.pdf__title}>{item.name}</div>
      <div className={style.icon__eye}>
        <BsEyeFill />
      </div>
      <div className={style.icon__validation}>
        <AiFillCheckCircle />
      </div>
    </div>
  );
};

export default PDFItem;
