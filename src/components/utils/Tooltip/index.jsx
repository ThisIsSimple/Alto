import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopperTooltip } from 'react-popper-tooltip';
import './styles.css';

const Tooltip = ({
  children,
  message,
  options = {},
  modifiers = {},
  className = '',
  style = {},
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip(
    {
      delayHide: true,
      delayShow: true,
      interactive: true,
      // ...options,
    },
    {
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top', 'bottom', 'left', 'right'],
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 7],
          },
        },
        // ...modifiers,
      ],
    },
  );

  return (
    <>
      <div
        ref={setTriggerRef}
        className={`${className}`}
        style={style}
        data-popper-placement="[0, 30]"
      >
        {children}
      </div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: 'tooltip-container text-white text-xs border-none shadow',
          })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          {message}
        </div>
      )}
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.instanceOf(React.ReaceNode).isRequired,
  message: PropTypes.string.isRequired,
  options: PropTypes.object,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Tooltip;
