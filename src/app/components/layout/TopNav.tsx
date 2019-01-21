import * as React from 'react';
import './TopNav.scss';

interface TopNavProps {
  inProgress: boolean;
  authenticationEnabled: boolean;
  authenticated: boolean;
  userName?: string;
  logout: () => void;
  openAccountManagement: () => void;
}

const TopNav = (props: TopNavProps) => (
  <div>Header</div>
);

export default TopNav;
