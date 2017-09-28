// @flow
// @inheritedComponent TextField

import React from 'react';
import type { ChildrenArray, Node } from 'react';
import TextField from '../TextField';

export type Props = {};

function TextArea(props: Props) {
  return (
    <TextField multiline />
  );
}

TextArea.defaultProps = {
  required: false,
  select: false,
};

export default TextArea;
