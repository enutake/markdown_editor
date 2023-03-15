import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'
import { History } from './pages/history'
import { useStateWithStorage } from './hooks/use_state_with_storage';

const GlobalStyle = createGlobalStyle`
    body * {
        box-sizing: border-box;
    }
`
const StorageKey = '/editor:text'
const root = createRoot(
    document.getElementById('app')
);

const Main: React.FC = () => {
    const [text, setText] = useStateWithStorage('', StorageKey)

    return (
        <>
        <GlobalStyle />
        <React.StrictMode>
            <BrowserRouter>
            <Routes>
                <Route path="/editor" element={
                    <Editor
                        text={text}
                        setText={setText} 
                    />
                } />
                <Route path="/history" element={
                    <History 
                        setText={setText}
                    />
                } />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            </BrowserRouter>
        </React.StrictMode>
        </>
    )
}

root.render(<Main />)
