// 로그인, 로그아웃

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { auth } from '../firebase';

// 구글 로그인 함수
export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        return result.user; // 로그인 성공한 사용자 객체 반환
    } catch (error) {
        console.error('Google 로그인 실패:', error);
        throw error;
    }
};

// 로그아웃 함수
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('로그아웃 실패:', error);
        throw error;
    }
};
