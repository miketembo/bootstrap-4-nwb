import React, {PropTypes as t} from 'react'
import Icon from 'react-fa'

export default React.createClass({
  propTypes: {
    loading: t.bool.isRequired,
    bsStyle: t.string,
    type: t.string
  },
  getDefaultProps() {
    return {
      bsStyle: 'primary',
      type: 'button'
    }
  },
  render() {
    let {bsStyle, children, className, disabled, loading, ...props} = this.props
    let classes = `btn btn-${bsStyle}`
    if (className) {
      classes += ` ${className}`
    }
    disabled = disabled || loading
    return <button class={classes} disabled={disabled} {...props}>
      {loading && <Icon name='spinner' spin/>} {children}
    </button>
  }
})
