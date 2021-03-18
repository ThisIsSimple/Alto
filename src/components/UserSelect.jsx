import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import useSWR from 'swr';
import { getAllUsers } from '../services/user';
import { changeSelectedUsers } from '../reducers/userSelect';

const UserSelect = ({ className }) => {
  const dispatch = useDispatch();

  const selectedUsers = useSelector(({ userSelectReducer }) => userSelectReducer.selectedUsers);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: '.5rem',
      borderColor: 'rgb(209, 213, 219)',
      paddingTop: '.2rem',
      paddingBottom: '.2rem',
      paddingLeft: 'calc(1rem - 8px)',
      paddingRight: 'calc(1rem - 8px)',

      ':hover': {
        borderColor: 'rgb(209, 213, 219)',
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,

      ':active': {
        ...styles[':active'],
      },

      alignItems: 'center',
      display: 'flex',

      ':before': {
        ...styles[':before'],
        background: `url(${data.profileImage || '/static/images/profile_blank.jpg'})`,
        backgroundSize: 'cover',
        borderRadius: 50,
        border: '1px solid #dddddd',
        content: '" "',
        display: 'block',
        marginRight: 16,
        height: 45,
        width: 45,
      },
    }),
    multiValue: (styles, { data }) =>
      // const color = chroma(data.color);
      ({
        ...styles,
        // backgroundColor: color.alpha(0.1).css(),
      }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  // const groupedOptions = [
  //   {
  //     label: 'Colours',
  //     options: colourOptions,
  //   },
  //   {
  //     label: 'Flavours',
  //     options: flavourOptions,
  //   },
  // ];

  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };

  const formatGroupLabel = (item) => (
    <div style={groupStyles}>
      <span>{item.label}</span>
      <span style={groupBadgeStyles}>{item.options.length}</span>
    </div>
  );

  const handleUserSelect = (users) => {
    dispatch(changeSelectedUsers(users));
  };

  const userLoader = useSWR('users/', () =>
    getAllUsers().then((res) =>
      res.map((value) => ({
        value: value.id,
        label: `${value.name} ${value.rank ? value.rank.name : ''}`,
        profileImage: value.profile_image,
      })),
    ),
  );

  useEffect(() => {}, []);

  return (
    // <AsyncSelect
    //   isMulti
    //   defaultOptions={[{ value: 1, label: 'asdf' }]}
    //   loadOptions={userLoader.data}
    //   options={userLoader.data}
    //   // options={groupedOptions}
    //   // formatGroupLabel={formatGroupLabel}
    // />
    <>
      {userLoader.data && (
        <Select
          className={className}
          isMulti
          defaultValue={selectedUsers}
          options={userLoader.data}
          styles={colourStyles}
          placeholder="담당자"
          onChange={handleUserSelect}
        />
      )}
    </>
  );
};

UserSelect.defaultProps = {
  className: '',
};

UserSelect.propTypes = {
  className: PropTypes.string,
};

export default UserSelect;
