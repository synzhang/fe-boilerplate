import useAuth from '@/hooks/useAuth';
import { Navigate, Outlet } from '@umijs/max';

export default () => {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <Outlet />;
  } else {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(window.location.href)}`}
      />
    );
  }
};
