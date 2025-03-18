import React, { useState } from 'react';
import Input from '../components/Input';
import { Search } from 'lucide-react';

export default function CRM() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex h-screen bg-gray-100 p-4">
            <div className="flex gap-2 mb-4">
                <Input placeholder="Buscar cliente..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="p-2 bg-blue-500 text-white rounded"><Search /></button>
            </div>
        </div>
    );
}
