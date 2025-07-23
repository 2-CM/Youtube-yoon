// 로그인 상태 관리 (로그인된 유저 상태를 전역으로 관리)

import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Context 생성
const AuthContext = createContext();

// Context Provider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Firebase 로그인 상태 변화 감지, 컴포넌트가 마운트될 때 딱 한 번 실행
    useEffect(() => {
        // onAuthStateChanged가 로그인 상태 변화를 감시, 변화가 있을 때마다 user 정보를 넘겨 줌
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // 로그인 상태 감시 시작
            setCurrentUser(user); // 로그인, 로그아웃 시에 실행됨
        });

        // 컴포넌트가 사라질 때(언마운트) 리스너 정리 (메모리 누수 방지)
        // onAuthStateChanged 함수는 "리스너 등록을 해제하는 함수"를 반환해 줌
        return () => unsubscribe(); // 로그인 상태 감시를 중지
    }, []);

    return (
        // 하위 컴포넌트에 currentUser 공유
        // AuthContext.Provider 안에 있는 컴포넌트들은 currentUser를 쓸 수 있음
        // children -> React 컴포넌트의 중간에 들어가는 자식 컴포넌트들
        <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
    );
};
