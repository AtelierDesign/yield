import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const StyledAccordion = styled(AccordionPrimitive.Root, {
  border: '2px solid $gray6',
  borderRadius: '14px',
  width: '100%',
  backgroundColor: '$translucent',
  boxShadow: '0 2px 8px $blackA4',
});

type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export const Accordion = React.forwardRef<React.ElementRef<typeof StyledAccordion>, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordion ref={forwardedRef} {...props} {...(props.type === 'single' ? { collapsible: true } : {})}>
      {children}
    </StyledAccordion>
  ),
);

const StyledItem = styled(AccordionPrimitive.Item, {
  // borderTop: '1px solid $colors$gray6',
  overflow: 'hidden',
  backgroundColor: 'inherit',

  '&:first-child': {
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },

  '&:last-child': {
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    // borderBottom: '1px solid $colors$gray6',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    // boxShadow: '0 0 0 2px $mauve12',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  // paddingTop: '3px',
  borderRadius: '16px',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',

  display: 'flex',
  // flex: '1',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',

  color: '$hiContrast',

  width: '100%',
  minHeight: '40px',

  fontSize: '13px',
  fontWeight: '700',
  // lineHeight: '1',

  '&[data-state="closed"]': { backgroundColor: '$gray1' },
  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '@hover': {
    '&:hover': {
      backgroundColor: '$gray2',
    },
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
  },
});

type AccordionTriggerPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };

export const AccordionTrigger = React.forwardRef<React.ElementRef<typeof StyledTrigger>, AccordionTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <ChevronDownIcon />
      </StyledTrigger>
    </StyledHeader>
  ),
);

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$gray12',
  backgroundColor: '',

  // Other
  fontSize: '13px',
  fontWeight: '500',
  padding: '25px 20px',
  lineHeight: '1.5',
  alignItems: 'left',
  textAlign: 'left',

  '&[data-state="open"]': {
    // animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    // animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

// Main Container.div
const StyledContainer = styled('div', {
  backgroundColor: '$translucent',
  width: '100%',
  alignItems: 'center',
  margin: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
});

export const AccordionContainer = StyledContainer;
export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;
