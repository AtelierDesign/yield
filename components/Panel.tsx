import { css, styled } from '../stitches.config';

export const panelStyles = css({
  backgroundColor: '$panel',
  border: '1px solid $gray5',
  borderRadius: '$4',
  boxShadow: '$colors$shadowLight 0px 0px 10px -15px, $colors$shadowDark 0px 10px 20px -15px',
});

export const Panel = styled('div', panelStyles);
