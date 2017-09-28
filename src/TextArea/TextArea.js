// @flow
// @inheritedComponent TextField

import React from 'react';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import TextField from '../TextField';

export const styles = (theme: Object) => ({
  root: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.input.bottomLine,
    '&:hover:not($disabled)': {
      borderColor: theme.palette.text.primary,
      borderWidth: 2,
    },
    disabled: {
      color: theme.palette.text.disabled,
    },
  },
});

export type Props = {
  /**
   * Useful to extend the style applied to components.
   */
  classes?: Object,
  /**
   * @ignore
   */
  className?: string,
};

function TextArea(props: Props) {
  const { classes, className: classNameProp } = props;
  const className = classNames(
    classes.root,
    classNameProp,
  );

  return (
    <div className={className}>
      <TextField
        multiline
        rows={3}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </div>
  );
}

TextArea.defaultProps = {
  required: false,
  select: false,
};

export default withStyles(styles, { name: 'MuiTextArea'})(TextArea);
