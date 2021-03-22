import React from 'react';
import { Link } from 'react-router-dom';

const SideLayout = () => (
  <>
    <div
      className="h-screen hidden lg:block box-border bg-white border-r"
      style={{ flex: '0 0 300px' }}
    >
      <div className="w-full">
        <div className="h-16 flex justify-center items-center">
          <img
            src="http://gvm.kr/theme/NB-Basic/storage/image/logo-png_%EA%B8%80%EB%A1%9C%EB%B2%8C%EB%B9%84%EC%A0%84_s.png"
            alt="logo"
            className="h-12"
          />
        </div>
      </div>
      <div className="p-3">
        <Link
          to="/tasks"
          className="bg-gray-200 py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          대시보드
        </Link>
        <Link
          to="/tasks"
          className="bg-gray-200 py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          업무
        </Link>
        <Link
          to="/"
          className="py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center justify-between"
        >
          정기업무
          <span className="bg-red-500 rounded-full min-w-min h-full text-white px-2 w-5 flex items-center justify-center">
            100
          </span>
        </Link>
        <Link to="/" className="py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center">
          진행중인 업무
        </Link>
        <Link to="/" className="py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center">
          지시한 업무
        </Link>
        <Link
          to="/tasks"
          className="bg-gray-200 py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>{' '}
          프로젝트
        </Link>
        <Link
          to="/tasks"
          className="bg-gray-200 py-2 px-4 rounded-lg w-full text-left mb-3 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          캘린더
        </Link>
      </div>
    </div>
  </>
);

export default SideLayout;
