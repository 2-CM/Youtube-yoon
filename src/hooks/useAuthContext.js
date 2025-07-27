// AuthContext를 간편하게 사용하기 위한 커스텀 훅
// 매번 useContext(AuthContext)를 반복하지 않기 위해 분리

import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => useContext(AuthContext);
