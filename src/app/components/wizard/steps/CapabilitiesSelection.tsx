import * as React from 'react';

import { FetchedData } from '@/app/models/FetchedData';
import Capability from '@/app/models/Capability';
import SectionLoader from '@/shared/components/loader/SectionLoader';
import { DataList, DataListCell, DataListCheck, DataListItem } from '@patternfly/react-core';

interface CapabilityCardProps {
  capability: Capability;
  selected: boolean;

  onSelect(capability: Capability): void;

  onUnselect(capability: Capability): void;
}

function CapabilityCard(props: CapabilityCardProps) {
  const {capability, onSelect, onUnselect, selected} = props;
  const doOnSelect = () => {
    if (selected) {
      onUnselect(capability);
    } else {

      onSelect(capability);
    }
  };
  return (
    <DataListItem aria-labelledby="Selection item" isExpanded={false}>
      <DataListCheck aria-labelledby="Selection item check" name="Selection item check" onChange={doOnSelect} isChecked={selected}/>
      <DataListCell width={1}><img src={capability.icon}/></DataListCell>
      <DataListCell width={2}>{capability.name}</DataListCell>
      <DataListCell width={3}>{capability.description}</DataListCell>
    </DataListItem>
  );
}

interface CapabilitiesSelectorProps {
  capabilitiesData: FetchedData<Capability[]>;
  selectedCapabilities: Set<Capability>;

  onSelect(capability: Capability): void;

  onUnselect(capability: Capability): void;

  reload(): void;
}

function CapabilitiesSelection(props: CapabilitiesSelectorProps) {
  const {capabilitiesData, onSelect, selectedCapabilities, onUnselect} = props;
  return (
    <div className={'capabilities-selector'}>
      <SectionLoader loading={capabilitiesData.loading} error={capabilitiesData.error} reload={props.reload}>
        <p>Here you can choose a set of capabilities for your new application/service.</p>
        <DataList aria-label="Selection">
          {
            capabilitiesData.data.map((cap, i) => (
              <CapabilityCard
                key={i}
                capability={cap}
                onSelect={onSelect}
                onUnselect={onUnselect}
                selected={selectedCapabilities.has(cap)}
              />
            ))
          }
        </DataList>
      </SectionLoader>
    </div>
  );
}

export default CapabilitiesSelection;
