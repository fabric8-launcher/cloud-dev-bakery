import * as React from 'react';
import { Button, Grid, GridItem } from '@patternfly/react-core';

import './hub-and-spoke.scss';
import { EditIcon, WindowCloseIcon } from '@patternfly/react-icons';
import { ReactElement, useContext, useState } from 'react';

export interface HubItem {
  title: string;
  overview: {
    component: ReactElement<any>;
    width?: 'half' | 'full';
  };
  form: {
    component: ReactElement<any>;
  };
}

interface Hub {
  selected?: HubItem;
  open(item: HubItem);
  close();
}

const HubContext = React.createContext<Hub | undefined>(undefined);

export function HubOverviewCard(props: HubItem) {
  const hub = useContext(HubContext);
  const size = props.overview.width === 'full' ? 12 : 6;
  const onEdit = () => {
    if (hub) {
      hub.open(props);
    }
  };
  return (
    <GridItem className="hub-and-spoke-item" span={size}>
      <div className="hub-and-spoke-header">
        <h1>
          {props.title}
        </h1>
        <div className="hub-and-spoke-nav">
          <Button variant="plain" aria-label="Edit" onClick={onEdit}>
            <EditIcon/>
          </Button>
        </div>
      </div>
      <div className="hub-and-spoke-body">
        {props.overview.component}
      </div>
    </GridItem>
  );
}

interface HubFormCardProps {
  title: string;
  children: React.ReactNode;
}

function HubFormCard(props: HubFormCardProps) {
  const hub = useContext(HubContext);
  const onClose = () => {
    if (hub) {
      hub.close();
    }
  };
  return (
    <GridItem className="hub-and-spoke-item" span={12}>
      <div className="hub-and-spoke-header">
        <h1>
          {props.title}
        </h1>
        <div className="hub-and-spoke-nav">
          <Button variant="plain" aria-label="Edit" onClick={onClose}>
            <WindowCloseIcon />
          </Button>
        </div>
      </div>
      <div className="hub-and-spoke-body">
        {props.children}
      </div>
    </GridItem>
  );
}

interface HubAndSpokeProps {
  items: HubItem[];
}

export function HubAndSpoke(props: HubAndSpokeProps) {

  const [selectedHub, setSelectedHub] = useState<HubItem | undefined>(undefined);

  const hub: Hub = {
    selected: selectedHub,
    open: (item: HubItem) => {
      setSelectedHub(item);
    },
    close: () => {
      setSelectedHub(undefined);
    },
  };

  return (
    <HubContext.Provider value={hub}>
      <Grid className="hub-and-spoke-container" gutter={'sm'}>
        {hub.selected ? (
            <HubFormCard title={hub.selected.title}>
              {hub.selected.form.component}
            </HubFormCard>
        ) : props.items.map((item, i) => (<HubOverviewCard {...item} key={i} />))}
      </Grid>
    </HubContext.Provider>
  );
}
