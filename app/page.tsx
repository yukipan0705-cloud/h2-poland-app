"use client"
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [error, setError] = useState('');

  // 檢查是否曾經登入過 (讓長輩不用每次進來都輸入)
  useEffect(() => {
    const savedAuth = localStorage.getItem('h2_auth');
    if (savedAuth === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    if (password === '2025H2') {
      setIsAuthenticated(true);
      localStorage.setItem('h2_auth', 'true'); // 記住登入狀態
    } else {
      setError('密碼錯誤，請重新輸入');
    }
  };

  // --- 畫面一：密碼登入介面 ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-black">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border-2 border-blue-200 text-center">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">請輸入訪團驗證碼</h1>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="請輸入密碼"
            className="w-full text-center text-4xl p-4 border-4 border-gray-300 rounded-2xl mb-4 focus:border-blue-500 outline-none"
          />
          {error && <p className="text-red-600 text-xl font-bold mb-4">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 text-white text-3xl font-black py-6 rounded-2xl active:bg-blue-900 transition-colors"
          >
            登入觀看行程
          </button>
          <p className="mt-6 text-gray-500 text-lg">提示：請見紙本手冊首頁</p>
        </div>
      </div>
    );
  }

  // --- 畫面二：正式內容介面 (你原本的內容) ---
  return (
    <main className="min-h-screen pb-28 bg-white text-black">
      {/* 頂部藍色標題列 */}
      <div className="bg-blue-800 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">2025 臺波氫能訪團</h1>
        <p className="text-xl opacity-90 mt-1">團長隨行數位手冊</p>
      </div>

      <div className="p-5">
        {activeTab === 'schedule' && (
          <div className="space-y-5">
            <h2 className="text-4xl font-black text-blue-900 border-b-4 border-blue-200 pb-2">今日行程</h2>
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-3xl shadow-sm">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-lg font-bold">09:30 - 10:45</span>
              <h3 className="text-3xl font-bold mt-2">拜會波蘭經濟部 (MRiT)</h3>
              <p className="text-xl text-gray-700 mt-2 font-bold underline">地點：Pl. Trzech Krzyży 3/5</p>
              <button onClick={() => window.open('https://maps.google.com/?q=Ministry+of+Economic+Development+and+Technology+Warsaw')} className="mt-4 w-full bg-blue-600 text-white text-2xl py-4 rounded-xl font-bold">🗺️ 開啟導航</button>
            </div>
          </div>
        )}

        {activeTab === 'speech' && (
          <div className="space-y-5 text-black">
            <h2 className="text-4xl font-black text-blue-900 border-b-4 border-blue-200 pb-2">致詞參考</h2>
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-3xl">
              <p className="text-red-700 font-bold text-2xl mb-2">【開場白 - 中文】</p>
              <p className="text-2xl leading-relaxed mb-6 font-medium">「女士先生們午安...」</p>
            </div>
          </div>
        )}
      </div>

      {/* 底部導覽列 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-gray-100 flex h-28 px-2 py-3 gap-2">
        <button onClick={() => setActiveTab('schedule')} className={`flex-1 rounded-2xl flex flex-col items-center justify-center font-black text-2xl ${activeTab === 'schedule' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'}`}>📅 行程</button>
        <button onClick={() => setActiveTab('speech')} className={`flex-1 rounded-2xl flex flex-col items-center justify-center font-black text-2xl ${activeTab === 'speech' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'}`}>🎤 致詞</button>
        <button onClick={() => window.location.href='tel:+48123456789'} className="flex-1 rounded-2xl bg-red-100 text-red-700 flex flex-col items-center justify-center font-black text-2xl">🆘 秘書</button>
      </div>
    </main>
  );
}