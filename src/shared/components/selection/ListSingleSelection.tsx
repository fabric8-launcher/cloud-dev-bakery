import * as React from 'react';
import { DataList, DataListCell, DataListCheck, DataListItem } from '@patternfly/react-core';

export interface ViewItem {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  item: any;
}

interface ListItemProps {
  selected?: boolean;
  viewItem: ViewItem;
  onSelect: (item: any) => void;
}

function ListItem(props: ListItemProps) {
  const {viewItem, onSelect, selected = false} = props;
  const doOnSelect = (sel) => onSelect(viewItem.item);
  return (
    <DataListItem aria-labelledby="Selection item" isExpanded={false}>
      <DataListCheck aria-labelledby="Selection item check" name="Selection item check" onChange={doOnSelect} isChecked={selected}/>
      <DataListCell width={1}><img className={'runtime-icon'} src={viewItem.icon}/></DataListCell>
      <DataListCell width={2}>{viewItem.name}</DataListCell>
      <DataListCell width={3}>{viewItem.description}</DataListCell>
    </DataListItem>
  );
}

interface ListSingleSelectionProps<T> {
  selectedItem?: T;
  items?: T[];
  onSelect: (item: T) => void;
  mapToViewItem?: (item: T) => ViewItem;
  children?: React.ReactNode;
}

function defaultMapToViewItem(item: any): ViewItem {
  return {
    ...item,
    item,
  };
}

function ListSingleSelection<T>(props: ListSingleSelectionProps<T>) {
  const {children, items = [], onSelect, mapToViewItem = defaultMapToViewItem, selectedItem} = props;
  const selectedViewItem: ViewItem | undefined = selectedItem && mapToViewItem(selectedItem);
  return (
    <div className={'runtime-selector'}>
      <p>{children}</p>
      <DataList aria-label="Selection">
        {
          items.map(mapToViewItem).map((viewItem, i) => (
            <ListItem
              key={i}
              viewItem={viewItem}
              onSelect={onSelect}
              selected={selectedViewItem && selectedViewItem.id === viewItem.id}
            />)
          )
        }
      </DataList>
    </div>
  );
}

export default ListSingleSelection;
