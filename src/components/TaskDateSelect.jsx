import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import { ko } from 'react-date-range/dist/locale';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateButton from './utils/DateButton';
import { changeStartDate, changeEndDate } from '../reducers/taskCreate';

const TaskDateSelect = () => {
  const dispatch = useDispatch();
  const calendarRef = useRef();

  const startDate = useSelector(({ taskCreateReducer }) => taskCreateReducer.startDate);
  const endDate = useSelector(({ taskCreateReducer }) => taskCreateReducer.endDate);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateObject, setDateObject] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const datePresets = [
    {
      text: '오늘',
      color: 'red',
      _startDate: new Date(),
      _endDate: new Date(),
    },
    {
      text: '내일',
      color: 'blue',
      _startDate: addDays(new Date(), 1),
      _endDate: addDays(new Date(), 1),
    },
    {
      text: '이번주',
      color: 'green',
      _startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
      _endDate: addDays(endOfWeek(new Date(), { weekStartsOn: 1 }), -2),
    },
    {
      text: '다음주',
      color: 'gray',
      _startDate: startOfWeek(addDays(new Date(), 7), { weekStartsOn: 1 }),
      _endDate: addDays(endOfWeek(addDays(new Date(), 7), { weekStartsOn: 1 }), -2),
    },
    {
      text: '이번달',
      color: 'gray',
      _startDate: startOfMonth(new Date()),
      _endDate: endOfMonth(new Date()),
    },
  ];

  const handleDateSelect = (_startDate, _endDate) => {
    setDateObject([
      {
        startDate: _startDate,
        endDate: _endDate,
        key: 'selection',
      },
    ]);
    dispatch(changeStartDate(_startDate));
    dispatch(changeEndDate(_endDate));
  };

  useEffect(() => {
    setDateObject([
      {
        startDate: startDate || new Date(),
        endDate,
        key: 'selection',
      },
    ]);
  }, []);

  return (
    <>
      {datePresets.map(({ text, color, _startDate, _endDate }) => (
        <DateButton
          text={text}
          color={color}
          onClick={() => handleDateSelect(_startDate, _endDate)}
          selected={isSameDay(startDate, _startDate) && isSameDay(endDate, _endDate)}
        />
      ))}
      <DateButton
        text="직접입력"
        color="gray"
        onClick={() => setOpenCalendar(!openCalendar)}
        selected={startDate && endDate}
      />
      <DateButton
        text="기한없음"
        color="gray"
        onClick={() => handleDateSelect(undefined, undefined)}
        selected={!startDate && !endDate}
      />
      {openCalendar && (
        <div className="absolute shadow" ref={calendarRef}>
          <DateRange
            onChange={(item) => handleDateSelect(item.selection.startDate, item.selection.endDate)}
            minDate={addDays(new Date(), -100)}
            maxDate={addDays(new Date(), 900)}
            direction="vertical"
            scroll={{ enabled: true }}
            ranges={dateObject}
            locale={ko}
          />
        </div>
      )}
    </>
  );
};

export default TaskDateSelect;
