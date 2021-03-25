import React from 'react'
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                <h3> Main content </h3>
            </main>
        </div>
    )
}
