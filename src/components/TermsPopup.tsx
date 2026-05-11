"use client";

interface TermsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsPopup({ isOpen, onClose }: TermsPopupProps) {
  return (
    <div
      className={`fixed inset-0 z-[110] flex items-end terms-popup-overlay ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="terms-popup-content w-full bg-[#1c1c1c] p-8 md:p-28 text-white relative"
        style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-2xl text-gray-400 hover:text-white"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1">
            <h2 className="text-[45px] text-white mb-2 font-medium">Terms &amp; Conditions</h2>
            <div className="md:col-span-2 space-y-6 max-h-[60vh] overflow-y-auto pr-16 terms-scroll">
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-light">
                <p>
                  The inspection is strictly limited to the items listed in this
                  Inspection Report and does not extend to any other components
                  of the vehicle.
                </p>
                <p>
                  The inspection is visual and non-mechanical only. If you wish
                  to complete a mechanical inspection or an inspection of the
                  internal parts of the vehicle, Vroom Check recommends engaging
                  a specialized service provider.
                </p>
                <p>
                  Vroom Check does not inspect the vehicle&apos;s historical service
                  records, accident history, or recall notices.
                </p>
                <p>
                  While Vroom Check uses standardized methods for conducting
                  inspections, these methods may not identify all potential
                  issues. In particular, the inspection does not cover
                  intermittent or hidden problems that are not apparent at the
                  time of inspection.
                </p>
                <p>
                  This Inspection Report represents the condition of the vehicle
                  only at the time of inspection. If you are considering
                  purchasing the vehicle, it is your responsibility to conduct a
                  further inspection at the time of purchase.
                </p>
                <p>
                  This Inspection Report, including all intellectual property
                  rights therein, remains the exclusive property of Vroom Check.
                </p>
                <p>
                  This Inspection Report reflects Vroom Check&apos;s professional
                  opinion based on the vehicle&apos;s age and condition at the time
                  of inspection, and is intended to assist you in evaluating the
                  general condition of the vehicle. It does not constitute a
                  recommendation on whether to buy or sell the vehicle.
                </p>
                <p>
                  This Inspection Report is provided on an &quot;as-is&quot; basis for
                  informational purposes only and without warranties of any
                  kind. Vroom Check makes no representations or warranties about
                  the accuracy, completeness, or fitness of this report for any
                  specific purpose.
                </p>
                <p>
                  If this Inspection Report is provided directly to you by Vroom
                  Check, only you may rely on its content. Vroom Check accepts
                  no liability to any third party to whom you may choose to
                  share this report.
                </p>
                <p>
                  If this Inspection Report is provided to you by someone other
                  than Vroom Check, you may not rely on its content, and Vroom
                  Check accepts no liability to you in connection with this
                  Inspection Report.
                </p>
                <p>
                  Vroom Check has inspected the vehicle to the best of its
                  knowledge and ability, acting as a neutral, independent
                  inspection service. Vroom Check has no control over
                  information provided by the seller or third parties, and does
                  not guarantee the features, specifications, mileage, or
                  overall condition of the vehicle beyond what was observed at
                  the time of inspection.
                </p>
                <p>
                  Vroom Check shall not, under any circumstances, be liable to
                  compensate or reimburse the customer for repair costs, whether
                  arising from overlooked or undetected issues, or from
                  differences between inspection findings and subsequent garage
                  assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
