import * as React from 'react';

import { DataList, DataListCell, DataListItem, Modal } from '@patternfly/react-core';
import SectionLoader from '@/shared/components/loader/SectionLoader';

interface EventStatus {
  statusMessage: string;
  data?: {
    location?: string;
    error?: string;
  };
}

interface ProcessingAppProps {
  isOpen: boolean;
  progressEvents?: Array<{name: string, message: string}>;
  progressEventsResults?: EventStatus[];
  onClose?: () => {};
}

function StatusIcon(props: { status: Statuses }) {
  switch (props.status) {
    case 'progress':
      return (<span className="pficon-in-progress fa-spin"/>);
    case 'paused':
      return (<span className="pficon pficon-paused"/>);
    case 'completed':
      return (<span className="pficon pficon-ok"/>);
    case 'error':
      return (<span className="pficon error-circle-o"/>);
    default:
      throw new Error(`Invalid status ${status}`);
  }
}

type Statuses = 'progress' | 'completed' | 'error' | 'paused';

class ProcessingApp extends React.Component<ProcessingAppProps, {}> {
  public render() {

    const progressSteps: Array<{ id: number, name: string, message: string, status: Statuses }> = new Array(4);
    const length = this.props.progressEvents && this.props.progressEvents.length || 0;
    for (let i = 0; i < length; i++) {
      const step = this.props.progressEvents![i]!;
      const status = this.getStatus(step.name);
      progressSteps[i] = {
        id: i,
        name: step.name,
        message: step.message,
        status: status ? (status.data && status.data.error ? 'error' : 'completed') : 'progress',
      };
    }

    const ProgressEvent = ({event}) => (
      <DataListItem aria-labelledby="Progress event" isExpanded={false}>
        <DataListCell width={1}><StatusIcon status={event.status}/></DataListCell>
        <DataListCell width={4}>{event.message}</DataListCell>
      </DataListItem>
    );

    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose} title="Your application is getting created.." isLarge>
        <SectionLoader loading={!this.props.progressEvents}>
          <DataList aria-label="Progress events">
            {progressSteps.map(s => (<ProgressEvent key={s.id} event={s} />))}
          </DataList>
        </SectionLoader>
      </Modal>
    );
  }

  private getStatus = (eventName: string) => {
    return this.props.progressEventsResults && this.props.progressEventsResults.find(s => s.statusMessage === eventName);
  };
}

export default ProcessingApp;
