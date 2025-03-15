import NavBar from '@/components/Nav/NavBar';
import ThemeToggler from '@/components/ThemeToggler/DarkModeToggler';
import TanstackProviders from '@/query/TanstackProvider';
import ReduxProvider from '@/redux/ReduxProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cookies } from 'next/headers';

import '../globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

//todo: 프로젝트 개요 잡히면 수정
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // 다크모드 -> 서버사이드에서 쿠키 읽어오기
    const colorTheme = (await cookies()).get('mode');
    // 디폴트 : 라이트모드
    const isDarkMode: boolean = colorTheme?.value === 'dark';

    return (
        //html 태그에 붙이는게 좀더 컨벤션 이라고 합니다.
        <html lang="en" className={`${isDarkMode ? 'dark' : ''}`}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-light`}
            >
                <ReduxProvider>
                    <TanstackProviders>
                        <div className={`max-w-7xl mx-auto`}>
                            <ThemeToggler colorTheme={isDarkMode} />
                            <NavBar />
                            {children}
                        </div>
                    </TanstackProviders>
                </ReduxProvider>
            </body>
        </html>
    );
}
