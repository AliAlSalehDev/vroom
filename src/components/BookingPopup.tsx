"use client";

import { useState } from "react";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  { time: "09:00 AM", disabled: false },
  { time: "11:00 AM", disabled: true },
  { time: "01:00 PM", disabled: false },
  { time: "03:00 PM", disabled: false },
  { time: "05:00 PM", disabled: true },
  { time: "07:00 PM", disabled: false },
];

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [dateValue, setDateValue] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleClose = () => {
    setShowDate(false);
    setShowTime(false);
    setDateValue("");
    setSelectedSlot(null);
    onClose();
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "") {
      setShowDate(true);
      setDateValue("");
      setShowTime(false);
      setSelectedSlot(null);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
    if (e.target.value !== "") {
      setShowTime(true);
    }
  };

  const handleTimeSelect = (slot: string, disabled: boolean) => {
    if (disabled) return;
    setSelectedSlot(slot);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end booking-popup-overlay ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="booking-popup-content w-full h-[90vh] bg-[#1c1c1c] p-8 md:p-28 text-white relative overflow-y-auto"
        style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 text-2xl text-gray-400 hover:text-white"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ── Left: Form fields ─────────────────────────────────────────── */}
          <div className="space-y-4">
            <input type="text" placeholder="Name:" className="custom-input" />
            <input type="text" placeholder="Mobile:" className="custom-input" />
            <input type="text" placeholder="Email:" className="custom-input" />

            <div className="relative">
              <select className="custom-input appearance-none bg-[#1c1c1c]" defaultValue="">
                <option value="" disabled>Brand</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Nissan">Nissan</option>
                <option value="Toyota">Toyota</option>
                <option value="BMW">BMW</option>
                <option value="Porsche">Porsche</option>
                <option value="Lexus">Lexus</option>
                <option value="Honda">Honda</option>
                <option value="Tesla">Tesla</option>
                <option value="Ford">Ford</option>
                <option value="Hyundai">Hyundai</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>

            <div className="relative">
              <select
                className="custom-input appearance-none bg-[#1c1c1c]"
                defaultValue=""
                onChange={handleLocationChange}
              >
                <option value="" disabled>Location</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Ajman">Ajman</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                <option value="Fujairah">Fujairah</option>
                <option value="Umm Al Quwain">Umm Al Quwain</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>

            {showDate && (
              <div className="relative">
                <input
                  type="date"
                  value={dateValue}
                  onChange={handleDateChange}
                  className="custom-input"
                />
                <i className="fa-solid fa-calendar-days absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            )}

            {showTime && (
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-3">
                  Available Time Slots:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {TIME_SLOTS.map(({ time, disabled }) => (
                    <div
                      key={time}
                      className={`time-slot ${disabled ? "disabled" : ""} ${
                        selectedSlot === time ? "selected" : ""
                      }`}
                      onClick={() => handleTimeSelect(time, disabled)}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right: Summary + Pay ──────────────────────────────────────── */}
          <div className="flex flex-col py-2 pt-0">
            <div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-semibold">Gas Premium</p>
                    <p className="text-md text-gray-400">240 point inspections</p>
                  </div>
                  <p className="text-[#00f7ef] text-xl font-semibold">450 §</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-400">VAT %5</p>
                  <p className="text-[#00f7ef] font-semibold">22.5 §</p>
                </div>
              </div>

              <div className="mt-8 border border-gray-600 rounded-2xl p-4 flex justify-between items-center">
                <span className="uppercase tracking-widest font-semibold text-xl">Total</span>
                <span className="text-[#00f7ef] text-2xl font-semibold">472.5 §</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-4">
                Thank you! After payment you will receive a call shortly.
              </p>
              <button className="teal-btn text-black w-full py-3 rounded-full font-semibold mt-4 text-lg">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
