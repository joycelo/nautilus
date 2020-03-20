/**
 * ************************************
 *
 * @module  LeftNav.tsx
 * @author
 * @date 3/11/20
 * @description
 *
 * ************************************
 */
import React from 'react';

// IMPORT REACT COMPONENTS
import InfoDropdown from './InfoDropdown';
import FileSelector from './FileUpload';
import Title from './Title';
import { FileUpload, Service } from '../App.d';

type Props = {
  service: Service;
  selectedContainer: string;
  fileUpload: FileUpload;
  fileUploaded: boolean;
};

const LeftNav: React.FC<Props> = ({
  fileUpload,
  fileUploaded,
  selectedContainer,
  service,
}) => {
  return (
    <div className="left-nav">
      <Title />
      {fileUploaded ? <FileSelector fileUpload={fileUpload} /> : null}
      <div className="leftNavContainerTitle">
        {/* display name if there is a selected container */}
        {selectedContainer !== ''
          ? selectedContainer[0].toUpperCase() + selectedContainer.slice(1)
          : selectedContainer}
      </div>
      <div className="service-info-display">
        <InfoDropdown service={service} />
      </div>
    </div>
  );
};

export default LeftNav;
