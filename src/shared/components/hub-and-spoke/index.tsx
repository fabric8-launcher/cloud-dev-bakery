import * as React from 'react';
import { Button, Grid, GridItem } from '@patternfly/react-core';

import './hub-and-spoke.scss';
import { EditIcon } from '@patternfly/react-icons';
import { useContext, useState } from 'react';

interface HubEdition {
  selected?: React.ReactNode;
  open(comp: React.ReactNode);
  close();
}

const EditionContext = React.createContext<HubEdition | undefined>(undefined);

interface HubProps {
  title: string;
  edition: React.ReactNode;
  width?: 'half' | 'full';
  children: React.ReactNode;
}

export function Hub(props: HubProps) {
  const hubEdition = useContext(EditionContext);
  const size = props.width === 'full' ? 12 : 6;
  const onEdit = () => {
    if (hubEdition) {
      hubEdition.open(props.edition);
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
        {props.children}
      </div>
    </GridItem>
  );
}

interface HubAndSpokeProps {
  hubs: React.ReactNode[];
}

export function HubAndSpoke(props: HubAndSpokeProps) {

  const [selectedEdition, setSelectedEdition] = useState<React.ReactNode | undefined>(undefined);

  const editionContext = {
    selected: selectedEdition,
    open: (comp: React.ReactNode) => {
      setSelectedEdition(comp);
    },
    close: () => {
      setSelectedEdition(undefined);
    },
  };

  return (
    <EditionContext.Provider value={editionContext}>
      <Grid className="hub-and-spoke-container" gutter={'sm'}>
        {selectedEdition ? (
            <GridItem className="hub-and-spoke-edition" span={12}>
              {selectedEdition}
            </GridItem>
        ) : props.hubs}
      </Grid>
    </EditionContext.Provider>
  );
}
