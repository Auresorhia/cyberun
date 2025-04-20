import React from 'react';
import { RankedTester, ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

const TextReadOnlyRenderer = ({ data, label, description }: ControlProps) => {
  return (
    <div className="readonly-row">
      <div className="label">
        <strong>{label}</strong>
        {description && <div className="description">{description}</div>}
      </div>
      <div className="value">{data}</div>
    </div>
  );
};

export default withJsonFormsControlProps(TextReadOnlyRenderer);
