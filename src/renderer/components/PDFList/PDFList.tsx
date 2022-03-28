import './PDFList.scss';
import { FC, Fragment } from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { PdfListProps } from 'renderer/props/PdfListProps';
import { PDFDescriptionItem } from 'renderer/models/PdfDescriptionItem';
import PDFItem from '../PDFItem/PDFItem';

const PDFList: FC<PdfListProps> = ({ pdfList, path }) => {
  console.log(pdfList);
  return (
    <div>
      <div className="box">
        <div className="box-header">
          <h2 className="title">Choix des factures</h2>
          <div className="path">
            <div className="icon__folder">
              <AiFillFolder />
            </div>
            <p>{path}</p>
          </div>
        </div>
        <ul>
          <>
            {pdfList.map((item: PDFDescriptionItem) => (
              <PDFItem item={item} />
            ))}
          </>
        </ul>
      </div>
    </div>
  );
};

export default PDFList;
