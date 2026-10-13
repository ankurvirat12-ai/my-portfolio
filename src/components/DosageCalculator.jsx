import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalculator, FaPills, FaWeight, FaChild, FaHeartbeat, FaInfoCircle } from 'react-icons/fa';

const DosageCalculator = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [activeTab, setActiveTab] = useState('pediatric');

    // Pediatric State
    const [age, setAge] = useState(6);
    const [weightKg, setWeightKg] = useState(20);
    const [adultDose, setAdultDose] = useState(500);
    const [selectedDrug, setSelectedDrug] = useState('Paracetamol');

    // Weight-Based State
    const [patientWeight, setPatientWeight] = useState(60);
    const [doseRate, setDoseRate] = useState(15); // mg/kg/day
    const [frequency, setFrequency] = useState(3); // times per day (TID)

    // BSA State
    const [bsaHeight, setBsaHeight] = useState(165);
    const [bsaWeight, setBsaWeight] = useState(62);

    // Preset drugs for quick testing
    const drugPresets = [
        { name: 'Paracetamol', adultDose: 500, note: 'Analgesic / Antipyretic' },
        { name: 'Amoxicillin', adultDose: 250, note: 'Broad-spectrum Antibiotic' },
        { name: 'Ibuprofen', adultDose: 400, note: 'NSAID / Anti-inflammatory' },
        { name: 'Cetirizine', adultDose: 10, note: 'Antihistamine' },
    ];

    const handleSelectDrug = (preset) => {
        setSelectedDrug(preset.name);
        setAdultDose(preset.adultDose);
    };

    // Calculations
    const weightLbs = (weightKg * 2.20462).toFixed(1);
    const youngsDose = ((age / (age + 12)) * adultDose).toFixed(1);
    const clarksDose = ((Number(weightLbs) / 150) * adultDose).toFixed(1);

    const totalDailyDose = (patientWeight * doseRate).toFixed(1);
    const perDoseAmount = (totalDailyDose / frequency).toFixed(1);

    const bsaValue = Math.sqrt((bsaHeight * bsaWeight) / 3600).toFixed(2);

    return (
        <section id="tools" className="section-container relative" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
                    >
                        <FaCalculator className="text-sm" /> Clinical Utility Demo
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        Clinical Dosage Calculator
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4">
                        An interactive pharmaceutical tool demonstrating dosage regimen calculations based on pharmacokinetics, age, body weight, and surface area.
                    </p>
                </div>

                {/* Calculator Container */}
                <div className="max-w-4xl mx-auto glass-card-featured p-6 md:p-10">
                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8">
                        <button
                            onClick={() => setActiveTab('pediatric')}
                            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'pediatric'
                                ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                                : 'text-gray-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            <FaChild className="text-sm" />
                            Pediatric Dosing
                        </button>
                        <button
                            onClick={() => setActiveTab('weight')}
                            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'weight'
                                ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                                : 'text-gray-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            <FaWeight className="text-sm" />
                            Weight-Based (mg/kg)
                        </button>
                        <button
                            onClick={() => setActiveTab('bsa')}
                            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'bsa'
                                ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                                : 'text-gray-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            <FaHeartbeat className="text-sm" />
                            BSA Formula
                        </button>
                    </div>

                    {/* Tab 1: Pediatric Dosing */}
                    {activeTab === 'pediatric' && (
                        <div className="space-y-6">
                            {/* Drug Preset Buttons */}
                            <div>
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                                    Quick Drug Presets:
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                    {drugPresets.map((preset) => (
                                        <button
                                            key={preset.name}
                                            onClick={() => handleSelectDrug(preset)}
                                            className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${selectedDrug === preset.name
                                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/10'
                                                : 'bg-slate-800/60 border-slate-700/60 text-gray-300 hover:border-slate-600'
                                                }`}
                                        >
                                            <span className="font-bold block text-white">{preset.name}</span>
                                            <span className="text-[10px] text-gray-400 block">{preset.adultDose} mg std.</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Inputs Grid */}
                            <div className="grid sm:grid-cols-3 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Child Age (Years)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="12"
                                        value={age}
                                        onChange={(e) => setAge(Math.max(1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                    <span className="text-[10px] text-gray-400 mt-1 block">Valid for 1 to 12 yrs</span>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Child Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        min="3"
                                        max="60"
                                        value={weightKg}
                                        onChange={(e) => setWeightKg(Math.max(1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                    <span className="text-[10px] text-gray-400 mt-1 block">≈ {weightLbs} lbs</span>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Adult Standard Dose (mg)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={adultDose}
                                        onChange={(e) => setAdultDose(Math.max(1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                    <span className="text-[10px] text-gray-400 mt-1 block">{selectedDrug}</span>
                                </div>
                            </div>

                            {/* Results Comparison Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                                            Young's Rule (Age-based)
                                        </span>
                                        <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full">
                                            Age / (Age + 12)
                                        </span>
                                    </div>
                                    <div className="text-3xl font-display font-bold text-white mt-1">
                                        {youngsDose} <span className="text-sm font-normal text-gray-400">mg</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Calculated for a {age}-year-old child using clinical age proportion.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                                            Clark's Rule (Weight-based)
                                        </span>
                                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                                            Weight(lbs) / 150
                                        </span>
                                    </div>
                                    <div className="text-3xl font-display font-bold text-white mt-1">
                                        {clarksDose} <span className="text-sm font-normal text-gray-400">mg</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Calculated for {weightKg} kg ({weightLbs} lbs) based on average adult body mass.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Weight-Based Dosing */}
                    {activeTab === 'weight' && (
                        <div className="space-y-6">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Patient Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={patientWeight}
                                        onChange={(e) => setPatientWeight(Math.max(1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                </div>

                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Dosage Rate (mg / kg / day)
                                    </label>
                                    <input
                                        type="number"
                                        min="0.1"
                                        step="0.5"
                                        value={doseRate}
                                        onChange={(e) => setDoseRate(Math.max(0.1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                </div>

                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Doses Per Day
                                    </label>
                                    <select
                                        value={frequency}
                                        onChange={(e) => setFrequency(Number(e.target.value))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    >
                                        <option value="1">Once Daily (OD / q24h)</option>
                                        <option value="2">Twice Daily (BID / q12h)</option>
                                        <option value="3">Three Times Daily (TID / q8h)</option>
                                        <option value="4">Four Times Daily (QID / q6h)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block">Total Daily Dosage</span>
                                    <div className="text-3xl font-display font-bold text-cyan-300 mt-1">
                                        {totalDailyDose} <span className="text-sm font-normal text-gray-400">mg / 24 hours</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        {patientWeight} kg × {doseRate} mg/kg/day
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block">Individual Dose Amount</span>
                                    <div className="text-3xl font-display font-bold text-emerald-300 mt-1">
                                        {perDoseAmount} <span className="text-sm font-normal text-gray-400">mg per dose</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Divided into {frequency} administrations throughout the day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: BSA Mosteller Formula */}
                    {activeTab === 'bsa' && (
                        <div className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Height (cm)
                                    </label>
                                    <input
                                        type="number"
                                        min="50"
                                        max="250"
                                        value={bsaHeight}
                                        onChange={(e) => setBsaHeight(Math.max(1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                </div>

                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                                    <label className="text-xs text-gray-400 font-medium block mb-1">
                                        Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="250"
                                        value={bsaWeight}
                                        onChange={(e) => setBsaWeight(Math.max(1, Number(e.target.value)))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-400"
                                    />
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-950/30 to-slate-900 border border-primary-500/30 text-center">
                                <span className="text-xs uppercase tracking-wider text-primary-300 font-semibold block mb-1">
                                    Mosteller Body Surface Area (BSA)
                                </span>
                                <div className="text-4xl md:text-5xl font-display font-bold gradient-text my-2">
                                    {bsaValue} <span className="text-lg font-normal text-gray-400">m²</span>
                                </div>
                                <p className="text-xs text-gray-400 max-w-md mx-auto">
                                    Formula: √(Height × Weight / 3600). Essential for narrow therapeutic index oncology, renal dosing, and pediatric critical care medications.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Scientific Footer Note */}
                    <div className="mt-8 pt-4 border-t border-slate-800 flex items-start gap-2.5 text-xs text-gray-400">
                        <FaInfoCircle className="text-cyan-400 text-sm mt-0.5 flex-shrink-0" />
                        <p className="leading-relaxed">
                            <strong>Pharmacology Note:</strong> This interactive calculator is developed to demonstrate clinical pharmacy principles and dosing formulas studied in B. Pharm coursework. All drug administration requires clinical confirmation.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default DosageCalculator;
