import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Box } from './Box';
import { panelStyles } from './Panel';

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> & {
  children: React.ReactNode;
};

export function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
}

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },

  color: '$gray12',

  // Other
  fontSize: '13px',
  fontWeight: '500',
  padding: '25px 20px',
  lineHeight: '1.5',
  alignItems: 'left',
  textAlign: 'left',
});

type PopoverContentPrimitiveProps = React.ComponentProps<typeof PopoverPrimitive.Content>;

type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS;
  hideArrow?: boolean;
};

// Exports
export const PopoverContent = React.forwardRef<React.ElementRef<typeof StyledContent>, PopoverContentProps>(
  ({ children, hideArrow, ...props }, fowardedRef) => (
    <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
      {children}
      {!hideArrow && (
        <Box css={{ color: '$panel' }}>
          <PopoverPrimitive.Arrow width={11} height={5} offset={5} style={{ fill: 'currentColor' }} />
        </Box>
      )}
    </StyledContent>
  ),
);

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;
