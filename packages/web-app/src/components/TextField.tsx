import React, { Component } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../SaladTheme'
import classnames from 'classnames'

const styles = (theme: SaladTheme) => ({
  container: {
    display: 'inline-block',
    padding: '0 .5rem',
  },
  text: (props: Props) => {
    const c = props.dark ? theme.darkBlue : theme.lightGreen

    return {
      backgroundColor: 'transparent',
      border: `1px solid ${c}`,
      padding: '.5rem',
      color: c,
      fontSize: '.625rem',
      fontFamily: 'sharpGroteskLight25',
      '&::placeholder': {
        opacity: 0.5,
        color: c,
      },
      '&:focus': {
        outlineColor: theme.mediumGreen,
      },
    }
  },
  errorBorder: {
    borderColor: `${theme.red} !important`,
    '&:focus': {
      outlineColor: `${theme.red} !important`,
    },
  },
  errorText: {
    margin: '.25rem',
    color: theme.red,
    fontFamily: 'sharpGroteskBook25',
    fontSize: theme.small,
  },
})

interface Props extends WithStyles<typeof styles> {
  name?: string
  placeholder?: string
  onBlur?: (event?: React.FocusEvent<any>) => void
  onChange?: (event: React.ChangeEvent<any>) => void
  onFocus?: (event?: React.FocusEvent<any>) => void
  value?: any
  dark?: boolean
  errorText?: string
}

class _TextField extends Component<Props> {
  render() {
    const { errorText, classes, dark, ...input } = this.props
    return (
      <div className={classes.container}>
        <input className={classnames(classes.text, { [classes.errorBorder]: errorText })} {...input} type="text" />
        {errorText && <div className={classes.errorText}>{errorText}</div>}
      </div>
    )
  }
}

export const TextField = withStyles(styles)(_TextField)
