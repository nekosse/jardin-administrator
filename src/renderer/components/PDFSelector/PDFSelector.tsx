import React, { useState } from 'react';
import './PDFSelector.scss';
import { FaFileUpload } from 'react-icons/fa';
import { PDFDescriptionItem } from '../../models/PdfDescriptionItem';

const PDFSelector = () => {
  const [fileList, setfileList] = useState<PDFDescriptionItem[]>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const pdfDescriptionItemList: PDFDescriptionItem[] = [];
    console.log(files);
    if (files != null) {
      /* for (let i = 0; i < files.length; i += 1) {
        pdfDescriptionItemList.push({
          name: files[i].name,
          path: files[i].path,
          contentType: 'application/pdf',
        });
      } */
    }
    // window.electron.ipcRenderer.setPdfList(pdfDescriptionItemList);

    // setfileList(pdfDescriptionItemList);
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        className="inputfile"
        accept="application/pdf"
        onChange={handleChange}
        multiple
      />
      <label htmlFor="file">
        <div className="PDFSelector">
          <FaFileUpload size={100} />
          <span>Selectionnez vos PDF</span>
        </div>
        <div>
          {fileList?.map((item, _index) => (
            <p> {item.name} </p>
          ))}
        </div>
      </label>
    </div>
  );
};

export default PDFSelector;
