import { useState } from "react";
import { toast } from "react-toastify";
import { shopData } from "../data/shopData";
import { getAppointments, setAppointments } from "../utils/localStorage";

export default function BookingForm({ user }) {
  const [formData, setFormData] = useState({
    serviceId: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { serviceId, date, time } = formData;

    if (!serviceId || !date || !time) {
      toast.error("Alle verplichte velden invullen");
      return;
    }

    // 🔒 Date validation (never trust the UI)
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      toast.error("Datum moet in de toekomst liggen");
      return;
    }

    // 🕒 Combine date + time into ONE datetime
    const appointmentDateTime = new Date(`${date}T${time}`);

    if (appointmentDateTime < new Date()) {
      toast.error("Tijdstip ligt in het verleden");
      return;
    }

    const service = shopData.services.find(
      (s) => s.id === Number(serviceId)
    );

    const newAppointment = {
      id: Date.now(),
      user,
      service,
      dateTime: appointmentDateTime.toISOString(),
      notes: formData.notes
    };

    const updatedAppointments = [
      ...getAppointments(),
      newAppointment
    ];

    setAppointments(updatedAppointments);
    toast.success("Afspraak succesvol geboekt");

    // reset form als succesvol ingediend
    setFormData({
      serviceId: "",
      date: "",
      time: "",
      notes: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Afspraak boeken</h2>

      {/* Service */}
      <div>
        <label>Service *</label>
        <select
          value={formData.serviceId}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              serviceId: e.target.value
            }))
          }
        >
          <option value="">Kies een service</option>
          {shopData.services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} – €{s.price}
            </option>
          ))}
        </select>
      </div>

      {/* Datum */}
      <div>
        <label>Datum *</label>
        <input
          type="date"
          value={formData.date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              date: e.target.value
            }))
          }
        />
      </div>

      {/* Tijd */}
      <div>
        <label>Tijd *</label>
        <select
          value={formData.time}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              time: e.target.value
            }))
          }
        >
          <option value="">Kies tijd</option>
          {[
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00"
          ].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Boek afspraak</button>
    </form>
  );
}