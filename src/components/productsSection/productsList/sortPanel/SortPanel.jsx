import React, { useEffect, useRef, useState } from 'react';
import { DropDownBrands, InputPriceST, LabelST } from './SortPanel.styled';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setSortType } from '../../../../redux/data/slice';
import { selectSort } from '../../../../redux/data/selectors';

const SortPanel = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const rangePrice = ['popular', 'up', 'down'];
  const sortType = useSelector(selectSort);
  const onMouseDownBrand = sortType => {
    dispatch(setSortType(sortType));
    setIsOpenDropDown(false);
  };

  const handleClickOutSide = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpenDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, []);

  //   useEffect(() => {
  //     dispatch(setSortType(values.price));
  //   }, [dispatch, values.price]);

  return (
    <LabelST ref={ref}>
      Sort by...
      <InputPriceST
        onClick={() => {
          setIsOpenDropDown(true);
        }}
      >
        {sortType}
      </InputPriceST>
      {isOpenDropDown && (
        <DropDownBrands>
          <ul>
            {rangePrice.map((price, index) => {
              return (
                <li
                  key={index}
                  onMouseDown={() => {
                    onMouseDownBrand(price);
                  }}
                >
                  {price}
                </li>
              );
            })}
          </ul>
        </DropDownBrands>
      )}
    </LabelST>
  );
};

SortPanel.propTypes = {
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
};
export default SortPanel;
