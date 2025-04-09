import { ReactNode } from 'react';
import './globals.css'; // 전역 스타일 가져오기

type LayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}