import React from 'react'
import { Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_BUTTON_NAME } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';

export default function ShowRowsButton() {
  const dispatch = useDispatch();
  const visibleRows = useSelector(state => state.visibleRowsReducer.visibleRows);

  function onHideButtonClick() {
    dispatch(actionCreator.changeVisibleRows(null));
  } 

  return (
    <Button
      type={ visibleRows ? 'primary' : 'default' }
      onClick={onHideButtonClick}
    >
      { HIDE_BUTTON_NAME.showRowsButtonName }
    </Button>
  );
}