import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { storiesOf } from '@storybook/react';
import { HubAndSpoke, HubItem } from '../shared/components/hub-and-spoke';
import Creator from '../app/Creator';

const items: HubItem[] = [
  {
    title: 'Hub1',
    overview: {
      component: (<p>this is hub 1 overview</p>),
    },
    form: {
      component: (<p>this is hub 1 edition form</p>),
    }
  },
  {
    title: 'Hub2',
    overview: {
      component: (<p>this is hub 2 overview</p>),
    },
    form: {
      component: (<p>this is hub 2 edition form</p>),
    }
  },
  {
    title: 'Hub3',
    overview: {
      component: (<p>this is hub 3 overview</p>),
      width: 'full',
    },
    form: {
      component: (<p>this is hub 3 edition form</p>),
    }
  }
];

storiesOf('HubAndSpoke', module)
  .add('simple', () => (
    <HubAndSpoke items={items}/>
  ));

storiesOf('Creator', module)
  .add('simple', () => (
    <Creator />
  ));
