import { shopData  } from "../utils/shopData";

export default function ShopInfo() {
    return (
        <div className="card">
            <h2>{shopData.name}</h2>
            <p>{shopData.hours}</p>
            <ul>
                {shopData.services.map(s => (
                    <li key={s.id}>{s.name} - €{s.price} ({s.duration} min)</li>
                ))}
            </ul>
        </div>
    );
}