'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';

const PasswordPage = () => {
  const [password, setPassword] = useState(['', '', '', '', '', '']);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const passwordRoutes = {
    'BPC847': '/roadmap/0-10k',
    'BPC392': '/roadmap/10k',
    'BPC615': '/roadmap/10k-50k',
    'BPC284': '/roadmap/50k-100k',
    'BPC739': '/roadmap/100k-500k',
    'BPC156': '/roadmap/500k-1M',
    'BPC493': '/roadmap/1M-5M'
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);
    setError('');

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !password[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredPassword = password.join('');
    
    if (enteredPassword in passwordRoutes) {
      setIsLoading(true);
      setTimeout(() => {
        window.location.href = passwordRoutes[enteredPassword as keyof typeof passwordRoutes];
      }, 1000);
    } else {
      setError('Mot de passe incorrect');
      setPassword(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    if (pastedData.length === 6) {
      const newPassword = pastedData.split('').slice(0, 6);
      setPassword(newPassword);
      setError('');
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-black rounded-2xl shadow-xl p-8 space-y-6 border border-[#9B8E7D]">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-[#9B8E7D] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaLock size={24} className="text-[#FFF1DE]" />
            </motion.div>
            <h1 className="text-2xl font-['Anton'] text-[#FFF1DE] mb-2">Accès à ta roadmap personnalisée</h1>
            <p className="text-[#9B8E7D] font-['Montserrat']">Entre ton mot de passe reçu par mail et découvre ta roadmap</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center gap-2">
              {password.map((char, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type={showPassword ? "text" : "password"}
                  value={char}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-xl bg-black border border-[#9B8E7D] text-[#FFF1DE] rounded-lg focus:ring-2 focus:ring-[#9F99EB] focus:border-transparent transition-all duration-200 font-['Montserrat']"
                  maxLength={1}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#9B8E7D] hover:text-[#FFF1DE] transition-colors duration-200"
              >
                {showPassword ? (
                  <span className="flex items-center justify-center">
                    <FaEyeSlash size={20} />
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaEye size={20} />
                  </span>
                )}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm font-['Montserrat'] text-center"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#9F99EB] text-black py-3 rounded-lg font-['Archivo_Black'] hover:bg-[#8A84D9] transition-colors duration-200 relative"
            >
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                  />
                </motion.div>
              ) : (
                'Accéder'
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordPage; 