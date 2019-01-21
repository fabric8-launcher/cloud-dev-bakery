import * as React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';

interface HubProps {
  edition: React.ReactNode;
  size?: 'small' | 'large';
  children: React.ReactNode;
}

export function Hub(props: HubProps) {
  if (props.size === 'large') {
    return (<GridItem span={12}>{props.children}</GridItem>);
  }
  return (<GridItem span={6}>{props.children}</GridItem>);
}

interface HubAndSpokeProps {
  hubs: React.ReactNode[];
}

export function HubAndSpoke(props: HubAndSpokeProps) {

  return (
    <Grid>
      {props.hubs}
    </Grid>
  );
}
