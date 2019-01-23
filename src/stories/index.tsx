import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { storiesOf } from '@storybook/react';
import { Hub, HubAndSpoke } from '../shared/components/hub-and-spoke';

const hubs = [
  (<Hub key="hub1" title="Hub1" edition={(<h1>Hello World</h1>)}>Hub1</Hub>),
  (<Hub key="hub2" title="Hub2" edition={(<h1>Hello World</h1>)}>Hub2</Hub>),
  (<Hub key="hub3" title="Hub3" edition={(<h1>Hello World</h1>)} width={'full'}>Hub3</Hub>)
];

storiesOf('HubAndSpoke', module)
  .add('simple', () => (
    <HubAndSpoke hubs={hubs}/>
  ));
