import { Outlet } from '@umijs/max';
import { FC } from 'react';
import './index.scss';

const Layout: FC = () => (
  <>
    <div className="main-body">
      <Outlet />
    </div>
    <footer className="main-footer">{`v${VERSION}`}</footer>
  </>
);

export default Layout;
