import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';
import { useHistory, Link } from 'react-router-dom';
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input/input';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import Input from '../../components/utils/Input';
import Button from '../../components/utils/Button';
import Select from '../../components/utils/Select';
import 'react-phone-number-input/style.css';
import { getAllRanks } from '../../services/rank';
import { postNewUser } from '../../services/user';

const AuthRegister = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    nickname: '',
    profile: '',
    profileImage: undefined,
    phone: '',
    enteredAt: undefined,
    birthday: undefined,
    rank: undefined,
  });
  const { data: ranks, error } = useSWR('ranks/', () => getAllRanks());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidPhoneNumber(userData.phone)) {
      const result = await postNewUser({
        ...userData,
        phone: formatPhoneNumber(userData.phone).replaceAll('-', ''),
        enteredAt: format(new Date(userData.enteredAt), 'yyyy-MM-dd'),
      });

      if (result) {
        history.replace('/');
        toast.success(`환영합니다, ${result.name}님!`);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Alto: Register</title>
      </Helmet>

      <div className="overflow-scroll">
        <header className="flex justify-center mb-6">
          <img
            className="w-12 mr-3"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Logo"
          />
          <h2 className="text-4xl font-bold">Project Alto</h2>
        </header>

        <div className="card p-5 md:p-5 lg:p-10 max-w-xl">
          <header className="mb-4">
            <h3 className="font-bold">회원가입</h3>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">아이디</div>
              <Input
                type="text"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.currentTarget.value })}
                className="w-full"
                placeholder="아이디"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">비밀번호</div>
              <Input
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.currentTarget.value })}
                className="w-full"
                placeholder="비밀번호"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">이메일</div>
              <Input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.currentTarget.value })}
                className="w-full"
                placeholder="이메일"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">이름</div>
              <Input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.currentTarget.value })}
                className="w-full"
                placeholder="이름"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">프로필</div>
              <Input
                type="file"
                onChange={(e) => {
                  setUserData({ ...userData, profileImage: e.currentTarget.files[0] });
                }}
                className="w-full"
                placeholder="프로필 사진"
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">전화번호</div>
              <PhoneInput
                country="KR"
                initialValueFormat="national"
                value={userData.phone}
                international={false}
                onChange={(value) => setUserData({ ...userData, phone: value })}
                className="w-full border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
                placeholder="전화번호"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">입사일</div>
              <Input
                type="date"
                value={userData.enteredAt}
                onChange={(e) => setUserData({ ...userData, enteredAt: e.currentTarget.value })}
                className="w-full"
                placeholder="입사일"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">생일</div>
              <Input
                type="date"
                value={userData.birthday}
                onChange={(e) => setUserData({ ...userData, birthday: e.currentTarget.value })}
                className="w-full"
                placeholder="생일"
                required
              />
            </div>
            <div className="flex items-center mb-4 text-right">
              <div className="w-20 mr-5">직책</div>
              {ranks && (
                <Select
                  className="w-full"
                  value={userData.rank}
                  defaultValue={undefined}
                  onChange={(e) => setUserData({ ...userData, rank: e.currentTarget.value })}
                >
                  {ranks.map((rank) => (
                    <option key={rank.id} value={rank.id}>
                      {rank.name}
                    </option>
                  ))}
                </Select>
              )}
            </div>

            <div className="flex flex-col items-center">
              <Button text="Register" type="submit" className="mb-5" />
              <div className="w-full border-t text-center pt-5">
                또는{' '}
                <Link to="/auth/login" className="text-indigo-500">
                  로그인
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthRegister;
