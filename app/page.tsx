"use client" // 告訴系統這是一個可以互動的頁面
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <main className="min-h-screen pb-28 bg-white text-black">
      {/* 頂部藍色標題列 (高對比) */}
      <div className="bg-blue-800 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">2025 臺波氫能訪團</h1>
        <p className="text-xl opacity-90 mt-1">團長隨行數位手冊</p>
      </div>

      {/* 內容區：依據分頁顯示 */}
      <div className="p-5">
        
        {activeTab === 'schedule' && (
          <div className="space-y-5">
            <h2 className="text-4xl font-black text-blue-900 border-b-4 border-blue-200 pb-2">今日行程</h2>
            
            {/* 行程卡片 1 - 參考手冊 P.3 */}
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-3xl shadow-sm">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-lg font-bold">09:30 - 10:45</span>
              <h3 className="text-3xl font-bold mt-2">拜會波蘭經濟部 (MRiT)</h3>
              <p className="text-xl text-gray-700 mt-2">地點：華沙市中心</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 text-white text-xl px-6 py-3 rounded-xl font-bold flex-1">開啟地圖</button>
                <button className="bg-gray-200 text-black text-xl px-6 py-3 rounded-xl font-bold">服裝: 正式</button>
              </div>
            </div>

            {/* 行程卡片 2 - 參考手冊 P.4 */}
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-3xl shadow-sm">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-lg font-bold">14:00 - 15:00</span>
              <h3 className="text-3xl font-bold mt-2">拜會波蘭氣候與環境部</h3>
              <p className="text-xl text-gray-700 mt-2">重點：氫能政策交流</p>
            </div>
          </div>
        )}

        {activeTab === 'speech' && (
          <div className="space-y-5">
            <h2 className="text-4xl font-black text-blue-900 border-b-4 border-blue-200 pb-2">致詞參考</h2>
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-3xl">
              <p className="text-red-700 font-bold text-2xl mb-2">【開場白 - 中文】</p>
              <p className="text-2xl leading-relaxed mb-6 font-medium">
                「女士先生們午安，非常榮幸有這個機會代表臺灣經濟部能源署與波蘭能源部進行交流。臺波自 2023 年簽署備忘錄後，一直保持良好互動...」
              </p>
              <p className="text-blue-700 font-bold text-2xl mb-2">【Opening - English】</p>
              <p className="text-2xl leading-relaxed italic">
                "Good afternoon, ladies and gentlemen. It’s an honor to lead the Taiwan Hydrogen Delegation to meet representative hydrogen industries in Poland..."
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 底部導覽列 (超大按鈕) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-gray-100 flex h-28 px-2 py-3 gap-2">
        <button 
          onClick={() => setActiveTab('schedule')}
          className={`flex-1 rounded-2xl flex flex-col items-center justify-center font-black text-2xl ${activeTab === 'schedule' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          📅 今日行程
        </button>
        <button 
          onClick={() => setActiveTab('speech')}
          className={`flex-1 rounded-2xl flex flex-col items-center justify-center font-black text-2xl ${activeTab === 'speech' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          🎤 致詞稿
        </button>
        <button 
          onClick={() => alert('已通知秘書與隨團翻譯！')}
          className="flex-1 rounded-2xl bg-red-100 text-red-700 flex flex-col items-center justify-center font-black text-2xl"
        >
          🆘 緊急求助
        </button>
      </div>
    </main>
  );
}