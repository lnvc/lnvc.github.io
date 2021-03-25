import React from 'react';

interface AppProps {
    children: React.ReactNode;
}
const MainLayout = ({ children }: AppProps) => (
    <div>
        {children}
    </div>
);

export default MainLayout;
