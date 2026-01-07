import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { setUserProfile } from '../utils/localStorage';

export default function UserProfile ({ initialProfile, onSave}) {
    const [form, setForm] = useState (initialProfile || {name: '', email: '', phone: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) {
            toast.error("Alle velden zijn verplicht");
            return;
        }
        setUserProfile(form);
        toast.success("Profiel opgeslagen");
        onSave(form);
    };

    return (
        <form onSubmit={handleSubmit} className="card">
            <h2>Profiel</h2>
            <input placeholder='Naam' value={form.name} onChange={e => setForm ({...form, name: e.target.value})}/>
            <input placeholder='Email' type="email" value={form.email} onChange={e => setForm ({...form, email: e.target.value})}/>
            <input placeholder='Telefoon' value={form.phone} onChange={e => setForm ({...form, phone: e.target.value})}/>
            <button type='submit'>Opslaan</button>
            </form>
    );
}