import React from 'react';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Text } from '../components/Text';

import { AppBar } from '../components/AppBar';

function Testing() {
  return (
    <Box css={{ height: '100%' }}>
      <AppBar color="accent">
        <Text>AppBar</Text>
      </AppBar>
    </Box>
  );
}

export default Testing;
