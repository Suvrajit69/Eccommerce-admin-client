
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@/features/auth/auth'; 

const RequireAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const isToken = useSelector(selectCurrentToken)
    const router = useRouter();

    useEffect(() => {
      if (!isToken) {
        router.push('/signup');
      }
    }, [isToken, router]);

    if (!isToken) {
      return null; // You can return a loading spinner or custom message here
    }

    return <WrappedComponent {...props} />;
  };
};

export {RequireAuth};
