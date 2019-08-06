import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blocks = props => {
  const { columnLayout, blockLayout, allData } = props;
  return allData.map(block => (
    <div className={columnLayout} key={block.id}>
      <div className={blockLayout}>
        <span>
          <FontAwesomeIcon icon={block.designIcon} />
        </span>
        <h3>{block.headline}</h3>
        <p>{block.content}</p>
      </div>
    </div>
  ));
};

export default Blocks;
