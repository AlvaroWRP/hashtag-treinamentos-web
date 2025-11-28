import { useState } from 'react';

export function useMessage() {
    const [user, setUser] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleMessage = (event) => {
        if (event.key === 'Enter') {
            setUser(event.target.value);
            setShowMessage(true);
        }
    };

    return { user, showMessage, handleMessage };
}
