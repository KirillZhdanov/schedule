import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import { USERS } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';
import './student-mentor.css'

export default function StudentMentorSwitch() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.optionsReducer.user);

  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);

  const onClick = (e) => {
    dispatch(actionCreator.changeUser(e.target.value));
    dispatch(actionCreator.saveOptions());
  }

	return (
		<Radio.Group
			value={user}
			buttonStyle="solid"
      className={`${isImpairedVersion ? 'impairedVersion' : ''} student-mentor-switch`} >
        { 
          Object.values(USERS).map(item => <Radio.Button
            className="student-mentor-button"
            value={item}
            key={item}
            onClick={onClick}
          >
            { item }
          </Radio.Button>)
        }
		</Radio.Group>
	);
}